package com.ssafy.project.controller;

import java.util.List;

import com.ssafy.project.domain.DogEntity;
import com.ssafy.project.repository.DogRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ReferenceController{

    private DogRepository repo;

    @GetMapping("/lifestyle")
    public List<DogEntity> dogEntity(){

        return repo.findAll();
    }


}