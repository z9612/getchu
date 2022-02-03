package com.ssafy.project.service;

import java.util.List;

import com.ssafy.project.domain.DogEntity;

public interface DogService {
    List<DogEntity> lifeStyleRef(int size, int apartmentLiving,int noviceOwners, int beingAlone, int kidFriendly, int dogFriendly,int amountOfShedding); // 라이프 스타일로 추천
    List<DogEntity> dogStyle(int size, int apartmentLiving,int noviceOwners,int dogFriendly,int strangers, int family, int amountOfShedding, int easyToGroom, int easyToTrain, int intelligence, int barkOrHowl, int wanderlust, int energyLevel, int playfullness);
    
    List<DogEntity> mbtiRef(); // mbti 정보로 추천
    List<DogEntity> findAll();
    
}
