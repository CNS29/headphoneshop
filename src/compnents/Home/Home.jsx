import React from 'react';
import { Link } from 'react-router-dom';
import headphone from "../../assests/img/headphone.png";

const Home = () => {
    return (
        <div className="prewiew">
            <div className="preview_img">
                <img src={headphone} alt="" />
            </div>
            <div className="preview_desc">
                <h1 className="preview_title">Hear your Music, not the Noise</h1>
                <p className="preview_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam doloribus possimus molestias odit consequuntur quis, maiores aspernatur nihil atque harum consequatur ab deleniti. Assumenda ipsa qui minima eveniet deleniti.</p>
                <div className="preview_button">
                    <Link to="/product" className="btn btn_buynow">Buy Now</Link>
                    <div className="btn btn_explore">Explore</div>
                </div>
            </div>
        </div>
    )
}

export default Home;
