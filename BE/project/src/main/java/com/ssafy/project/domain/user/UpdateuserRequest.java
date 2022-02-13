package com.ssafy.project.domain.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class UpdateuserRequest {

    //바꿀 정보에 대해 
    private String email;
    private String password;
    private String nickname;

    //dto -> entity
    public UserEntity toEntity(){
        return UserEntity.builder()
            .password(password)
            .nickname(nickname)
            .build();
    }
}
