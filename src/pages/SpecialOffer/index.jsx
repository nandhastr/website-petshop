import React from 'react'

import HeroImg from "/images/hero.jpg";
import Title from '../../components/common/GrandTitle/Title';
import LearnMoreBox from './../../components/common/LearnMoreBox/index';

const SpecialOffer = () => {
  return (
      <>
          <div
              className="h-[80%]  py-[5%] px-[5%]"
              style={{
                  backgroundImage: `url(${HeroImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
              }}
          >
              <div className="w-[100%] md:w-[80%]">
                  <Title title={"Penawaran Khusus"} subtitle={"Kami Selalu Menjaga Hewan Peliharaan Anda Tetap Bahagia Setiap Saat"} />
                  <div className="flex flex-col  gap-4 mt-[7%]">
                      <p className="text-[#fff]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores vitae ut ipsum, provident est rerum repellendus a saepe maxime.</p>
                      <div className="flex flex-col md:flex-row -gap-2 md:gap-8 w-full  ">
                          <LearnMoreBox className="mt-6 px-4 border-2 border-[#fff] uppercase py-2 bg-[#fff] text-[#000] transition-all duration-700 ease-in-out">Pesan Sekarang</LearnMoreBox>
                          <LearnMoreBox className="mt-6 px-4 border-2 border-[#fff] uppercase py-2 text-[#fff] hover:bg-[#fff] hover:text-[#000] transition-all duration-700 ease-in-out">Baca Selengkapnya</LearnMoreBox>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default SpecialOffer
