import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import ProdCard from './ProdCard';

import 'swiper/css';
import 'swiper/css/navigation';



import { Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='d-flex justify-content-around'>
          <ProdCard name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"}/>
          <ProdCard name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"}/>
          <ProdCard name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"}/>
          <ProdCard name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"}/>
        </SwiperSlide>
        <SwiperSlide className='d-flex justify-content-around'>Slide 2</SwiperSlide>
        <SwiperSlide className='d-flex justify-content-around'>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}