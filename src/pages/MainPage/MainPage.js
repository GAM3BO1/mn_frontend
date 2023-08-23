import React, { useState } from "react";
import "./MainPage.css";
import Banner from "../../component/Banner/Banner";
import CardList from "../../component/CardList/CardList";
import { Link } from "react-router-dom";

function MainPage() {
  const [cards, setCards] = useState([]);

  return (
    <div className="container">
      <div className="imgWrapper">
        <Link to="/mypage">마이페이지</Link>
        <Banner className="image" />
      </div>

      <div className="board-title">
        지금 <span style={{ color: "#ff6a10" }}>핫🔥한 </span>레시피
      </div>
      <CardList cards={cards.slice(4, 8)} showTitle={false} />

      <div className="board-title">
        Today <span style={{ color: "#ff6a10" }}>레시피 </span>
      </div>
      <CardList cards={cards.slice(4, 8)} showTitle={false} />

      <div className="board-title">
        오늘의 🎉<span style={{ color: "#ff6a10" }}>주인공 </span>
      </div>
      <CardList cards={cards.slice(4, 8)} showTitle={false} />
    </div>
  );
}

export default MainPage;
