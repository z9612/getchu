package com.ssafy.project.service;

import java.util.List;

import com.ssafy.project.domain.DogEntity;
import com.ssafy.project.repository.DogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DogServiceImpl implements DogService{

    @Autowired
    DogRepository repo;

    @Override
    public List<DogEntity> lifeStyleRefTest(int size,int aprtmentLiving,int noviceOwners, 
    int beingAlone, int kidFriendly, int dogFriendly,  int amoutOfShedding) {
        return repo.lifeStyleRefTest(size,aprtmentLiving,noviceOwners,beingAlone,dogFriendly,kidFriendly,amoutOfShedding);
    }
    
    @Override
    public List<DogEntity> lifeStyleRef() {
        //서비스 데이터 처리하기
        return null;
    }

    @Override
    public List<DogEntity> mbtiRef() {
        return null;
    }

    @Override
    public List<DogEntity> findAll() {
        return repo.findAll();
    }

   
}
