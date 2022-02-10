package com.ssafy.project.repository;

import com.ssafy.project.domain.DesexualizationResult;
import com.ssafy.project.domain.EstimateEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EstimateRepository extends JpaRepository<EstimateEntity, Integer> {

    // 이하 수정
    @Query(nativeQuery = true, value = "select * from estimate")
    EstimateEntity getEstimate(String name);

    // 수컷 중성화 정보 출력
    // @Query(nativeQuery = true, value = "select concat(Format(price_min,0),'원') as '전국최소가', concat(Format(price_avg,0),'원') as '전국평균가', concat(Format(price_max,0),'원') as '전국최대가'" +
    //         "from estimate " +
    //         "where id=13 ")
    @Query(nativeQuery = true, value = "select * from estimate")
    public EstimateEntity getDesexualization(String sex, int num);

}
