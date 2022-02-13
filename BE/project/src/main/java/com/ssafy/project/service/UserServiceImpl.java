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
    public boolean joinUser(UserJoinRequest userJoinRequest) throws Exception {
        UserEntity entity = userJoinRequest.toEntity();

        if (repo.joinUser(entity) == 1) {
            return true;
        } else {
            return false;

        }
    }

    @Override
    public int idCheck(String email) {
        return repo.idCheck(email);
    }

    @Override
    public UserEntity getInfo(String email) {
        return repo.getInfo(email);
    }

    @Override
    public boolean deleteUser(String email) {

        if (repo.deleteUser(email) == 1) {
            return true;
        } else {
            return false;

        }
    }

}
