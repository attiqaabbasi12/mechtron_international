import React from "react";
import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Ali Raza",
    position: "Project Engineer",
    review:
      "Their engineering team provided outstanding solutions for our project. Everything was well-planned and delivered on time!",
    rating: 5,
  },
  {
    name: "Sara Khan",
    position: "Civil Consultant",
    review:
      "Highly professional and innovative approach. The project quality exceeded our expectations!",
    rating: 4,
  },
  {
    name: "Ahmed Malik",
    position: "Mechanical Engineer",
    review:
      "Impressive coordination and execution. Their attention to detail is top-notch!",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    position: "Architect",
    review:
      "Amazing collaboration experience — the team brought our vision to life beautifully!",
    rating: 5,
  },
  {
    name: "Usman Tariq",
    position: "Industrial Designer",
    review:
      "Brilliant work ethic and problem-solving approach. They transformed our concept into a working model seamlessly.",
    rating: 5,
  },
];

const Reviews = () => {
  const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
  appendDots: (dots) => (
    <div className="mt-16">
      <ul className="flex justify-center space-x-4">{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <div className="w-3 h-3 bg-gray-400 rounded-full transition-all duration-300 transform hover:scale-125 hover:bg-blue-500" />
  ),
};


  return (
    <section id="reviews" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-14">
          Client <span className="text-red-700">Testimonials</span>
        </h2>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="flex justify-center px-3">
              <div
                className="bg-white rounded-2xl 
                  shadow-lg hover:shadow-2xl transition-all duration-500
                  p-8 w-full max-w-[360px] min-h-[320px] flex flex-col justify-between items-center text-center"
              >
                {/* ⭐ Rating */}
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  “{review.review}”
                </p>

                {/* Name */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {review.name}
                  </h4>
                  <p className="text-red-700 text-sm">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Dot Styling */}
      <style jsx global>{`
  .slick-dots li.slick-active div {
    background-color: #2563eb;
    transform: scale(1.3);
    box-shadow: 0 0 10px rgba(37, 99, 235, 0.6);
  }
`}</style>

    </section>
  );
};

export default Reviews;
