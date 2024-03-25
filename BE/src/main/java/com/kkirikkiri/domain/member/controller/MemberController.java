package com.kkirikkiri.domain.member.controller;

import com.kkirikkiri.domain.member.dto.LoginRequest;
import com.kkirikkiri.domain.member.dto.MemberInfo;
import com.kkirikkiri.domain.member.dto.RegisterRequest;
import com.kkirikkiri.domain.member.dto.UpdateInfoRequest;
import com.kkirikkiri.domain.member.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RequestMapping("/members")
@RestController
public class MemberController {

    private final MemberService memberService;

    private ResponseEntity<String> exceptionHandling(Exception e) {
        // 예외 처리 로직을 구현하세요
        // 여기에는 예외에 대한 적절한 처리를 수행하는 코드가 들어갑니다.
        return new ResponseEntity<String>("Error occurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping
    public ResponseEntity<Long> registerMember(
            @RequestBody RegisterRequest registerRequest
    ) {

        return ResponseEntity.ok(memberService.registerMember(registerRequest));
    }

    @GetMapping
    public ResponseEntity<MemberInfo> login(
            @RequestBody @Valid LoginRequest loginRequest
    ) {

        // JWT토큰을 생성하였다. jwt라이브러리를 이용하여 생성.
//        String accessToken = jwtTokenizer.createAccessToken(member.getId(), member.getLoginId());
//        String refreshToken = jwtTokenizer.createRefreshToken(member.getId(), member.getLoginId());

        // RefreshToken을 DB에 저장한다. 성능 때문에 DB가 아니라 Redis에 저장하는 것이 좋다.
//        RefreshToken refreshTokenEntity = new RefreshToken();
//        refreshTokenEntity.setValue(refreshToken);
//        refreshTokenEntity.setMemberId(member.getMemberId());
//        refreshTokenService.addRefreshToken(refreshTokenEntity);
//
//        MemberInfo loginResponse = MemberInfo.builder()
//                .accessToken(accessToken)
//                .refreshToken(refreshToken)
//                .memberId(member.getMemberId())
//                .nickname(member.getName())
//                .build();
        return ResponseEntity.ok(memberService.login(loginRequest));


    }

    @GetMapping("/{memberId}")
    public ResponseEntity<?> getMember(@PathVariable() long memberId) {
        try {
            MemberInfo memberInfo = memberService.getMember(memberId);
            if (memberInfo != null)
                return new ResponseEntity<MemberInfo>(memberInfo, HttpStatus.OK);
            else
                return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return exceptionHandling(e);

        }
    }

    @PutMapping("/{memberid}")
    public ResponseEntity<?> modifyMember(@PathVariable long memberid, @RequestBody UpdateInfoRequest updateInfoRequest) {
        try {
            return ResponseEntity.ok(memberService.modifyMember(memberid, updateInfoRequest));
        } catch (Exception e) {
            return exceptionHandling(e);
        }
    }

    @DeleteMapping("/{memberId}")
    public ResponseEntity<?> deleteMember(@PathVariable long memberId) {
        try {
            return ResponseEntity.ok(memberService.deleteMember(memberId));
        } catch (Exception e) {
            return exceptionHandling(e);
        }
    }

    // 아이디 중복 검사
    @GetMapping("/{loginId}/check-login-id")
    public ResponseEntity<Boolean> checkLoginId(@PathVariable String loginId) {
        return ResponseEntity.ok(memberService.checkLoginId(loginId));
    }

    // 닉네임 중복 검사
    @GetMapping("/{nickName}/check-nickname")
    public ResponseEntity<Boolean> checkNickname(@PathVariable String nickName) {
        return ResponseEntity.ok(memberService.checkNickname(nickName));
    }
}

