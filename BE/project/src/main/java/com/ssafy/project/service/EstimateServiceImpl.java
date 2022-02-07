package com.ssafy.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.project.domain.EstimateEntity;
import com.ssafy.project.repository.EstimateRepository;

@Service
public class EstimateServiceImpl implements EstimateService {

	@Autowired
    EstimateRepository repo;
	
	@Override
	public List<EstimateEntity> findAll() {
        return repo.findAll();
    }
}
