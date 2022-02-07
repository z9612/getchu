package com.ssafy.project.repository;

import java.util.List;

import com.ssafy.project.domain.EstimateEntity;

public interface EstimateRepository {

	List<EstimateEntity> findAll();

}
