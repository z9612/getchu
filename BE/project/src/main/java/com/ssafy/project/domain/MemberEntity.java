package com.ssafy.project.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberEntity {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@ApiModelProperty(value = "회원 아이디")
	private String user_id;
	@ApiModelProperty(value = "회원 이름")
	private String name;
	@ApiModelProperty(value = "회원 비밀번호")
	private String password;
	@ApiModelProperty(value = "회원 이메일")
	private String email;
	@ApiModelProperty(value = "닉네임")
	private String nickname;
	@ApiModelProperty(value = "MBTI")
	private String mbti;
	@ApiModelProperty(value = "원하는 개")
	private String wish_dog;
	@ApiModelProperty(value = "프로필사진")
	private String image;
	@ApiModelProperty(value = "가입날짜")
	private String join_date;
}
