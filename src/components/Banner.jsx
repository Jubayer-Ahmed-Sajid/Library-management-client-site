import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'
import { Pagination } from 'swiper/modules';
const Banner = () => {
  return (
    <div className='my-12'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='p-12'>
          <img src='https://img.freepik.com/free-vector/realistic-book-lovers-day-horizontal-background-with-composition-text-books-with-lamp-cup-vector-illustration_1284-77302.jpg?w=1060&t=st=1699545599~exp=1699546199~hmac=8a4dd0e9a12a13194146df5d9e43ee67a519c59c4fe92960b23cae037726cc7b' className='' alt="" />
        </SwiperSlide>
        <SwiperSlide className='p-12'><img src='https://img.freepik.com/free-vector/minimal-book-club-facebook-cover_23-2149758174.jpg?size=626&ext=jpg&ga=GA1.1.1575630494.1697804400&semt=ais' alt="" /></SwiperSlide>
        <SwiperSlide className='p-12'><img src="https://img.freepik.com/premium-vector/book-exchange-landing-page-template-bookcrossing-vector-illustration-banner-education-knowledge-concept-diverse-hands-holding-books-swap-literature_534430-955.jpg?size=626&ext=jpg&ga=GA1.1.1575630494.1697804400&semt=ais" alt="" /></SwiperSlide>
  
      </Swiper>
    </div>
  );
};

export default Banner;
