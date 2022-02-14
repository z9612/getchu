package com.ssafy.project.service;

import com.ssafy.project.domain.user.UpdateuserRequest;
import com.ssafy.project.domain.user.UserEntity;
import com.ssafy.project.domain.user.UserJoinRequest;

public interface UserService {
    boolean joinUser(UserJoinRequest userJoinRequest) throws Exception;
    int idCheck(String email);
    UserEntity getInfo(String email);

    boolean deleteUser(String email);
    boolean updateUser(UpdateuserRequest userRequest);

}
