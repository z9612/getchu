package com.ssafy.project.service;

import java.util.List;

import com.ssafy.project.domain.estimate.EstimateEntity;
import com.ssafy.project.domain.estimate.EstimateResult;
import com.ssafy.project.domain.estimate.FeedPriceResult;
import com.ssafy.project.domain.estimate.FullEstimate;

public interface EstimateService {
	List<EstimateEntity> findAll();

	List<FullEstimate> getEstimate(String name);
	List<FeedPriceResult> getFeedPrice(String name);
	List<EstimateResult> getHealthPrice(String name);
	EstimateResult getDesexualization(String sex);
}
