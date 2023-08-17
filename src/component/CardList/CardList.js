// CardList.js

import './CardList.css'

function CardList(){
    return(
        <div className="card_area">
            <h3>card list</h3>
            <ul className="card_wrap">
                <li>
                    <div className="img_set">
                        <img src={process.env.PUBLIC_URL+'/images/food1.jpeg'}/>
                    </div>
                    <div className="text_set">
                        <div>삼치조림 만드는 법(삼치 감자 무 조림 생선 조림 만들기)</div>
                        <div>
                            <a href="#" className="profile_link">
                                <div className="profile_img">
                                    <img src={process.env.PUBLIC_URL+'/images/dog1.jpeg'} />
                                </div>
                                <div className="profile_text">
                                    써지니
                                </div>
                            </a>
                        </div>
                        <div className="comment_set">
                            <span className="star_icon">
                                <img src={process.env.PUBLIC_URL+'/images/star.png'}/>
                            </span>
                            <span className="star_icon">
                                <img src={process.env.PUBLIC_URL+'/images/star.png'}/>
                            </span>
                            <span className="star_icon">
                                <img src={process.env.PUBLIC_URL+'/images/star.png'}/>
                            </span>
                            <span className="star_icon">
                                <img src={process.env.PUBLIC_URL+'/images/star.png'}/>
                            </span>
                            <span className="star_icon">
                                <img src={process.env.PUBLIC_URL+'/images/star.png'}/>
                            </span>
                            <span>(1)</span>
                            <span>조회수 17만</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="img_set"></div>
                </li>
                <li>
                    <div className="img_set"></div>
                </li>
                <li>
                    <div className="img_set"></div>
                </li>
                <li>
                    <div className="img_set"></div>
                </li>
            </ul>
        </div>
    );
}

export default CardList;