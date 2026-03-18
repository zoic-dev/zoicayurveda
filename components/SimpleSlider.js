"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SimpleSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <img src={"/banner1.png"} style={{ width: '100%' }} />
            </div>
            {/* <div>
                <img src={"/banner2.jpg"} style={{ width: '100%' }} />
            </div>
            <div>
                <img src={"/banner3.jpg"} style={{ width: '100%' }} />
            </div>
            <div>
                <img src={"/banner4.jpg"} style={{ width: '100%' }} />
            </div>
            <div>
                <img src={"/banner5.jpg"} style={{ width: '100%' }} />
            </div> */}
        </Slider>
    );
}

export default SimpleSlider;