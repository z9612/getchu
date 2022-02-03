package com.ssafy.project.repository;

import java.util.List;

import com.ssafy.project.domain.DogEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

//JpaRepository <엔티티 클래스의 타입, ID의 타입> 으로 상속
@Repository
public interface DogRepository extends JpaRepository<DogEntity, Integer> {

    // --------------------------------------------------------------------------------------------------------------------------------
    // 라이프 스타일 견종 추천
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and adaptable_Tolerates_Being_Alone =:beingAlone and friendly_Dog_Friendly =:dogFriendly and friendly_Kid_Friendly =:kidFriendly and health_Amount_Of_Shedding =:amountOfShedding")
    List<DogEntity> lifeStyleRef(int size, int apartmentLiving, int noviceOwners, int beingAlone, int kidFriendly,
            int dogFriendly, int amountOfShedding); // 라이프 스타일로 추천

    // 아이와 친화성, 다른 개와 친화성 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and adaptable_Tolerates_Being_Alone =:beingAlone and health_Amount_Of_Shedding =:amountOfShedding")
    List<DogEntity> lifeStyleRef(int size, int apartmentLiving, int noviceOwners, int beingAlone, int amountOfShedding);

    // 초보자에게 키우기 좋은 정도 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Tolerates_Being_Alone =:beingAlone and health_Amount_Of_Shedding =:amountOfShedding")
    List<DogEntity> lifeStyleRef(int size, int apartmentLiving, int beingAlone, int amountOfShedding);

    // 혼자 있는 정도 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and health_Amount_Of_Shedding =:amountOfShedding")
    List<DogEntity> lifeStyleRef(int size, int apartmentLiving, int amountOfShedding);

    // 털 빠짐 정도 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving")
    List<DogEntity> lifeStyleRef(int size, int apartmentLiving);

    // 아파트 거주 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size")
    List<DogEntity> lifeStyleRef(int size);

    // --------------------------------------------------------------------------------------------------------------------------------
    // 견종 특성 추천
    

    // --------------------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------------------
    // MBTI 추천

    // --------------------------------------------------------------------------------------------------------------------------------
}
