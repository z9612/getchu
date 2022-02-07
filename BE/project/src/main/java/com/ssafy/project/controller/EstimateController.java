package com.ssafy.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;

import java.util.List;

import com.ssafy.project.domain.EstimateEntity;
import com.ssafy.project.service.EstimateService;

@RestController
@RequestMapping("/estimate")
public class EstimateController {
	
	@Autowired
    private EstimateService estimateService;

    @ApiOperation(value = "모든 견적 정보를 출력합니다.")
    @GetMapping("/findAll")
    public List<EstimateEntity> findAll(){
        return estimateService.findAll();
    }

}