"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

function About() {
  const [isMobile, setIsMobile] = useState(false);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setIsMobile(window.innerWidth <= 640);
  //     };

  //     handleResize();
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // აქ md ზღვარი ზუსტადაა
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("orientationchange", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkMobile);
    };
  }, []);

  const image = (
    <div className="image-div w-full sm:w-[80%] md:w-1/2 max-w-[500px] rounded-[20px] bg-red-500">
      <Image
        className="w-full rounded-[20px]"
        src="/magnetocover.jpg"
        alt="magneto-cover"
        width={400}
        height={400}
      />
    </div>
  );

  const text = (
    <div className="rich-text w-full px-5 sm:w-[80%] md:w-1/2">
      <p className="text-white text-wrap lg:text-[18px] md:text-[15px] text-[13px]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        impedit, laboriosam, voluptatum atque totam cupiditate quo aliquid
        facere quibusdam molestiae, eveniet animi maxime laborum? Similique
        dolore natus harum necessitatibus tempore! Fuga totam consequuntur non
        velit voluptate dicta, veritatis quis possimus sapiente veniam
        perferendis hic cumque ex quasi ducimus molestias officia // tempore
        maxime culpa accusamus? Neque. Nesciunt, doloremque eum vitae //
        similique nihil dolores voluptatum recusandae placeat accusamus facere
        // dolor tempore, itaque dignissimos cumque velit? Optio fugiat //
        praesentium consequuntur nesciunt ullam corrupti dolor in suscipit //
        omnis rerum. Dicta quaerat quidem eos voluptatem placeat et eaque //
        similique nihil dolores voluptatum recusandae placeat accusamus facere
        // dolor tempore, itaque dignissimos cumque velit? Optio fugiat //
        praesentium consequuntur nesciunt ullam corrupti dolor in suscipit //
        omnis rerum. Dicta quaerat quidem eos voluptatem placeat et eaque
      </p>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <div className="w-full h-screen p-10 flex items-center justify-center">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="w-full max-w-[500px]"
          >
            <SwiperSlide>{image}</SwiperSlide>
            <SwiperSlide>{text}</SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div className="flex mx-auto h-screen items-center justify-around w-full p-10 sm:flex-col md:flex-row lg:flex sm:justify-evenly sm:gap-12 text-638">
          {image}
          {text}
        </div>
      )}
    </>
  );
}

export default About;
