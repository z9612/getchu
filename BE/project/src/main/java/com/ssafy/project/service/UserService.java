package com.ssafy.project.service;

import com.ssafy.project.domain.user.UserEntity;
import com.ssafy.project.domain.user.UserJoinRequest;

public interface UserService {
    boolean registerUser(UserJoinRequest userJoinRequest) throws Exception;
    int idCheck(String email);
    UserEntity getInfo(String email);
}
