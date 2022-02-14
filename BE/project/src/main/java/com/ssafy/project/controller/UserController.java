package com.ssafy.project.controller;

import java.util.HashMap;
import java.util.Map;

import com.ssafy.project.domain.user.UpdateuserRequest;
import com.ssafy.project.domain.user.UserEntity;
import com.ssafy.project.domain.user.UserJoinRequest;
import com.ssafy.project.domain.user.UserJoinResponse;
import com.ssafy.project.service.JwtServiceImpl;
import com.ssafy.project.service.UserService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@CrossOrigin
@RestController
@RequestMapping("/user")
@Api("사용자 컨트롤러  API V1")
public class UserController {

	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private JwtServiceImpl jwtService;
	@Autowired
	private UserService service;

	@ApiOperation(value = "아이디 중복 여부 체크", notes = "같은 아이디를 가진 회원이 존재하지 여부를 반환한다. 아이디가 이미 존재한다면 'fail', 없는 아이디면 'success' 문자열을 반환한다.", response = String.class)
	@GetMapping("/idcheck")
	public ResponseEntity<String> idCheck(@RequestParam @ApiParam(value = "중복 체크할아이디", required = true) String email)
			throws Exception {
		int idCount = service.idCheck(email);

		System.out.println(idCount);
		if (idCount == 0) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.OK);
	}

	// @ApiOperation(value = "회원 로그인", notes = "Access-token과 로그인 결과 메세지를 반환한다.", response = Map.class)
	// @PostMapping("/login")
	// public ResponseEntity<Map<String, Object>> login( @RequestBody @ApiParam(value = "로그인 시 필요한 회원정보(아이디, 비밀번호).", required = true) MemberDto memberDto) {
	// 	Map<String, Object> resultMap = new HashMap<>();
	// 	HttpStatus status = null;
	// 	try {
	// 		MemberDto loginUser = memberService.login(memberDto);
	// 		if (loginUser != null) {
	// 			String token = jwtService.create("userid", loginUser.getUserid(),
	// 					"access-token");// key, data, subject
	// 			logger.debug("로그인 토큰정보 : {}", token);
	// 			resultMap.put("access-token", token);
	// 			resultMap.put("message", SUCCESS);
	// 			status = HttpStatus.ACCEPTED;
	// 		} else {
	// 			resultMap.put("message", FAIL);
	// 			status = HttpStatus.ACCEPTED;
	// 		}
	// 	} catch (Exception e) {
	// 		logger.error("로그인 실패 : {}", e);
	// 		resultMap.put("message", e.getMessage());
	// 		status = HttpStatus.INTERNAL_SERVER_ERROR;
	// 	}
	// 	return new ResponseEntity<Map<String, Object>>(resultMap, status);
	// }

	// @ApiOperation(value = "회원인증", notes = "회원 정보를 담은 Token을 반환한다.", response =
	// Map.class)
	// @GetMapping("/info/{userid}")
	// public ResponseEntity<Map<String, Object>> getInfo(@PathVariable("userid")
	// @ApiParam(value = "인증할 회원의 아이디.", required = true) String userid,
	// HttpServletRequest request) {
	// // logger.debug("userid : {} ", userid);
	// Map<String, Object> resultMap = new HashMap<>();
	// HttpStatus status = HttpStatus.ACCEPTED;
	// if (jwtService.isUsable(request.getHeader("access-token"))) {
	// logger.info("사용 가능한 토큰!!!");
	// try {
	// // 로그인 사용자 정보.
	// MemberDto memberDto = memberService.info(userid);
	// resultMap.put("userInfo", memberDto);
	// resultMap.put("message", SUCCESS);
	// status = HttpStatus.ACCEPTED;
	// } catch (Exception e) {
	// logger.error("정보조회 실패 : {}", e);
	// resultMap.put("message", e.getMessage());
	// status = HttpStatus.INTERNAL_SERVER_ERROR;
	// }
	// } else {
	// logger.error("사용 불가능 토큰!!!");
	// resultMap.put("message", FAIL);
	// status = HttpStatus.ACCEPTED;
	// }
	// return new ResponseEntity<Map<String, Object>>(resultMap, status);
	// }

	@ApiOperation(value = "회원 가입", notes = "회원 정보를 입력받아 가입한다.", response = UserJoinResponse.class)
	@PostMapping
	public boolean join(
			@RequestBody @ApiParam(value = "가입을 요청할 회원 정보", required = true) UserJoinRequest userJoinRequest)
			throws Exception {

		return service.joinUser(userJoinRequest);
	}

	@ApiOperation(value = "회원 정보 보기", notes = "이메일에 해당하는 회원의 정보를 반환한다.", response = UserEntity.class)
	@GetMapping("/{userid}")
	public UserEntity getInfo(@PathVariable("userid") @ApiParam(value = "정보를 얻어올 회원 아이디", required = true) String email)
			throws Exception {
		return service.getInfo(email);
	}

	@ApiOperation(value = "회원 정보 수정", notes = "수정할 회원 정보를 입력한다. 그리고 DB수정 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PutMapping
	public ResponseEntity<String> modify(
			@RequestBody @ApiParam(value = "수정할 회원 정보", required = true) UpdateuserRequest userRequest)
			throws Exception {
		if (service.updateUser(userRequest)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.OK);
	}

	@ApiOperation(value = "회원 탈퇴", notes = "이메일에 해당하는 회원 정보를 삭제한다. 그리고 DB삭제 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("/{email}")
	public ResponseEntity<String> delete(
			@PathVariable("email") @ApiParam(value = "삭제할 회원의 이메일", required = true) String email) throws Exception {
		if (service.deleteUser(email)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.OK);
	}

	// @ApiOperation(value = "로그아웃", notes = "로그아웃", response = String.class)
	// @GetMapping("/logout")
	// public ResponseEntity<String> logout() throws Exception {
	// return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
	// }
}
