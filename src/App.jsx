import Slider from "react-slick";
import { useRef, useState } from "react";
import { url } from "./constants";
import { useEffect } from "react";
import "./App.css";
import { Carousel, CarouselBtns } from "./component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setProduct(data);
    } catch (err) {
      console.log("Something went wrong!", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 1500,
    swipeToSlide: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    // pauseOnHover: true,
    cssEase: "linear",
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div>
      {/* product card display */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Products Carousel from the Fake store.
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              "Get Started with Our Innovative App Today!"
            </p>
          </div>

          {/* products */}
          <div className="mx-auto mt-10 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none relative">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {product.map((item) => {
                const {
                  id,
                  title,
                  price,
                  description,
                  category,
                  image,
                  rating,
                } = item;
                return (
                  <Carousel
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    rating={rating}
                  />
                );
              })}
            </Slider>
            {product.length > 0 ? (
              <CarouselBtns previous={previous} next={next} />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
