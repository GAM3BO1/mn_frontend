import React from "react";
import MypageNav from "../../component/MypageNav/MypageNav";
import Profile from "../../component/Profile/Profile";
import ProfileEditForm from "../../component/ProfileEdit/ProfileEdit";
import "./Mypage.css"; // 위에서 작성한 CSS 파일을 임포트하고 있다고 가정합니다.

const Mypage = () => {
  return (
    <div>
      <hr />
      <MypageNav />
      <hr />
      <div className="mypage-content">
        <Profile />
        <ProfileEditForm />
      </div>
    </div>
  );
};

export default Mypage;
