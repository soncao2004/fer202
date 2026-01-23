import React, { useState, useEffect } from "react";
import "./Banner.css";

function Banner() {
  const banners = [
    {
      image: "/Banner1.jpg", // Sửa chữ b thành B
      title: "Neapolitan Pizza",
      desc: "Traditional Italian pizza with fresh mozzarella and basil"
    },
    {
      image: "/Banner2.jpg", // Sửa chữ b thành B
      title: "Cheese Lover Pizza",
      desc: "Rich cheese flavor with crispy crust"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="banner">
      <img src={banners[index].image} alt="banner" className="banner-img" />
      <div className="banner-content">
        <h1>{banners[index].title}</h1>
        <p>{banners[index].desc}</p>
      </div>
      <button className="banner-control left" onClick={() => setIndex(index === 0 ? banners.length - 1 : index - 1)}>
        {"<"}
      </button>
      <button className="banner-control right" onClick={() => setIndex(index === banners.length - 1 ? 0 : index + 1)}>
        {">"}
      </button>
    </section>
  );
}

export default Banner;