import './App.css';
import { nutrients } from './services/nutrients';
import tick from './assets/tick.svg'
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive'

const settings = {  
  arrows: false,
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
}

const Card = ({nutrient}) => {
  return (
    <div className='Card col-lg-3 p-0'>
      <div className='Card__Header m-r-0'>
        <p>{nutrient.name}</p>
        <img className='Card__NutrientImage' src={nutrient.image} alt={`${nutrient.name}`} />
      </div>
      <div className='Card__Info'>
        <div className='Card__PropertiesList'>
          {nutrient.properties.map((property) => {
          return (
            <div className='Card__Property' key={Math.random()}>
              <img className='Tick' src={tick} alt='tick' />
              <p>{property}</p>    
            </div>
          )
          })}
        </div>
        <div className='Card__Symbols'>
          <img  src={nutrient.symbols} alt={`${nutrient.name} symbols`} />
        </div>
      </div>
    </div>
  );
}

function Page() {
  const shouldUseSlider = useMediaQuery({maxWidth: 992})

  return (
    <div className="Page">
      <p className="Page__Heading">High-performing and highly targeted nutritive ingredients to assist you during pregnancy and postnatally</p>
      <p className="Page__Subheading">Our nourishing formula of 20 vitamins, mineral and probiotics provide tailored wellbeing support for you and your baby.</p>
      <div className="container">
        {shouldUseSlider ?
          <Slider {...settings} className='Slider'>
            {nutrients.map((nutrient) => <Card nutrient={nutrient} key={Math.random()}/>)}
          </Slider>
        :
          <div className="row gap-5 justify-content-center">
            {nutrients.map((nutrient) => <Card nutrient={nutrient} key={Math.random()}/>)}
          </div>
        }
      </div>
      <p className="Page__Description">Formulated to support your body’s natural functions during a healthy pregnancy, ensuring you and your baby get all the nutrients you need.</p>
      <p className="Slogan">Backed by science.</p>
      <button className="Button">ORDER NOW</button>
    </div>
  );
}

export default Page;
