package com.ssafy.project.repository;

import javax.transaction.Transactional;

import com.ssafy.project.domain.user.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    @Query(nativeQuery = true, value = "insert into user(email,password,nickname) values(:#{#entity.email},:#{#entity.password},:#{#entity.nickname})")
    @Modifying
    @Transactional
    void userRegister(UserEntity entity);

    @Query(nativeQuery = true, value = "select count(*) from user where email=:email")
    int idCheck(String email);

    @Query(nativeQuery = true, value = "select * from user where email=:email")
    UserEntity getInfo(String email);
}
