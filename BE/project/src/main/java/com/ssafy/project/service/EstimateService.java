package com.ssafy.project.service;

import java.util.List;

import com.ssafy.project.domain.EstimateResult;
import com.ssafy.project.domain.EstimateEntity;
import com.ssafy.project.domain.PriceResult;

public interface EstimateService {
	List<EstimateEntity> findAll();
	EstimateEntity getEstimate(String name);

	List<PriceResult> getFeedPrice(String name);
	List<EstimateResult> getHealthPrice(String name);
	List<PriceResult> getToolsPrice(String name);
	EstimateResult getDesexualization(String sex);
}
