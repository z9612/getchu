package com.ssafy.project.controller;

import java.util.List;

import com.ssafy.project.domain.dog.DogEntity;
import com.ssafy.project.domain.dog.DogNameImageResult;
import com.ssafy.project.service.DogService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping("/dog")
public class DogController{

    @Autowired
    private DogService service;

    @ApiOperation(value = "라이프 스타일로 견종 추천",response = List.class)
    @GetMapping("/recommand/lifestyle")
    public List<DogEntity> lifeStyle(@ApiParam(value = "견종의 크기",  required = true) int size, @ApiParam(value = "아파트 거주 가능성", required = true) int apartmentLiving, @ApiParam(value = "초보자에게 키우기 좋은 정도", required = true)  int noviceOwners, @ApiParam(value = "혼자 있는 능력", required = true)  int beingAlone, @ApiParam(value = "아이와 친한 정도", required = true)  int kidFriendly, @ApiParam(value = "다른 개와 친한 정도", required = true)  int dogFriendly, @ApiParam(value = "털 빠짐 정도", required = true)  int amountOfShedding){

        return service.lifeStyleRef(size,apartmentLiving,noviceOwners,beingAlone,kidFriendly,dogFriendly,amountOfShedding);
    }

    @ApiOperation(value = "견종 특성으로 추천" , response = List.class)
    @GetMapping("/recommand/dogStyle")
    public List<DogEntity> dogStyle(int size, int apartmentLiving,int noviceOwners,int dogFriendly,int strangers, int family, int amountOfShedding, int easyToGroom, int easyToTrain, int intelligence, int barkOrHowl, int wanderlust, int energyLevel, int playfullness	  ){

        return service.dogStyle(size,apartmentLiving,noviceOwners,dogFriendly,strangers,family,amountOfShedding,easyToGroom,easyToTrain,intelligence,barkOrHowl,wanderlust,energyLevel,playfullness);
    }

        
    @ApiOperation(value = "MBTI 견종 추천",response = List.class)
    @GetMapping("/recommand//mbti")
    public List<DogEntity> mbti(String mbti){
    	return service.mbtiRef(mbti);
    }

    @ApiOperation(value = "모든 견종 데이터를 출력합니다",response = List.class)
    @GetMapping("/findAll")
    public List<DogEntity> findAll(){

        return service.findAll();
    }

    @ApiOperation(value = "한 견종의 모든 데이터를 이름을 받아서 출력합니다",response = DogEntity.class)
    @GetMapping("/findByName")
    public DogEntity findByName(@ApiParam(value = "견종명") @RequestParam String name){
        return service.findByName(name);
    }

    @ApiOperation(value = "한 견종의 이름과 이미지만 이름을 받아서 출력합니다",response = DogEntity.class)
    @GetMapping(value="/getDogNameImage")
    public List<DogNameImageResult> getDogNameImage(@RequestParam String name) {
        return service.getDogNameImage(name);
    }

    @ApiOperation(value = "모든 견종의 이름과 이미지만 출력합니다",response = DogEntity.class)
    @GetMapping(value="/getEveryDogNameImage")
    public List<DogNameImageResult> getMethodName() {
        return service.getEveryDogNameImage();
    }

}