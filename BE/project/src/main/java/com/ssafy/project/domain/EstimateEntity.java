package com.ssafy.project.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.Nullable;

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

    private String category;
    private String name;

    @ApiModelProperty(required = false)
    private String weight;

    @ApiModelProperty(required = false)
    private Integer price_min;

    @ApiModelProperty(required = false)
    private Integer price_avg;

    @ApiModelProperty(required = false)
    private Integer price_max;
}
