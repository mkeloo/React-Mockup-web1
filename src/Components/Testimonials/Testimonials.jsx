import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import 'swiper/css'
import 'swiper/css/pagination'




const Testimonials = () => {
   const clients = [ {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },

    {
      img: profilePic1,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae sequi inventore recusandae incidunt ad rerum dicta quibusdam!",
    },
  ];


  return (
    <div className="t-wrapper">
     <div className="t-heading">
        <span>Clients always get</span>
        <span> Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
        <div className="blur t-blur2" style={{background: "var(--skyblue)"}}></div>
     </div>

    {/* Slider */}
    <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
    >

    {clients.map((client, index) => {
        return (
            <SwiperSlide key={index}>
            <div className="t-card">
                <img src={client.img} alt="profile" />
                <span>{client.review}</span>
            </div>
            </SwiperSlide>
        );
    })}
         
    </Swiper>
    </div>
  )
}

export default Testimonials