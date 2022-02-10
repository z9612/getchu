package com.ssafy.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.project.domain.EstimateResult;
import com.ssafy.project.domain.EstimateEntity;
import com.ssafy.project.domain.PriceResult;
import com.ssafy.project.repository.EstimateRepository;

@Service
public class EstimateServiceImpl implements EstimateService {

    @Autowired
    EstimateRepository repo;

    @Override
    public List<EstimateEntity> findAll() {
        return repo.findAll();
    }

    @Override
    public EstimateEntity getEstimate(String name) {

        return repo.getEstimate(name);
    }

    @Override
    public List<PriceResult> getFeedPrice(String name) {
        return repo.getFeedPrice(name);
    }

    @Override
    public List<EstimateResult> getHealthPrice(String name) {
        return repo.getHealthPrice(name);
    }

    
    @Override
    public List<PriceResult> getToolsPrice(String name) {
        return repo.getToolsPrice(name);
    }

    @Override
    public EstimateResult getDesexualization(String sex) {
        // EstimateEntity entity;

        if (sex.equals("수컷")) {
            return repo.getMaleDesexualization(sex);
        }
        else if(sex.equals("암컷")) {
            return repo.getFemaleDesexualization(sex);
        }

        // if (sex.equals("수컷")) {
        //     entity = repo.getDesexualization(sex, 13);
        //     return new DesexualizationDto(entity);
        // }
        // else {
        //     entity = repo.getDesexualization(sex, 14);
        //     return new DesexualizationDto(entity);
        // }
        return null;

    }


    

 

}
