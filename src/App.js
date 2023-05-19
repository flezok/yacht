import './main.js';
import { Fragment, useEffect } from 'react';
import Slider from "react-slick";
import './App.css';
import './css/normalize.css';
import './css/style.css';
import './fonts/fonts.css';



function App() {

  useEffect(() => {
    const img = document.getElementsByClassName("preview__images-img")[0];

    const heightChanger = () => {
      img.style.width = 91.66 + +window.scrollY/100+'%';
      img.style.height = 900 + +window.scrollY+'px';
    };

    window.addEventListener('scroll', heightChanger);

    return () => { window.removeEventListener('scroll', heightChanger); }
  }, []);

  return (
    <Fragment>
    <header className="header">
      <div className="container">
        <div className="header__contacts">
          <a href="tel:+3850913240545" className="header__contacts-tel">
            +385 (0) 91-32-40-545
          </a>
          <p className="header__contacts-mail">
            booking@feelyachting.com
          </p>
        </div>

        <div className='header__logo'>
          <img className='header__logo-img' src="./images/logo.svg" alt="">

          </img>
          <h1 className="header__logo-name">
            Feel yachting
          </h1>
          <p className="header__logo-text">
            Since 2003
          </p>
        </div>

        <div className="header__menu">
          <ul className="menu__list">
            <div className="menu__wrapper">
              <li className="menu__item">
                <a className="menu__item-link">
                  Charter management
                </a>
              </li>

              <li className="menu__item menu__item-dropDown">
                <a className="menu__item-link">
                  Yacht charter
                </a>
              </li>
              
            </div>
            <div className="menu__wrapper">
              <li className="menu__item">
                <a className="menu__item-link">
                  About
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item-link">
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </header>

    <section className="preview">
      <div className="container">
        <div className="preview__content">
          <div className="preview_temp">
            <img className="preview__temp-img" src="./images/temp.svg" alt="">

            </img>
            <p className="preview__temp-text">
              Croatia 28 °C
            </p>
          </div>

          <h1 className="preview__title">
            <span className="preview__title-span">Feel Yachting</span> and the dream becomes reality
          </h1>
        </div>
        {/* <div className="preview__images">
          <img className="preview__images-img" src="./images/preview-full.jpg" alt="">

          </img>
        </div> */}
      </div>
      <div className="preview__images">
        <img className="preview__images-img" src="./images/preview-full.jpg" alt="">

        </img>
      </div>
    </section>

    <section className="about">
      <div className="container">
        <div className="about__title">
          <h2 className="about__title-text">
            <span className='about__title-text-span'>Explore</span> croatia with us
          </h2>
          
          <button className="about__title-btn">
            <div className="about__title-btn_inner">
              <p className="about__title-btn_text">
                m
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                r
              </p>
              <p className="about__title-btn_text">
                e
              </p>
              <p className="about__title-btn_text">
                a
              </p>
              <p className="about__title-btn_text">
                b
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                u
              </p>
              <p className="about__title-btn_text">
                t
              </p>
              <p className="about__title-btn_text">
                t
              </p>
              <p className="about__title-btn_text">
                h
              </p>
              <p className="about__title-btn_text">
                e
              </p>
              <p className="about__title-btn_text">
                c
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                m
              </p>
              <p className="about__title-btn_text">
                p
              </p>
              <p className="about__title-btn_text">
                a
              </p>
              <p className="about__title-btn_text">
                n
              </p>
              <p className="about__title-btn_text">
                y
              </p>
              <p className="about__title-btn_text">
                •
              </p>
              <p className="about__title-btn_text">
                m
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                r
              </p>
              <p className="about__title-btn_text">
                e
              </p>
              <p className="about__title-btn_text">
                a
              </p>
              <p className="about__title-btn_text">
                b
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                u
              </p>
              <p className="about__title-btn_text">
                t
              </p>
              <p className="about__title-btn_text">
                t
              </p>
              <p className="about__title-btn_text">
                h
              </p>
              <p className="about__title-btn_text">
                e
              </p>
              <p className="about__title-btn_text">
                c
              </p>
              <p className="about__title-btn_text">
                o
              </p>
            </div>
          </button>
        </div>

        <div className="about__content">
          <p className="about__content-text">
            Make your sailing experience even richer with Feel Yachting tailored services. Choose from a wide range of our luxury mega yachts and explore the endless possibilities of our charter management, yacht advertising, crew placement, and luxury yacht maintenance.
          </p>
          <img className='about__content-img' src="./images/about.jpg" alt=''></img>
        </div>
      </div>
    </section>

    <section className="why">
      <div className="container">
        <div className="why__top">
          <h2 className="why__top-title blog__title">
            Why book <span>with us</span>
          </h2>
          <p className="why__top-text blog__text">
            Make your sailing experience even richer with Feel Yachting tailored services. Choose from a wide range of our luxury mega yachts and explore the endless possibilities of our charter management, yacht advertising, crew placement, and luxury yacht maintenance.
          </p>
        </div>

        <div className="why__items">
          <div className="why__item">
            <h4 className="why__item-title">
              Satisfied customers from 50
              <br></br>
              + countries
            </h4>
            <p className="why__item-text">
              More than 2000 satisfied clients have already trusted the service of Feel Yachting and repeat their experience with us.
            </p>
          </div>

          <div className="why__item">
            <h4 className="why__item-title">
              Local luxury
              <br></br>
              yacht pioneers
            </h4>
            <p className="why__item-text">
              Throughout the years in this business, we have developed connections and relationships with numerous local service providers - so we can plan your tailored experience.
            </p>
          </div>

          <div className="why__item">
            <h4 className="why__item-title">
              Response
              <br></br>
              in 24-hours or less
            </h4>
            <p className="why__item-text">
              Our booking staff is available for questions on how to organize your perfect charter holiday in Croatia. Bareboat, skippered, or crewed, water toys availability, equipment.
            </p>
          </div>
        </div>
      </div>
      <img className="why__images" src="./images/why.jpg" alt=""></img>
    </section>

    <section className="category">
      <div className="container">
        <div className="category__top">
          <h2 className="category__title blog__title">
            DISCOVER <span>NEW HORIZONS</span>
          </h2>
          <p className="category__text blog__text">
            Make your sailing experience even richer with Feel Yachting tailored services. Choose from a wide range of our luxury mega yachts and explore the endless possibilities of our charter management, yacht advertising, crew placement, and luxury yacht maintenance.
          </p>
        </div>
      </div>

        <div className="category__items">
          <Slider swipeToSlide slidesToScroll={1} infinite variableWidth autoplay={true} autoplaySpeed={4000} speed={1500} cssEase='linear' pauseOnHover>  
          {/* <Swiper onSwiper={(swip) => { swiperRef.current = swip; }} modules={[Autoplay, Virtual]} speed={1500} loop={true} slidesPerView={2.3} autoplay={{ delay: 1000, disableOnInteraction: false }}> */}

          {/* <SwiperSlide> */}
          <div className="category__item" virtualIndex={0}>
            <h4 className="category__item-title">
              Luxury yacht
            </h4>
            <img className="category__item-image" src="./images/luxury.jpg" alt=""></img>
            <button className="category__item-btn">
              <p className='category__item-btn_text'>
                Pick up a yacht
              </p>
            </button>
          </div>
          {/* </SwiperSlide> */}

          {/* <SwiperSlide virtualIndex={1}> */}
          <div className="category__item">
            <h4 className="category__item-title">
             MOTOR YACHTS
            </h4>
            <img className="category__item-image" src="./images/motor.png" alt=""></img>
            <button className="category__item-btn">
              <p className="category__item-btn_text">
                Pick up a yacht
              </p>
            </button>
          </div>
          {/* </SwiperSlide> */}

          {/* <SwiperSlide virtualIndex={2}> */}
          <div className="category__item">
            <h4 className="category__item-title">
              MINI CRUISERS
            </h4>
            <img className="category__item-image" src="./images/cruisers.png" alt=""></img>
            <button className="category__item-btn">
              <p className='category__item-btn_text'>
                Pick up a yacht
              </p>
            </button>
          </div>
          {/* </SwiperSlide> */}
          </Slider>
        </div>
      
    </section>

    <section className="service">
      <div className="container">
        <div className="service__content">
          <h2 className="service__content-title">
          All-inclusive service
          </h2>
          <p className="service__content-text">
            We will take you anywhere
          </p>
        </div>

        <button className="service__btn about__title-btn">
            <div className="about__title-btn_inner">
              <p className="about__title-btn_text">
                m
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                r
              </p>
              <p className="about__title-btn_text">
                e
              </p>
              <p className="about__title-btn_text">
                a
              </p>
              <p className="about__title-btn_text">
                b
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                u
              </p>
              <p className="about__title-btn_text">
                t
              </p>
              <p className="about__title-btn_text">
                t
              </p>
              <p className="about__title-btn_text">
                h
              </p>
              <p className="about__title-btn_text">
                e
              </p>
              <p className="about__title-btn_text">
                c
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                m
              </p>
              <p className="about__title-btn_text">
                p
              </p>
              <p className="about__title-btn_text">
                a
              </p>
              <p className="about__title-btn_text">
                n
              </p>
              <p className="about__title-btn_text">
                y
              </p>
              <p className="about__title-btn_text">
                •
              </p>
              <p className="about__title-btn_text">
                m
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                r
              </p>
              <p className="about__title-btn_text">
                e
              </p>
              <p className="about__title-btn_text">
                a
              </p>
              <p className="about__title-btn_text">
                b
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                u
              </p>
              <p className="about__title-btn_text">
                t
              </p>
              <p className="about__title-btn_text">
                t
              </p>
              <p className="about__title-btn_text">
                h
              </p>
              <p className="about__title-btn_text">
                e
              </p>
              <p className="about__title-btn_text">
                c
              </p>
              <p className="about__title-btn_text">
                o
              </p>
            </div>
          </button>

      </div>
    </section>

    <section className="news">
      <div className="container">
        <div className="news__header">
          <h2 className="news__header-ttitle">
            The latest news from Yachting
          </h2>
          <button className="news__header-btn">
            <p className="news__header-btn_text">
              Discover all
            </p>
          </button>
        </div>

        <div className="news__items">
          <div className="news__item">
            <img className="news__item-img" src="./images/info.jpg" alt="">

            </img>

            <div className="news__item-info">
              <p className="news__info-date">
                18 apr 2023
              </p>
              <h4 className="news__info-title">
                One and only - Adriatic Sea
              </h4>
              <p className="news__info-text">
                Make your sailing experience even richer with Feel Yachting tailored services.
              </p>
              <button className="news__info-btn">
                <p className="news__info-btn_text">
                  Read more
                </p>
              </button>
            </div>
          </div>

          <div className="news__item">
            <img className="news__item-img" src="./images/info.jpg" alt="">

            </img>

            <div className="news__item-info">
              <p className="news__info-date">
                18 apr 2023
              </p>
              <h4 className="news__info-title">
                One and only - Adriatic Sea
              </h4>
              <p className="news__info-text">
                Make your sailing experience even richer with Feel Yachting tailored services.
              </p>
              <button className="news__info-btn">
                <p className="news__info-btn_text">
                  Read more
                </p>
              </button>
            </div>
          </div>

          <div className="news__item">
            <img className="news__item-img" src="./images/info.jpg" alt="">

            </img>

            <div className="news__item-info">
              <p className="news__info-date">
                18 apr 2023
              </p>
              <h4 className="news__info-title">
                One and only - Adriatic Sea
              </h4>
              <p className="news__info-text">
                Make your sailing experience even richer with Feel Yachting tailored services.
              </p>
              <button className="news__info-btn">
                <p className="news__info-btn_text">
                  Read more
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="subscribe">
      <div className="container">
        <h2 className="subscribe__title">
          Stay with us, subscribe to the newsletter
        </h2>
        
        <button className="subscribe__btn about__title-btn">
            <div className="about__title-btn_inner">
              <p className="about__title-btn_text">
                m
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                r
              </p>
              <p className="about__title-btn_text">
                e
              </p>
              <p className="about__title-btn_text">
                a
              </p>
              <p className="about__title-btn_text">
                b
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                u
              </p>
              <p className="about__title-btn_text">
                t
              </p>
              <p className="about__title-btn_text">
                t
              </p>
              <p className="about__title-btn_text">
                h
              </p>
              <p className="about__title-btn_text">
                e
              </p>
              <p className="about__title-btn_text">
                c
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                m
              </p>
              <p className="about__title-btn_text">
                p
              </p>
              <p className="about__title-btn_text">
                a
              </p>
              <p className="about__title-btn_text">
                n
              </p>
              <p className="about__title-btn_text">
                y
              </p>
              <p className="about__title-btn_text">
                •
              </p>
              <p className="about__title-btn_text">
                m
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                r
              </p>
              <p className="about__title-btn_text">
                e
              </p>
              <p className="about__title-btn_text">
                a
              </p>
              <p className="about__title-btn_text">
                b
              </p>
              <p className="about__title-btn_text">
                o
              </p>
              <p className="about__title-btn_text">
                u
              </p>
              <p className="about__title-btn_text">
                t
              </p>
              <p className="about__title-btn_text">
                t
              </p>
              <p className="about__title-btn_text">
                h
              </p>
              <p className="about__title-btn_text">
                e
              </p>
              <p className="about__title-btn_text">
                c
              </p>
              <p className="about__title-btn_text">
                o
              </p>
            </div>
          </button>

      </div>
    </section>

    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="header__contacts">
            <a href="tel:+3850913240545" className="header__contacts-tel">
              +385 (0) 91-32-40-545
            </a>
            <p className="header__contacts-mail">
              booking@feelyachting.com
            </p>
          </div>

          <div className='header__logo'>
            <img className='header__logo-img' src="./images/logo.svg" alt="">

            </img>
            <h1 className="header__logo-name">
              Feel yachting
            </h1>
            <p className="header__logo-text">
              Since 2003
            </p>
          </div>

          <div className="header__menu">
            <ul className="menu__list">
              <div className="menu__wrapper">
                <li className="menu__item">
                  <a className="menu__item-link">
                    Charter management
                  </a>
                </li>

                <li className="menu__item menu__item-dropDown">
                  <a className="menu__item-link">
                    Yacht charter
                  </a>
                </li>
                
              </div>
              <div className="menu__wrapper">
                <li className="menu__item">
                  <a className="menu__item-link">
                    About
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__item-link">
                    Contact
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <a className="footer__bottom-privacy" href="">
            Privacy Policy
          </a>

          <p className="footer__bottom-text">
             © 2023 Feel yachting
          </p>

          <p className="footer__bottom-support">
            Website development and support <span>GRAST.studio</span>
          </p>
        </div>
      </div>
    </footer>

    </Fragment>
  );
}

export default App;
