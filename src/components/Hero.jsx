import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import hero images from the local images folder so the bundler can resolve them
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";

const Hero = () => {
  const slides = [
    {
      image: img1,
      title: "Your Global Partner in Mechanical Design",
      subtitle: "Delivering precision in every design and structure",
      button: "Explore Our Services",
    },
    {
      image: img2,
      title: "Your Global Partner in Mechanical Design",
      subtitle: "From 3D modeling to FEA analysis, we build the future",
      button: "View Our Projects",
    },
    {
      image: img3,
      title: "Your Global Partner in Mechanical Design",
      subtitle: "Experience, efficiency, and engineering perfection",
      button: "Get Free Consultation",
    },
    {
      image: img4,
      title: "Your Global Partner in Mechanical Design",
      subtitle: "Turning ideas into innovative engineering solutions",
      button: "Get Free Consultation",
    },
    {
      image: img5,
      title: "Your Global Partner in Mechanical Design",
      subtitle: "From concept to creation, we bring precision and creativity together.",
      button: "Get Free Consultation",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul className="flex space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white rounded-full opacity-60 hover:opacity-100 transition" />
    ),
  };

  const handleScroll = (target) => {
    const section = document.getElementById(target);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <div
              className="h-full w-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                  {slide.subtitle}
                </p>
                <button
                  onClick={() => {
                    if (slide.button.includes("Service")) handleScroll("services");
                    else if (slide.button.includes("Project")) handleScroll("projects");
                    else handleScroll("contact");
                  }}
                  className="px-8 py-3 bg-red-700 hover:bg-red-800 rounded-lg text-lg font-medium transition"
                >
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style>
        {`
          .slick-dots li.slick-active div {
            background-color: #ef4444 !important;
            transform: scale(1.2);
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
