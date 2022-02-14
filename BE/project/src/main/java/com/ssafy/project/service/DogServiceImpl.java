package com.ssafy.project.service;

import java.util.List;

import com.ssafy.project.domain.dog.DogEntity;
import com.ssafy.project.domain.dog.DogNameImageResult;
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

            if (result.size() != 0) {
                System.out.println("1. 아이와 친화성, 다른 개와 친화성 삭제 쿼리");
                return result;
            }

            result = repo.lifeStyleRef(size, apartmentLiving, beingAlone, amountOfShedding);

            if (result.size() != 0) {
                System.out.println("2. 초보자에게 키우기 좋은 정도 삭제 쿼리");
                return result;
            }

            result = repo.lifeStyleRef(size, apartmentLiving, amountOfShedding);

            if (result.size() != 0) {
                System.out.println("3. 혼자 있는 정도 삭제 쿼리");
                return result;
            }

            result = repo.lifeStyleRef(size, apartmentLiving);

            if (result.size() != 0) {
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

    // 견종 특성 추천
    @Override
    public List<DogEntity> dogStyle(int size, int apartmentLiving, int noviceOwners, int dogFriendly, int strangers,
            int family, int amountOfShedding, int easyToGroom, int easyToTrain, int intelligence, int barkOrHowl,
            int wanderlust, int energyLevel, int playfullness) {

        // 질문지에 따라 1점<->5점, 2점<->4점으로 변환해야하는 항목들 변환
        easyToGroom =Math.abs(easyToGroom-6);
        easyToTrain = Math.abs(easyToTrain-6);


        List<DogEntity> result = repo.dogStyle(size, apartmentLiving, noviceOwners, dogFriendly, strangers,
                family, amountOfShedding, easyToGroom, easyToTrain, intelligence, barkOrHowl,
                wanderlust, energyLevel, playfullness);// lifeStyle 추천을 시도

        // 결과 값이 없으면 최대한 비슷한 견종을 추천하기 위해 칼럼을 하나씩 제거한 함수를 사용
        if (result.size() == 0) {
            result = repo.dogStyle(size, apartmentLiving, noviceOwners, strangers, family, amountOfShedding,
                    easyToGroom, easyToTrain, intelligence, barkOrHowl, wanderlust, energyLevel, playfullness);

            if (result.size() != 0) {
                System.out.println("1. 다른 개와 친화성 삭제 쿼리");
                return result;
            }

            result = repo.dogStyle(size, apartmentLiving, noviceOwners, family, amountOfShedding, easyToGroom,
                    easyToTrain, intelligence, barkOrHowl, wanderlust, energyLevel, playfullness);

            if (result.size() != 0) {
                System.out.println("2. 낯선 이와 친화성 삭제 삭제 쿼리");
                return result;
            }

            result = repo.dogStyle(size, apartmentLiving, noviceOwners, amountOfShedding, easyToGroom, easyToTrain,
                    intelligence, barkOrHowl, wanderlust, energyLevel, playfullness);

            if (result.size() != 0) {
                System.out.println("3. 가족에게 친밀함 삭제");
                return result;
            }

            result = repo.dogStyle(size, apartmentLiving, noviceOwners, amountOfShedding, easyToTrain, intelligence,
                    barkOrHowl, wanderlust, energyLevel, playfullness);
            if (result.size() != 0) {
                System.out.println("4. 손질하기 쉬움 삭제");
                return result;
            }

            result = repo.dogStyle(size, apartmentLiving, noviceOwners, amountOfShedding, intelligence, barkOrHowl,
                    wanderlust, energyLevel, playfullness);

            if (result.size() != 0) {
                System.out.println("5.훈련하기 쉬움 삭제");
                return result;
            }
            result = repo.dogStyle(size, apartmentLiving, noviceOwners, amountOfShedding, intelligence, wanderlust,
                    energyLevel, playfullness);

            if (result.size() != 0) {
                System.out.println("6.짖는 정도 삭제 삭제");
                return result;
            }
            result = repo.dogStyle(size, apartmentLiving, noviceOwners, amountOfShedding, wanderlust, energyLevel,
                    playfullness);

            if (result.size() != 0) {
                System.out.println("7.지능 삭제");
                return result;
            }

            result = repo.dogStyle(size, apartmentLiving, amountOfShedding, wanderlust, energyLevel, playfullness);
            if (result.size() != 0) {
                System.out.println("8.초심자에게 키우기 좋음 삭제");
                return result;
            }
            result = repo.dogStyle(size, apartmentLiving, amountOfShedding, energyLevel, playfullness);
            if (result.size() != 0) {
                System.out.println("9.산책하기 좋아함 삭제");
                return result;
            }
            result = repo.dogStyle(size, apartmentLiving, amountOfShedding);
            if (result.size() != 0) {
                System.out.println("10.놀기 좋아함, 에너지 레벨 삭제");
                return result;
            }
            result = repo.dogStyle(size, apartmentLiving);
            if (result.size() != 0) {
                System.out.println("11. 털 양 삭제");
                return result;
            }
            result = repo.dogStyle(size);
            if (result.size() != 0) {
                System.out.println("12. 아파트 거주 삭제");
                return result;
            } else {
                // 이 값이 나오면 안됨
                System.out.println("해당되는 견종이 없습니다");
                return result;
            }
        }

        return result;
    }

    @Override
    public List<DogEntity> mbtiRef(String mbti) {
        return repo.mbtiRef(mbti);
    }

    @Override
    public List<DogEntity> findAll() {
        return repo.findAll();
    }

    @Override
    public DogEntity findByName(String name) {
        return repo.findByName(name);
    }

    @Override
    public List<DogNameImageResult> getDogNameImage(String name) {
        return repo.getDogNameImage(name);
    }

    @Override
    public List<DogNameImageResult> getEveryDogNameImage() {
        return repo.getEveryDogNameImage();
    }
    
    

}
