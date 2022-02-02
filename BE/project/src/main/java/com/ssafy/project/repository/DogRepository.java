package com.ssafy.project.repository;

import java.util.List;

import com.ssafy.project.domain.DogEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

//JpaRepository <엔티티 클래스의 타입, ID의 타입> 으로 상속
@Repository
public interface DogRepository extends JpaRepository<DogEntity,Integer>{
    
    @Query(nativeQuery = true, value = "select * from dog where health_Size =:size adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and adaptable_Tolerates_Being_Alone =:beingAlone and  friendly_Dog_Friendly =:dogFriendly   and friendly_Kid_Friendly =:kidFriendly and health_Amount_Of_Shedding =:amoutOfShedding")
    List<DogEntity> lifeStyleRefTest(int size,int apartmentLiving,int noviceOwners, 
    int beingAlone,  int kidFriendly, int dogFriendly,int amoutOfShedding); // 사이즈만으로 테스트
    
    @Query(nativeQuery = true, value = "select * from dog")
    List<DogEntity> lifeStyleRef(); // 라이프 스타일로 추천
}
