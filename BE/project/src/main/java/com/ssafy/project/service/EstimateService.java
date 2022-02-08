package com.ssafy.project.service;

import java.util.List;

import com.ssafy.project.domain.EstimateEntity;

public interface EstimateService {
	List<EstimateEntity> findAll();
	EstimateEntity getEstimate(String name);

	int getDesexualization(String sex);
}
