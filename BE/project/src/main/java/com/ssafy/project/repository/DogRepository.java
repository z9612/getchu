package com.ssafy.project.repository;

import java.util.List;

import com.ssafy.project.domain.dog.DogEntity;
import com.ssafy.project.domain.dog.DogNameImageResult;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

//JpaRepository <엔티티 클래스의 타입, ID의 타입> 으로 상속
@Repository
public interface DogRepository extends JpaRepository<DogEntity, Integer> {

    // 라이프 스타일 견종 추천
    // --------------------------------------------------------------------------------------------------------------------------------
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and adaptable_Tolerates_Being_Alone =:beingAlone and friendly_Dog_Friendly =:dogFriendly and friendly_Kid_Friendly =:kidFriendly and health_Amount_Of_Shedding =:amountOfShedding order by famous DESC, name")
    List<DogEntity> lifeStyleRef(int size, int apartmentLiving, int noviceOwners, int beingAlone, int kidFriendly,
            int dogFriendly, int amountOfShedding); // 라이프 스타일로 추천

    // 아이와 친화성, 다른 개와 친화성 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and adaptable_Tolerates_Being_Alone =:beingAlone and health_Amount_Of_Shedding =:amountOfShedding order by famous DESC, name")
    List<DogEntity> lifeStyleRef(int size, int apartmentLiving, int noviceOwners, int beingAlone, int amountOfShedding);

    // 초보자에게 키우기 좋은 정도 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Tolerates_Being_Alone =:beingAlone and health_Amount_Of_Shedding =:amountOfShedding order by famous DESC, name")
    List<DogEntity> lifeStyleRef(int size, int apartmentLiving, int beingAlone, int amountOfShedding);

    // 혼자 있는 정도 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and health_Amount_Of_Shedding =:amountOfShedding order by famous DESC, name")
    List<DogEntity> lifeStyleRef(int size, int apartmentLiving, int amountOfShedding);

    // 털 빠짐 정도 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving order by famous DESC, name")
    List<DogEntity> lifeStyleRef(int size, int apartmentLiving);

    // 아파트 거주 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size order by famous DESC, name")
    List<DogEntity> lifeStyleRef(int size);
    // --------------------------------------------------------------------------------------------------------------------------------

    // 견종 특성 추천
    // --------------------------------------------------------------------------------------------------------------------------------
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and friendly_Dog_Friendly =:dogFriendly and friendly_Friendly_Toward_Strangers =:strangers and friendly_Affectionate_With_Family=:family and health_Amount_Of_Shedding =:amountOfShedding and health_Easy_To_Groom =:easyToGroom and trainable_Easy_To_Train=:easyToTrain and trainable_Intelligence=:intelligence and trainable_Tendency_To_Bark_Or_Howl=:barkOrHowl and trainable_Wanderlust_Potential=:wanderlust and physical_Energy_Level=:energyLevel and physical_Potential_For_Playfulness=:playfullness order by famous DESC, name")
    List<DogEntity> dogStyle(int size, int apartmentLiving, int noviceOwners, int dogFriendly, int strangers,
            int family, int amountOfShedding, int easyToGroom, int easyToTrain, int intelligence, int barkOrHowl,
            int wanderlust, int energyLevel, int playfullness);

    // 다른 개와 친화성 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and friendly_Friendly_Toward_Strangers =:strangers and friendly_Affectionate_With_Family=:family and health_Amount_Of_Shedding =:amountOfShedding and health_Easy_To_Groom =:easyToGroom and trainable_Easy_To_Train=:easyToTrain and trainable_Intelligence=:intelligence and trainable_Tendency_To_Bark_Or_Howl=:barkOrHowl and trainable_Wanderlust_Potential=:wanderlust and physical_Energy_Level=:energyLevel and physical_Potential_For_Playfulness=:playfullness order by famous DESC, name")
    List<DogEntity> dogStyle(int size, int apartmentLiving, int noviceOwners, int strangers, int family,
            int amountOfShedding, int easyToGroom, int easyToTrain, int intelligence, int barkOrHowl, int wanderlust,
            int energyLevel, int playfullness);

    // 낯선 이와 친화성 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and friendly_Affectionate_With_Family=:family and health_Amount_Of_Shedding =:amountOfShedding and health_Easy_To_Groom =:easyToGroom and trainable_Easy_To_Train=:easyToTrain and trainable_Intelligence=:intelligence and trainable_Tendency_To_Bark_Or_Howl=:barkOrHowl and trainable_Wanderlust_Potential=:wanderlust and physical_Energy_Level=:energyLevel and physical_Potential_For_Playfulness=:playfullness order by famous DESC, name")
    List<DogEntity> dogStyle(int size, int apartmentLiving, int noviceOwners, int family, int amountOfShedding,
            int easyToGroom, int easyToTrain, int intelligence, int barkOrHowl, int wanderlust, int energyLevel,
            int playfullness);

    // 가족에게 친밀함 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and health_Amount_Of_Shedding =:amountOfShedding and health_Easy_To_Groom =:easyToGroom and trainable_Easy_To_Train=:easyToTrain and trainable_Intelligence=:intelligence and trainable_Tendency_To_Bark_Or_Howl=:barkOrHowl and trainable_Wanderlust_Potential=:wanderlust and physical_Energy_Level=:energyLevel and physical_Potential_For_Playfulness=:playfullness order by famous DESC, name")
    List<DogEntity> dogStyle(int size, int apartmentLiving, int noviceOwners, int amountOfShedding, int easyToGroom,
            int easyToTrain, int intelligence, int barkOrHowl, int wanderlust, int energyLevel, int playfullness);

    // 손질하기 쉬움 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and health_Amount_Of_Shedding =:amountOfShedding and trainable_Easy_To_Train=:easyToTrain and trainable_Intelligence=:intelligence and trainable_Tendency_To_Bark_Or_Howl=:barkOrHowl and trainable_Wanderlust_Potential=:wanderlust and physical_Energy_Level=:energyLevel and physical_Potential_For_Playfulness=:playfullness order by famous DESC, name")
    List<DogEntity> dogStyle(int size, int apartmentLiving, int noviceOwners, int amountOfShedding, int easyToTrain,
            int intelligence, int barkOrHowl, int wanderlust, int energyLevel, int playfullness);

    // 훈련하기 쉬움 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and health_Amount_Of_Shedding =:amountOfShedding and trainable_Intelligence=:intelligence and trainable_Tendency_To_Bark_Or_Howl=:barkOrHowl and trainable_Wanderlust_Potential=:wanderlust and physical_Energy_Level=:energyLevel and physical_Potential_For_Playfulness=:playfullness order by famous DESC, name")
    List<DogEntity> dogStyle(int size, int apartmentLiving, int noviceOwners, int amountOfShedding, int intelligence,
            int barkOrHowl, int wanderlust, int energyLevel, int playfullness);

    // 짖는 정도 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and health_Amount_Of_Shedding =:amountOfShedding and trainable_Intelligence=:intelligence and trainable_Wanderlust_Potential=:wanderlust and physical_Energy_Level=:energyLevel and physical_Potential_For_Playfulness=:playfullness order by famous DESC, name")
    List<DogEntity> dogStyle(int size, int apartmentLiving, int noviceOwners, int amountOfShedding, int intelligence,
            int wanderlust, int energyLevel, int playfullness);

    // 지능 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and adaptable_Good_For_Novice_Owners =:noviceOwners and health_Amount_Of_Shedding =:amountOfShedding and trainable_Wanderlust_Potential=:wanderlust and physical_Energy_Level=:energyLevel and physical_Potential_For_Playfulness=:playfullness order by famous DESC, name")
    List<DogEntity> dogStyle(int size, int apartmentLiving, int noviceOwners, int amountOfShedding, int wanderlust,
            int energyLevel, int playfullness);

    // 초심자에게 키우기 좋음 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and health_Amount_Of_Shedding =:amountOfShedding and trainable_Wanderlust_Potential=:wanderlust and physical_Energy_Level=:energyLevel and physical_Potential_For_Playfulness=:playfullness order by famous DESC, name")
    List<DogEntity> dogStyle(int size, int apartmentLiving, int amountOfShedding, int wanderlust, int energyLevel,
            int playfullness);

    // 산책하기 좋아함 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and health_Amount_Of_Shedding =:amountOfShedding and physical_Energy_Level=:energyLevel and physical_Potential_For_Playfulness=:playfullness order by famous DESC, name")
    List<DogEntity> dogStyle(int size, int apartmentLiving, int amountOfShedding, int energyLevel, int playfullness);

    // 에너지 레벨, 놀기 좋아함 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving and health_Amount_Of_Shedding =:amountOfShedding order by famous DESC, name")
    List<DogEntity> dogStyle(int size, int apartmentLiving, int amountOfShedding);

    // 털 빠짐 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size and adaptable_Adaps_Well_To_Apartment_Living=:apartmentLiving order by famous DESC, name")
    List<DogEntity> dogStyle(int size, int apartmentLiving);

    // 아파트 거주 삭제
    @Query(nativeQuery = true, value = "select * from dog where health_Size=:size order by famous DESC, name")
    List<DogEntity> dogStyle(int size);
    // --------------------------------------------------------------------------------------------------------------------------------

    // MBTI 추천
    @Query(nativeQuery = true, value = "select * from dog where mbti LIKE %:mbti% order by famous DESC, name")
    List<DogEntity> mbtiRef(String mbti); // mbti로 추천


    //이름으로 견종 찾기
    @Query(nativeQuery = true, value =  "select * from dog where name=:name order by famous DESC, name")
    DogEntity findByName(String name);

    //이름으로 견종명, 이미지 찾기
    @Query(nativeQuery = true, value = "select name, image from dog where name like %:name% order by famous DESC, name")
    List<DogNameImageResult> getDogNameImage(String name);

    //모든 견종명, 이미지 
    @Query(nativeQuery = true, value = "select name, image from dog order by famous DESC, name")
    List<DogNameImageResult> getEveryDogNameImage();

}
