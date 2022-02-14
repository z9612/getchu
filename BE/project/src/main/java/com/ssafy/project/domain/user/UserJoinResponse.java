package com.ssafy.project.domain.user;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserJoinResponse {
    private String email;

    //Entity -> Dto
    public UserJoinResponse(UserEntity user){
        this.email = user.getEmail();
    }
}
