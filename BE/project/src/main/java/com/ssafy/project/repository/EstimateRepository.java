package com.ssafy.project.repository;

import java.util.List;

import com.ssafy.project.domain.estimate.EstimateEntity;
import com.ssafy.project.domain.estimate.EstimateResult;
import com.ssafy.project.domain.estimate.FeedPriceResult;
import com.ssafy.project.domain.estimate.FullEstimate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EstimateRepository extends JpaRepository<EstimateEntity, Integer> {

        // 견종별 모든 견적 정보 출력
        @Query(nativeQuery = true, value = "select e.name, e.category_first, e.category_second, round( ((d.weight_min+d.weight_max) /2)*0.025*30 * (e.price_avg/e.weight),-1) as dogFeedPrice, if(e.small is null, price_avg, Case when(d.health_Size = 1) then e.small  when(d.health_Size between 2 and 3) then e.medium  when(d.health_Size between 4 and 5) then e.large  else 0 end ) as productPrice,  round((price_avg/weight),0) as ProductPricePerWeight , e.image, e.comment from estimate e join dog d where d.name = :name order by category_first, category_second")
        List<FullEstimate> getEstimate(String name);

        // 한 달 사료 값 정보 출력
        @Query(nativeQuery = true, value = "select e.name,round( ((d.weight_min+d.weight_max) /2)*0.025*30 * (e.price_avg/e.weight), -1) as dogFeedPrice, e.image, e.comment from estimate e join dog d where e.category_second = 'food' and d.name =:name order by dogFeedPrice")
        public List<FeedPriceResult> getFeedPrice(String name);

        // 의료 정보 출력
        @Query(nativeQuery = true, value = "select name, e.price_min as min, e.price_avg as avg ,e.price_max as max from estimate e where category_first = 'medical'")
        public List<EstimateResult> getHealthPrice(String name);

        // 수컷 중성화 정보 출력
        @Query(nativeQuery = true, value = "select name, price_min as 'min', price_avg as 'avg', price_max as 'max'"
                        +
                        "from estimate " +
                        "where id=13 ")
        public EstimateResult getMaleDesexualization(String sex);

        // 암컷 중성화 정보 출력
        @Query(nativeQuery = true, value = "select name, price_min as 'min', price_avg as 'avg', price_max as 'max'"
                        +
                        "from estimate " +
                        "where id=14 ")
        public EstimateResult getFemaleDesexualization(String sex);

        

}
