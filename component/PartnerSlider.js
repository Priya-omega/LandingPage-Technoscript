import React from 'react'
import Head from 'next/head'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PartnerSlider() {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <div>



        <Slider {...settings}>
          <div className='sliderContainer'>
            <div className='slider'>
              <div>
                <img src="img/placement/1.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/2.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/3.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/4.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/5.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/6.webp" alt="Hiring Partners" className='companyLogo' />
              </div>



            </div>
          </div>

          <div className="sliderContainer">
            <div className='slider'>

              <div>
                <img src="img/placement/7.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/8.webp" alt="Hiring Partners" className='companyLogo' />
              </div>
              <div>
                <img src="img/placement/9.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/10.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/11.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/12.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

            


            </div>
          </div>

          <div className="sliderContainer">
            <div className='slider'>
            <div>
                <img src="img/placement/13.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/14.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/15.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/16.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/17.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/18.webp" alt="Hiring Partners" className='companyLogo' />
              </div>
              

              




            </div>
          </div>

          <div className="sliderContainer">
            <div className='slider'>
            <div>
                <img src="img/placement/19.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/20.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/21.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/22.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/23.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/24.webp" alt="Hiring Partners" className='companyLogo' />
              </div>
              

              




            </div>
          </div>

          <div className="sliderContainer">
            <div className='slider'>
            <div>
                <img src="img/placement/25.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/26.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/27.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/28.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/29.webp" alt="Hiring Partners" className='companyLogo' />
              </div>

              <div>
                <img src="img/placement/30.webp" alt="Hiring Partners" className='companyLogo' />
              </div>
              

              




            </div>
          </div>

        </Slider>
      </div>


    </>




  )
}

export default PartnerSlider