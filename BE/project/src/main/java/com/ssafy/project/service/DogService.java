package com.ssafy.project.service;

import java.util.List;

import com.ssafy.project.domain.dog.DogEntity;
import com.ssafy.project.domain.dog.DogNameImageResult;

public interface DogService {
    List<DogEntity> lifeStyleRef(int size, int apartmentLiving, int noviceOwners, int beingAlone, int kidFriendly, int dogFriendly, int amountOfShedding); // 라이프 스타일로 추천
    List<DogEntity> dogStyle(int size, int apartmentLiving,int noviceOwners,int dogFriendly,int strangers, int family, int amountOfShedding, int easyToGroom, int easyToTrain, int intelligence, int barkOrHowl, int wanderlust, int energyLevel, int playfullness);
    
    List<DogEntity> mbtiRef(String mbti); // mbti 정보로 추천
    List<DogEntity> findAll();
    DogEntity findByName(String name);
    List<DogNameImageResult> getDogNameImage(String name);

    //모든 개의 이름, 이미지
    List<DogNameImageResult> getEveryDogNameImage();
    
}
