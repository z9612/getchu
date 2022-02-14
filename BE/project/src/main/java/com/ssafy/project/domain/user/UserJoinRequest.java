package com.ssafy.project.domain.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class UserJoinRequest{
    private String email;
    private String password;
    private String nickname;

    //dto -> entity
    public UserEntity toEntity(){
        return UserEntity.builder()
            .email(email)
            .password(password)
            .nickname(nickname)
            .build();
    }
}