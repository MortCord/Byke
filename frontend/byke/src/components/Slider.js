import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProdCard from "./ProdCard";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Slider() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/prod/get")
      .then((res) => res.json())
      .then((result) => {
        setProd(result);
      });
  }, []);

  // Utility function to chunk the array
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  // Split products into chunks of 4
  const chunkedProd = chunkArray(prod, 4);

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {chunkedProd.map((chunk, index) => (
        <SwiperSlide key={index} className="d-flex justify-content-around">
          {chunk.map((product, idx) => (
            <ProdCard key={idx} name={product.name} price={product.price} id={product.id} photo={product.photo} />
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
