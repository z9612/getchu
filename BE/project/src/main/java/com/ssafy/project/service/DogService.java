package com.ssafy.project.service;

import java.util.List;

import com.ssafy.project.domain.DogEntity;

public interface DogService {
    List<DogEntity> lifeStyleRef(); // 라이프 스타일로 추천
    List<DogEntity> mbtiRef(); // mbti 정보로 추천
    
}
