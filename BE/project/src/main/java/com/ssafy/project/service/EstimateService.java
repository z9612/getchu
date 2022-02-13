package com.ssafy.project.service;

import java.util.List;

import com.ssafy.project.domain.estimate.EstimateEntity;
import com.ssafy.project.domain.estimate.EstimateResult;
import com.ssafy.project.domain.estimate.PriceResult;

public interface EstimateService {
	List<EstimateEntity> findAll();
	List<PriceResult> getFeedPrice(String name);
	List<EstimateResult> getHealthPrice(String name);
	List<PriceResult> getEstimate(String name);
	EstimateResult getDesexualization(String sex);
}
