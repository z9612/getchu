package com.ssafy.project.service;

import javax.transaction.Transactional;

import com.ssafy.project.domain.user.UserEntity;
import com.ssafy.project.domain.user.UserJoinRequest;
import com.ssafy.project.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository repo;

    @Override
    @Transactional
    public boolean registerUser(UserJoinRequest userJoinRequest) throws Exception {
        UserEntity entity = userJoinRequest.toEntity();

        System.out.println(entity.getEmail());
        System.out.println(entity.getPassword());
        System.out.println(entity.getNickname());

        repo.userRegister(entity);

        System.out.println("here2");
        return true;
    }

    @Override
    public int idCheck(String email) {
        return repo.idCheck(email);
    }

    @Override
    public UserEntity getInfo(String email) {
        return repo.getInfo(email);
    }

}
