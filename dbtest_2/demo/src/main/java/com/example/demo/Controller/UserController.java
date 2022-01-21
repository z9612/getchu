package com.example.demo.Controller;

import java.util.List;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserDao;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController // JSON 형태 결과값을 반환해줌 (@ResponseBody가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. (Autowired 역할)
@RequestMapping(value = "/v1")// version1의 API
public class UserController {

    private final UserDao userDao;
     /**
     * 멤버 조회
     * @return
     */
    @GetMapping("user")
    public List<User> findAllMember() {
        return userDao.findAll();
    }

    /**
     * 회원가입
     * @return
     */
    @PostMapping("user")
    public User signUp() {
        final User member = User.builder()
                .name("test user")
                .build();
        return userDao.save(member);
    }
}