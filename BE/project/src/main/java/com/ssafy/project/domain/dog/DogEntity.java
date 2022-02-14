package com.ssafy.project.domain.dog;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;



@Entity //엔티티로 쓸 클래스라고 선언. 엔티티 클래스는 테이블 그 자체이다.
@Table(name = "dog") //dog 테이블을 이용한다
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DogEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String name_english;
    private String history;
    private String personality;
    private int weight_min;
    private int weight_max;
    private int height_min;
    private int height_max;

    private int adaptable;
    private int adaptable_Adaps_Well_To_Apartment_Living;
    private int adaptable_Good_For_Novice_Owners;
    private int adaptable_Sensitivity_Level;
    private int adaptable_Tolerates_Being_Alone;
    private int adaptable_Tolerates_Cold_Weather;
    private int adaptable_Tolerates_Hot_Weather;
    private int friendly;
    private int friendly_Affectionate_With_Family;
    private int friendly_Kid_Friendly;
    private int friendly_Dog_Friendly;
    private int friendly_Friendly_Toward_Strangers;
    private int health;
    private int health_Amount_Of_Shedding;
    private int health_Drooling_Potential;
    private int health_Easy_To_Groom;
    private int health_General_Health;
    private int health_Potential_For_Wieght_Gain;
    private int health_Size;
    private int trainable;
    private int trainable_Easy_To_Train;
    private int trainable_Intelligence;
    private int trainable_Potential_For_Mouthiness;
    private int trainable_Prey_Drive;
    private int trainable_Tendency_To_Bark_Or_Howl;
    private int trainable_Wanderlust_Potential;
    private int physical;
    private int physical_Energy_Level;
    private int physical_Intensity;
    private int physical_Exercise_Needs;
    private int physical_Potential_For_Playfulness;
    private String image;
    private String mbti;
    private int famous;
}   

