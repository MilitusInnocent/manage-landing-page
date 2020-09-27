import React from 'react';
import ali from '../images/avatar-ali.png';
import anisha from '../images/avatar-anisha.png';
import richard from '../images/avatar-richard.png';
import shanai from '../images/avatar-shanai.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

//import 'swiper/swiper.scss';
//import 'swiper/components/pagination/pagination.scss';


import { SliderCard } from './';

SwiperCore.use([Pagination]);

const Slider = () => {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <SliderCard 
                    image={anisha} 
                    name="Anisha Li"
                    quote="“Manage has supercharged our team’s workflow. The ability to maintain 
                    visibility on larger milestones at all times keeps everyone motivated.”"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SliderCard 
                    image={ali} 
                    name="Ali Bravo"
                    quote="“We have been able to cancel so many other subscriptions since using 
                    Manage. There is no more cross-channel confusion and everyone is much 
                    more focused.”"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SliderCard 
                    image={richard} 
                    name="Richard Watts"
                    quote="“Manage allows us to provide structure and process. It keeps us organized 
                    and focused. I can’t stop recommending them to everyone I talk to!”"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SliderCard 
                    image={shanai} 
                    name="Shanai Gough"
                    quote="“Their software allows us to track, manage and collaborate on our projects 
                    from anywhere. It keeps the whole team in-sync without being intrusive.”"
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider