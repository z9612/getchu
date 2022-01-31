package com.ssafy.project.repository;

import java.util.List;

import com.ssafy.project.domain.DogEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

//JpaRepository <엔티티 클래스의 타입, ID의 타입> 으로 상속
public interface DogRepository extends JpaRepository<DogEntity,Integer>{
    
    @Query(nativeQuery = true, value = "select * from dog")
    List<DogEntity> lifeStyleRef(); // 라이프 스타일로 추천
}
