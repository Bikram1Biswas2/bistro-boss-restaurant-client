import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';




const Category = () => {
    return (
        <section>
            <SectionTitle 
              subHeading={"---From 11:00am to 10:00pm---"}
              heading={'ORDER ONLINE'}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <p className='text-4xl uppercase text-white -mt-20 text-center'>Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                    <p className='text-4xl uppercase text-white -mt-20 text-center'>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                    <p className='text-4xl uppercase text-white -mt-20 text-center'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                    <p className='text-4xl uppercase text-white -mt-20 text-center'>Desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                    <p className='text-4xl uppercase text-white -mt-20 text-center'>Salad</p>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;