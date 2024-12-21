import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const carsData = [
    {
    
        image:"https://rucars.ru/image/cache/webp/catalog/slider/zsport-600x356.webp",
      title: "Zeekr 001 YOU",
      price: "от 5.4 млн ₽*",
      link: "https://rucars.ru/avtomobili/zeekr-001"
    },
    {
      title: "Lotus Eletre",
      price: "от 14.1 млн ₽*",
      link: "https://rucars.ru/image/cache/webp/catalog/slider/zsport-600x356.webp"
    },
    {
      title: "Lixiang L7",
      price: "от 6 млн ₽*",
      link: "https://rucars.ru/avtomobili/lixiang-l9"
    }
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center ruc-text-h1">Купить электромобиль в Москве. В наличии и на заказ</h1>
          <div className="text-center ruc-text-prodvij">Электромобили от официальных дилеров, зарядные станции и аксессуары к ним</div>
        </div>
        <div className="col-md-6">
          <Slider {...settings}>
            {carsData.map((car, index) => (
              <div key={index} className="item slick-slide">
                <div className="item slick-slide">
                  <img src={car.image} alt={car.title} className="ruc-cars-image" />
                  <div className="ruc-elect-main">
                    <div className="ruc-elect-main-left">
                      <span className="ruc-elect-cars">Электромобиль</span>
                      <a href={car.link} className="ruc-model-cars-text">{car.title}</a>
                      <div className="ruc-price-model">{car.price}</div>
                    </div>
                    <div className="ruc-elect-main-right">
                      <a href={car.link} className="btn btn-primary ruc-btn-blue">Подробнее</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;