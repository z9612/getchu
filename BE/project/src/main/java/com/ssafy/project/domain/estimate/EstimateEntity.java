package com.ssafy.project.domain.estimate;

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
@Table(name = "estimate")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class EstimateEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ApiModelProperty(value = "대분류")
    private String category_first;

    @ApiModelProperty(value = "소분류")
    private String category_second;

    @ApiModelProperty(value = "물품명")
    private String name;

    @ApiModelProperty(required = false, value = "무게")
    private Double weight;

    @ApiModelProperty(required = false, value = "최소 가격")
    private Integer price_min;

    @ApiModelProperty(required = false, value = "평균 가격")
    private Integer price_avg;

    @ApiModelProperty(required = false, value = "최대 가격")
    private Integer price_max;

    @ApiModelProperty(required = false, value = "최소 가격")
    private Integer small;

    @ApiModelProperty(required = false, value = "평균 가격")
    private Integer medium;

    @ApiModelProperty(required = false, value = "최대 가격")
    private Integer large;

    @ApiModelProperty(required = false, value = "이미지 주소")
    private String image;
    
    @ApiModelProperty(required = false, value = "설명")
    private String comment;

}
