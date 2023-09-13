import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header.js";
import Footer from "./component/Footer/Footer.js";
import MainPage from "./pages/MainPage/MainPage.js";
import NoticeBoard from "./pages/Notice/NoticeBoard.js";
import NoticeDetail from "./pages/Notice/NoticeDetail.js";
import NoticeWrite from "./pages/Notice/NoticeWrite.jsx";
import NoticeUpdate from "./pages/Notice/NoticeUpdate.jsx";
import RecipeBoard from "./pages/Recipe/RecipeBoard.jsx";
import RecipeDetail from "./pages/Recipe/RecipeDetail.jsx";
import RecipeWrite from "./pages/Recipe/RecipeWrite.jsx";
import RecipeUpdate from "./pages/Recipe/RecipeUpdate.jsx";
import PartyBoard from "./pages/Party/PartyBoard.jsx";
import PartyDetail from "./pages/Party/PartyDetail.js";
import PartyWrite from "./pages/Party/PartyWrite.jsx";
import PartyUpdate from "./pages/Party/PartyUpdate.jsx";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup.js";
import MyPage from "./pages/MyPage/MyPage.js";
import ResetPwd from "./pages/ResetPwd/ResetPwd.js";
import MyComment from "./pages/MyPage/MyComment.js";
import MyContent from "./pages/MyPage/MyContent.js";

function App() {
  const [token, setToken] = useState(localStorage.getItem('login-token')); // token 상태 추가

  const handleTokenChanged = (newToken) => {
    console.log("새 토큰: " + newToken);
    setToken(newToken);
  };
  return (
    <BrowserRouter>
      <Header currentToken={token} tokenChanged={handleTokenChanged}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/noticeBoard" element={<NoticeBoard />}/>
        <Route path="/noticeDetail" element={<NoticeDetail />}/>
        <Route path="/noticeWrite" element={<NoticeWrite />}/>
        <Route path="/noticeUpdate" element={<NoticeUpdate />}/>
        <Route path="/recipeBoard" element={<RecipeBoard />} />
        <Route path="/recipeDetail" element={<RecipeDetail />} />
        <Route path="/recipeWrite" element={<RecipeWrite />} />
        <Route path="/recipeUpdate" element={<RecipeUpdate />} />
        <Route path="/partyBoard" element={<PartyBoard />} />
        <Route path="/partyDetail" element={<PartyDetail />} />
        <Route path="/partyWrite" element={<PartyWrite />}/>
        <Route path="/partyUpdate" element={<PartyUpdate />}/>
        <Route path="/login" element={<Login tokenChanged={handleTokenChanged} />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/resetPwd" element={<ResetPwd />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/withDrawal" element={<WithDrawal />} />
        <Route path="/changePwd" element={<ChangePwd />} />
        <Route path="/myContent" element={<MyContent />} />
        <Route path="/myComment" element={<MyComment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;