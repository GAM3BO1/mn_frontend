import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProfileEdit.css";

const ProfileEdit = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState(""); // "남" 또는 "여" 값 설정
  const [birthdate, setBirthdate] = useState("");
  const [profileImage, setProfileImage] = useState(""); // 이미지 파일 상태 관리
  const [bio, setBio] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleProfileUpdate = () => {
    // TODO: 회원 정보 수정 로직 작성
  };

  const handlePasswordChange = () => {
    // TODO: 비밀번호 변경 로직 작성
  };

  const handleWithdrawal = () => {
    // TODO: 탈퇴 로직 작성
  };

  return (
    <div className="profile-edit-form">
      <form className="formStyle">
        <div>
          <h2>회원정보 수정</h2>
          {/* 
          <Link className="withDrawal" to="/withDrawal">
            탈퇴하기
          </Link>
          */}
        </div>
        <label>이메일</label>
        <input
          className="box"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label>별명</label>
        <input
          className="box"
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
        />
        <br />
        <label>성별</label>
        <label className="radio-man">
          <input
            type="radio"
            value="남"
            checked={gender === "남"}
            onChange={handleGenderChange}
          />
          남자
        </label>
        <label className="radio-woman">
          <input
            type="radio"
            value="여"
            checked={gender === "여"}
            onChange={handleGenderChange}
          />
          여자
        </label>
        <br />
        <label>생년월일</label>
        <input
          className="box"
          type="text"
          placeholder="YYYY-MM-DD"
          value={birthdate}
          onChange={handleBirthdateChange}
        />
        <br />
        <label>프로필 이미지</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfileImageChange}
        />
        <br />
        {profileImage && <img src={profileImage} alt="프로필 이미지" />}
        <label>한줄소개</label>
        <input
          className="box"
          type="text"
          value={bio}
          onChange={handleBioChange}
        />
        <br />
        <button onClick={handleProfileUpdate}>회원정보 수정</button>
        <button onClick={handlePasswordChange}>비밀번호 변경</button>
      </form>
    </div>
  );
};

export default ProfileEdit;
