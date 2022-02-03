package com.ssafy.project.controller;

import java.util.List;

import com.ssafy.project.domain.DogEntity;
import com.ssafy.project.service.DogService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping("/dog")
public class DogController{

    @Autowired
    private DogService dogService;

    @ApiOperation(value = "라이프 스타일로 견종 추천",response = List.class)
    @GetMapping("/lifestyle")
    public List<DogEntity> lifeStyle(@ApiParam(value = "견종의 크기",  required = true) int size, @ApiParam(value = "아파트 거주 가능성", required = true) int apartmentLiving, @ApiParam(value = "초보자에게 키우기 좋은 정도", required = true)  int noviceOwners, @ApiParam(value = "혼자 있는 능력", required = true)  int beingAlone, @ApiParam(value = "아이와 친한 정도", required = true)  int kidFriendly, @ApiParam(value = "다른 개와 친한 정도", required = true)  int dogFriendly, @ApiParam(value = "털 빠짐 정도", required = true)  int amountOfShedding){

        return dogService.lifeStyleRef(size,apartmentLiving,noviceOwners,beingAlone,kidFriendly,dogFriendly,amountOfShedding);
    }

    @ApiOperation(value = "견종 특성으로 추천" , response = List.class)
    @GetMapping("/dogStyle")
    public List<DogEntity> dogStyle(int size, int apartmentLiving,int noviceOwners,int dogFriendly,int strangers, int family, int amountOfShedding, int easyToGroom, int easyToTrain, int intelligence, int barkOrHowl, int wanderlust, int energyLevel, int playfullness	  ){

        return dogService.dogStyle(size,apartmentLiving,noviceOwners,dogFriendly,strangers,family,amountOfShedding,easyToGroom,easyToTrain,intelligence,barkOrHowl,wanderlust,energyLevel,playfullness);
    }

    @ApiOperation(value = "모든 견종 데이터를 출력합니다",response = List.class)
    @GetMapping("/findAll")
    public List<DogEntity> findAll(){

        return dogService.findAll();
    }


}