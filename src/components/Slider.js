import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import ali from '../images/avatar-ali.png';
import anisha from '../images/avatar-anisha.png';
import richard from '../images/avatar-richard.png';
import shanai from '../images/avatar-shanai.png';
import { SliderCard, Button } from './';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

const Slider = () => {
    return (
        <section className="testimonial__section">
            <h2 className="testimonial__section__heading">What they've said</h2>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true, type: 'bullets' }}
                breakpoints={{
                    725: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1080: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
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
            <Button color="orange" text="Get Started" />
        </section>
    )
}

export default Slider