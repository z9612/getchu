package com.ssafy.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.project.domain.DesexualizationResult;
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

    @Override
    public EstimateEntity getEstimate(String name) {

        return repo.getEstimate(name);
    }

    @Override
    public EstimateEntity getDesexualization(String sex) {
        // EstimateEntity entity;

        if (sex.equals("수컷")) {
            return repo.getDesexualization(sex,13);
        }
        else {
            return repo.getDesexualization(sex,14);
        }

        // if (sex.equals("수컷")) {
        //     entity = repo.getDesexualization(sex, 13);
        //     return new DesexualizationDto(entity);
        // }
        // else {
        //     entity = repo.getDesexualization(sex, 14);
        //     return new DesexualizationDto(entity);
        // }

    }

}
