package com.ssafy.project.controller;

import java.util.List;

import com.ssafy.project.domain.estimate.EstimateEntity;
import com.ssafy.project.domain.estimate.EstimateResult;
import com.ssafy.project.domain.estimate.PriceResult;
import com.ssafy.project.service.EstimateService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping("/estimate")
public class EstimateController {

    @Autowired
    private EstimateService service;

    @ApiOperation(value = "모든 견적 정보를 출력합니다.", response = List.class)
    @GetMapping("/findAll")
    public List<EstimateEntity> findAll() {
        return service.findAll();
    }

    // @ApiOperation(value = "종합 견적을 견종명을 입력 받아서 보내줍니다.", response = EstimateEntity.class)
    // @GetMapping(value="/estimate")
    // public EstimateEntity getEstimate(@ApiParam(value = "견종명") @RequestParam String name) {
    //     return service.getEstimate(name);
    // }

    @ApiOperation(value = " 한 달 사료값 정보를 견종명을 입력 받아서 보내줍니다.", response = PriceResult.class)
    @GetMapping(value="/feedPrice")
    public List<PriceResult> getFeedPrice(@ApiParam(value = "견종명") @RequestParam String name) {
        return service.getFeedPrice(name);
    }

    @ApiOperation(value = "의료 기초 비용을 견종명을 입력 받아서 보내줍니다.", response = EstimateResult.class)
    @GetMapping(value="/health") 
    public List<EstimateResult> getHealthPrice(@RequestParam String name) {
        return service.getHealthPrice(name);
    }
    

    @ApiOperation(value = "중성화 비용을 성별 정보를 받아서 출력합니다.")
    @GetMapping(value = "/desexualization")
    public EstimateResult getDesexualization(@ApiParam(value = "성별") @RequestParam String sex) {
        return service.getDesexualization(sex);
    }

    @ApiOperation(value = "모든 견적 정보를 견종명을 받아서 출력합니다.")
    @GetMapping(value="/estimate")
    public List<PriceResult> getToolsPrice(@RequestParam String name) {
        return service.getToolsPrice(name);
    }
    

}
