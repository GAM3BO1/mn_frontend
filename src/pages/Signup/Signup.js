import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false); // 이메일 중복 확인 결과
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(""); // 패스워드 오류 메세지
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState(""); // 닉네임 오류 메세지
  const [withAnimals, setWithAnimals] = useState([]); // 관심있는 음식 체크박스
  //약관 동의 체크박스
  const [agreed, setAgreed] = useState({
    all: false,
    age: false,
    privacy: false,
    promotion: false,
  });

  // DB로 회원가입 정보 보내기
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setPasswordError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    setPasswordError(""); // 일치하면 에러 메시지 초기화

    // 실제 로그인 요청 처리 (axios를 사용하여 백엔드 API 호출)
    const response = axios
      .post("member/insert", {
        userEmail: email,
        userPwd: password,
        userNickName: nickname,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error("로그인 오류:", error);
      });
    console.log(response.data);
    console.log(email);
    console.log(password);
    console.log(nickname);
  };

  // DB로 이메일 정보 보내기
  const handleEmailCheck = async () => {
    // 이메일 일치여부 확인 (axios를 사용하여 백엔드 API 호출)
    const response = axios
      .post("/user/checkEmail", {
        userEmail: email,
      })
      .catch(function (error) {
        console.error("이메일 중복확인 오류:", error);
      });
    if (response.data.exists) {
      setIsEmailValid(false); // 중복된 이메일
    } else {
      setIsEmailValid(true); // 중복되지 않은 이메일
    }
  };

  const handleWithAnimalChange = (animal) => {
    if (withAnimals.includes(animal)) {
      setWithAnimals(withAnimals.filter((item) => item !== animal));
    } else {
      setWithAnimals((prevWithAnimals) => [...prevWithAnimals, animal]);
    }
  };

  //닉네임 길이 2~10 제한두는 코드
  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
    if (newNickname.length >= 2 && newNickname.length <= 10) {
      setNicknameError("");
    } else if (newNickname.length === 1) {
      setNicknameError("닉네임이 너무 짧습니다.");
    } else if (newNickname.length >= 11) {
      setNicknameError("닉네임이 너무 깁니다.");
    }
  };

  //전체동의를 눌렀을 때 밑 체크박스가 다 선택되게 하는 코드
  const handleAgreeAllChange = () => {
    const newAgreedAll = !agreed.all;
    setAgreed({
      all: newAgreedAll,
      age: newAgreedAll,
      privacy: newAgreedAll,
      promotion: newAgreedAll,
    });
  };
  //각자 체크 박스를 선택할 수 있는 코드
  const handleAgreeSingleChange = (target) => {
    setAgreed((prevAgreed) => ({
      ...prevAgreed,
      [target]: !prevAgreed[target],
    }));
  };

  return (
    <div className="signup-container">
      <h1>회원가입</h1>
      <hr />
      <form className="signup-form">
        <label>이메일</label>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="emailCheck-button" onClick={handleEmailCheck}>
          이메일 중복확인
        </button>
        {/* 
        {isEmailValid ? (
          <span style={{ color: "green" }}>사용 가능한 이메일입니다.</span>
        ) : (
          <span style={{ color: "red" }}>중복된 이메일입니다.</span>
        )}
        */}
        <label>비밀번호</label>
        <span className="signup-span">
          영문,숫자를 포함한 8자이상의 비밀번호를 입력해주세요
        </span>
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>비밀번호 확인</label>
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}

        <label>닉네임</label>
        <span className="signup-span">2자 이상 10자 이하로 입력해주세요</span>
        <input
          type="text"
          placeholder="별명(2 - 10자)"
          value={nickname}
          onChange={handleNicknameChange}
        />
        {nicknameError && <span style={{ color: "red" }}>{nicknameError}</span>}

        <div>
          <span className="signup-span2">함께하고 있는 반려동물</span>
          <span className="signup-span">* 중복선택 가능</span>
          <div className="signup-pets">
            <label>
              <input
                type="checkbox"
                checked={withAnimals.includes("반려견")}
                onChange={() => handleWithAnimalChange("반려견")}
              />
              반려견
            </label>
            <label>
              <input
                type="checkbox"
                checked={withAnimals.includes("반려묘")}
                onChange={() => handleWithAnimalChange("반려묘")}
              />
              반려묘
            </label>
            <label>
              <input
                type="checkbox"
                checked={withAnimals.includes("반려햄")}
                onChange={() => handleWithAnimalChange("반려햄")}
              />
              반려햄
            </label>
            <label>
              <input
                type="checkbox"
                checked={withAnimals.includes("반려조")}
                onChange={() => handleWithAnimalChange("반려조")}
              />
              반려조
            </label>
            <label>
              <input
                type="checkbox"
                checked={withAnimals.includes("기타")}
                onChange={() => handleWithAnimalChange("기타")}
              />
              기타
            </label>
            <label>
              <input
                type="checkbox"
                checked={withAnimals.includes("없음")}
                onChange={() => handleWithAnimalChange("없음")}
              />
              없음
            </label>
          </div>
        </div>
        <span className="signup-span2">약관동의</span>
        <div className="signup-agree">
          <label>
            <input
              type="checkbox"
              checked={agreed.all}
              onChange={handleAgreeAllChange}
            />
            전체동의
          </label>
          <label>
            <input
              type="checkbox"
              checked={agreed.age}
              onChange={() => handleAgreeSingleChange("age")}
            />
            만 14세 이상입니다. (필수)
          </label>
          <label>
            <input
              type="checkbox"
              checked={agreed.privacy}
              onChange={() => handleAgreeSingleChange("privacy")}
            />
            개인정보수집 및 이용동의 (필수)
          </label>
          <label>
            <input
              type="checkbox"
              checked={agreed.promotion}
              onChange={() => handleAgreeSingleChange("promotion")}
            />
            이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신 (선택)
          </label>
        </div>

        <button className="signup-button" onClick={handleSignup}>
          회원가입하기
        </button>
      </form>
    </div>
  );
};
export default Signup;
