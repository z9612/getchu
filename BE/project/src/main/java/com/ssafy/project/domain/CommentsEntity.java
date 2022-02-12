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
@Table(name = "comment")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CommentsEntity {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@ApiModelProperty(value = "댓글 번호")			
	private int comment_id;
	@ApiModelProperty(value = "작성자 아이디")		
	private String user_id;
	@ApiModelProperty(value = "댓글 내용")			
	private String content;
	@ApiModelProperty(value = "작성일")			
	private String reg_time;
	@ApiModelProperty(value = "댓글이 딸린 글 번호")	
	private int board_id;
}
