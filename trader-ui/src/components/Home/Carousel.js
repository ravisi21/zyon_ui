import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

function Carousel() {
  const [direction, setDirection] = useState(
    window.matchMedia("(max-width: 640px)").matches ? "horizontal" : "vertical"
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleChange = (e) => {
      setDirection(e.matches ? "horizontal" : "vertical");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const messages = [
    {
      title: "Backtesting is myth - Algo Forward testing",
      description:
        "Back testing does not work as expected with lot size, expirey changes you can forward test your algo strategy without risking real money.",
      scrollToId: "feature-Fowrad -Testing",
      color: "text-black",
      bgColor: "bg-green-200",
    },
    {
      title: "Virtual Ai assistant - Real time loss limiter",
      description:
        "Edge Loss Limiter, real time position size alerter, Behavioral Bias Detector are just a subset of assistant rules that will make you a pro trader.",
      scrollToId: "feature-Advanced-Analytics",
      color: "text-black",
      bgColor: "bg-green-200",
    },
    {
      title: "Practice Option Selling - The institutional way, with 500 rs ",
      description:
        "Iron Condor with Adaptive Widths, Skew-Adjusted Ratio Spread, Delta-Neutral Straddle with Gamma Scalping. Test these strategies without risking real capital.",
      scrollToId: "feature-Paper-Trading",
      color: "text-black",
      bgColor: "bg-green-200",
    },
    {
      title: "Trading Competition You Perform, We Partner - 80% profit split to traders ",
      description:
        "Our model is built on trust and performance. When you prove consistency, we provide the capital — and you take home 80% of the profits.",
      scrollToId: "feature-Funded-Account",
      color: "text-black",
      bgColor: "bg-green-200",
    },
    {
      title: "Trade the market not your savings",
      description:
        "In real trading, even perfect setups lose. But on our platform, you don’t lose your savings — only a small predefined risk.",
      scrollToId: "feature-Funded-Account",
      color: "text-black",
      bgColor: "bg-green-200",
    },
    {
      title: "Built for traders built by traders - All option analytics in One view ",
      description:
        "OI change put call ratio market breadth heatmap long-short build up all in one page",
      scrollToId: "feature-Market-Dashboard",
      color: "text-black",
      bgColor: "bg-green-200",
    },
  ];

  return (
    <div className="w-full h-full sm:mb-[-100px] mb-[-140px] bg-green-200 relative">
      <Swiper
        direction={direction}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          el: ".custom-swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-full h-full"
      >
        {messages.map((msg, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${msg.bgColor} ${msg.color} w-full h-full flex flex-col justify-center items-start text-left px-4 sm:px-12 py-10 sm:py-20 transition-all duration-500 ease-in-out`}
            >
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight animate-fadeInUp">
                {msg.title}
              </h1>
              <p className="mt-4 text-base sm:text-xl md:text-2xl animate-fadeInUp delay-150">
                {msg.description}
              </p>
              <button
                onClick={() => scrollToSection(msg.scrollToId)}
                className="mt-6 border-2 border-black text-black px-6 py-3 rounded-md font-bold hover:bg-black hover:text-white transition-all duration-500 animate-fadeInUp delay-300"
              >
                Know More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Pagination Dots */}
      <div className="custom-swiper-pagination absolute bottom-2 w-full flex justify-center items-center z-30" />
    </div>
  );
}

export default Carousel;