package com.ssafy.project.controller;

import java.util.List;

import com.ssafy.project.domain.DogEntity;
import com.ssafy.project.repository.DogRepository;
import com.ssafy.project.service.DogService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DogController{

    @Autowired
    private DogService dogService;

    @GetMapping("/lifestyle")
    public List<DogEntity> dogEntity(){

        return dogService.lifeStyleRef();
    }


}