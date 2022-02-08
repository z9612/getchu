package com.ssafy.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

import java.util.List;

import com.ssafy.project.domain.EstimateEntity;
import com.ssafy.project.service.EstimateService;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/estimate")
public class EstimateController {

    @Autowired
    private EstimateService estimateService;

    @ApiOperation(value = "모든 견적 정보를 출력합니다.", response = List.class)
    @GetMapping("/findAll")
    public List<EstimateEntity> findAll() {
        return estimateService.findAll();
    }

    //@ApiOperation(value = "견종명을 입력 받아서 견적을 보내줍니다.", response = DogEntity.class)
    @GetMapping(value="")
    public EstimateEntity getEstimate(@ApiParam(value = "견종명") @RequestParam String name) {
        return estimateService.getEstimate(name);
    }

    

    @ApiOperation(value = "성별 정보를 받아서 중성화 비용을 출력합니다.", response = EstimateEntity.class)
    @GetMapping(value = "/desexualization")
    public int getDesexualization(@ApiParam(value = "성별") @RequestParam String sex) {
        return estimateService.getDesexualization(sex);
    }

}
