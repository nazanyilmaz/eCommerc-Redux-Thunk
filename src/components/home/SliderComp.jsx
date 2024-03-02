import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">Shop the Essentials</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut
              porro perferendis consequatur quae dolorum repellendus itaque
              earum veniam molestias!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              Inspect
            </div>
          </div>
          <img
            className="size-1/2"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/csnnsvmzomr1gu7qfcnd/air-max-270-womens-shoes-Pgb94t.png"
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">Shop the Essentials</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut
              porro perferendis consequatur quae dolorum repellendus itaque
              earum veniam molestias!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              Inspact
            </div>
          </div>
          <img
            className="size-1/2 "
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/846aea9a-e9e6-485c-bc6c-bf6d88fe932e/air-max-270-womens-shoes-Pgb94t.png"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
