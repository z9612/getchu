package com.ssafy.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.project.service.EstimateService;

@RestController
@RequestMapping("/estimate")
public class EstimateController {
	
	@Autowired
    private EstimateService estimateService;

}
