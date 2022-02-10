package com.ssafy.project.repository;

import java.util.List;

import com.ssafy.project.domain.EstimateEntity;
import com.ssafy.project.domain.EstimateResult;
import com.ssafy.project.domain.PriceResult;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EstimateRepository extends JpaRepository<EstimateEntity, Integer> {

    // 이하 수정
    @Query(nativeQuery = true, value = "select * from estimate")
    EstimateEntity getEstimate(String name);

    //사료값 정보 출력
    @Query(nativeQuery = true, value = "select e.name,concat(format(round( ( (d.weight_min+d.weight_max) /2)*0.025*30,0) * (e.price_avg/e.weight) ,0) ,'원') as price, e.image from estimate e join dog d where e.category = 'feed' and d.name =:name")
    public List<PriceResult> getFeedPrice(String name);

     //의료 정보 출력
     @Query(nativeQuery = true, value = "select name, format(e.price_min,0) as min, format(e.price_avg,0) as avg ,format(e.price_max,0) as max from estimate e where category = 'vaccination'")
    public List<EstimateResult> getHealthPrice(String name);

    // 수컷 중성화 정보 출력
    @Query(nativeQuery = true, value = "select name, concat(Format(price_min,0),'원') as 'min', concat(Format(price_avg,0),'원') as 'avg', concat(Format(price_max,0),'원') as 'max'"
            +
            "from estimate " +
            "where id=13 ")
    public EstimateResult getMaleDesexualization(String sex);

    // 암컷 중성화 정보 출력
    @Query(nativeQuery = true, value = "select name, concat(Format(price_min,0),'원') as 'min', concat(Format(price_avg,0),'원') as 'avg', concat(Format(price_max,0),'원') as 'max'"
            +
            "from estimate " +
            "where id=14 ")
    public EstimateResult getFemaleDesexualization(String sex);

    //생필품 가격 정보 출력
    @Query(nativeQuery = true, value = "select e.name, e.category, concat(format(round( ( (d.weight_min+d.weight_max) /2)*0.025*30,0) * (e.price_avg/e.weight) ,0) ,'원') as feedPrice, if(e.small is null, concat(format(price_avg,0),'원'), Case when(d.health_Size = 1) then concat(format(e.small,0),'원')  when(d.health_Size between 2 and 3) then concat(format(e.medium,0),'원')  when(d.health_Size between 4 and 5) then concat(format(e.large,0),'원')  else 0 end ) as price, e.image " +
    "from estimate e join dog d " +
    "where d.name =:name")
    List<PriceResult> getToolsPrice(String name);

}
