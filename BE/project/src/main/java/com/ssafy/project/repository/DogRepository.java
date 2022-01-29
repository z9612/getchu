package com.ssafy.project.repository;

import com.ssafy.project.domain.DogEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DogRepository extends JpaRepository<DogEntity,Long>{
    
}
