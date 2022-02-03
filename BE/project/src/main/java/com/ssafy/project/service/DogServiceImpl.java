package com.ssafy.project.service;

import java.sql.Savepoint;
import java.util.List;

import com.ssafy.project.domain.DogEntity;
import com.ssafy.project.repository.DogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DogServiceImpl implements DogService {

    @Autowired
    DogRepository repo;

    @Override
    public List<DogEntity> lifeStyleRef(int size, int apartmentLiving, int noviceOwners, int beingAlone,
            int kidFriendly, int dogFriendly, int amountOfShedding) {

        List<DogEntity> result = repo.lifeStyleRef(size, apartmentLiving, noviceOwners, beingAlone, kidFriendly,
                dogFriendly, amountOfShedding);// lifeStyle 추천을 시도

        System.out.println("파라미터 :" + " " + size + " " + apartmentLiving + " " + noviceOwners + " " + beingAlone + " "
                + kidFriendly + " " + dogFriendly + " " + amountOfShedding);
        System.out.println("사이즈 : " + result.size());

        // 결과 값이 없으면 최대한 비슷한 견종을 추천하기 위해 칼럼을 하나씩 제거한 함수를 사용
        if (result.size() == 0) {
            result = repo.lifeStyleRef(size, apartmentLiving, noviceOwners, beingAlone, amountOfShedding);

            if (result.size() != 0){
                System.out.println("1. 아이와 친화성, 다른 개와 친화성 삭제 쿼리");
                return result;
            }

            result = repo.lifeStyleRef(size, apartmentLiving, beingAlone, amountOfShedding);

            if (result.size() != 0){
                System.out.println("2. 초보자에게 키우기 좋은 정도 삭제 쿼리");
                return result;
            }

            result = repo.lifeStyleRef(size, apartmentLiving, amountOfShedding);

            if (result.size() != 0){
                System.out.println("3. 혼자 있는 정도 삭제 쿼리");
                return result;
            }

            result = repo.lifeStyleRef(size, apartmentLiving);

            if (result.size() != 0){
                System.out.println("4. 털 빠짐 정도 삭제 쿼리");
                return result;
            }

            result = repo.lifeStyleRef(size);
            if (result.size() != 0) {
                System.out.println("5. 아파트 거주 삭제 쿼리");
                return result;
            }
        }

        return result;
    }

    @Override
    public List<DogEntity> mbtiRef() {
        return null;
    }

    @Override
    public List<DogEntity> findAll() {
        return repo.findAll();
    }

}
