package com.ssafy.project.repository;

import javax.transaction.Transactional;

import com.ssafy.project.domain.user.UpdateuserRequest;
import com.ssafy.project.domain.user.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    // @Query(nativeQuery = true , value = "select * from user")

    @Query(nativeQuery = true, value = "insert into user(email,password,nickname) values(:#{#entity.email},:#{#entity.password},:#{#entity.nickname})")
    @Modifying //Insert, Update, Delete 구문에 꼭 넣어줘야한다.
    @Transactional //메서드 테스트시 rollback 해준다
    int joinUser(UserEntity entity);

    @Query(nativeQuery = true, value = "select count(*) from user where email=:email")
    int idCheck(String email);

    @Query(nativeQuery = true, value = "select * from user where email=:email")
    UserEntity getInfo(String email);

    @Modifying //Insert, Update, Delete 구문에 꼭 넣어줘야한다.
    @Transactional //메서드 테스트시 rollback 해준다
    @Query(nativeQuery = true , value = "update user u set u.password =:#{#entity.getPassword} , u.nickname =:#{#entity.getNickname}  where u.email =:#{#entity.getEmail}")
    int updateUser(UserEntity entity);

    @Query(nativeQuery = true, value = "delete from user where email=:email")
    @Modifying //Insert, Update, Delete 구문에 꼭 넣어줘야한다.
    @Transactional //메서드 테스트시 rollback 해준다
    int deleteUser(String email);


}
