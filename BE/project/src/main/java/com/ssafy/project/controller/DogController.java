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

    @ApiOperation(value = "라이프 스타일 견종 추천 샘플",response = List.class)
    @GetMapping("/lifestyleTest")
    public List<DogEntity> lifeStyleTest(int size, @ApiParam(value = "아파트 거주 가능", required = true) int aprtmentLiving,int noviceOwners, 
    int beingAlone,  int kidFriendly,int dogFriendly, int amoutOfShedding){

        return dogService.lifeStyleRefTest(size,aprtmentLiving,noviceOwners,beingAlone,dogFriendly,kidFriendly,amoutOfShedding);
    }


    @GetMapping("/lifestyle")
    public List<DogEntity> lifeStyle(int size, int apartmentLiving){

        return dogService.lifeStyleRef(size,apartmentLiving);
    }

    @ApiOperation(value = "모든 견종 데이터를 출력합니다",response = List.class)
    @GetMapping("/findAll")
    public List<DogEntity> findAll(){

        return dogService.findAll();
    }
    
    @ApiOperation(value = "MBTI 견종 추천",response = List.class)
    @GetMapping("/mbti")
    public List<DogEntity> mbti(String mbti){
    	return dogService.mbtiRef(mbti);
    }


}