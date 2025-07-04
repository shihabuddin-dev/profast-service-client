import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import customerTop from '../../assets/customer-top.png';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const reviews = [
    {
        name: 'Awlad Hossin',
        role: 'Senior Product Designer',
        feedback:
            'ProFast Courier has made my e-commerce deliveries seamless and reliable. The real-time tracking and fast delivery give me and my customers peace of mind.',
        avatar: 'https://i.pravatar.cc/100?img=14',
    },
    {
        name: 'Rasel Ahamed',
        role: 'CTO',
        feedback:
            'Their 24/7 support and safe delivery process are unmatched. I trust ProFast for all my business shipments across Bangladesh.',
        avatar: 'https://i.pravatar.cc/100?img=15',
    },
    {
        name: 'Nasir Uddin',
        role: 'CEO',
        feedback:
            'The best courier service for startups! Affordable, fast, and always on time. Highly recommended for anyone looking for hassle-free logistics.',
        avatar: 'https://i.pravatar.cc/100?img=16',
    },
    {
        name: 'Sumaiya Rahman',
        role: 'Online Seller',
        feedback:
            'I love how easy it is to book and track parcels. My customers are always happy with the quick delivery and safe handling.',
        avatar: '',
    },
    {
        name: 'Tanvir Hasan',
        role: 'Merchant',
        feedback:
            'ProFast Courier has helped my business grow with their reliable service and excellent customer support.',
        avatar: '',
    },
];

const WhatOurCustomerSaid = () => {
    return (
        <section className="bg-[#f3f5f6] py-12 px-2 md:px-0">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-6">
                    <img
                        src={customerTop}
                        alt="Customer Feedback"
                        className="h-16 md:h-20 mb-2"
                    />
                    <h2 className="text-[#184042] text-2xl md:text-3xl font-bold text-center mb-2">
                        What our customers are sayings
                    </h2>
                    <p className="text-gray-500 text-center max-w-2xl mx-auto mb-4 text-base md:text-lg">
                        Enhance posture, mobility, and well-being effortlessly with ProFast
                        Courier. Achieve proper alignment, reduce pain, and strengthen your
                        business with ease!
                    </p>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-next',
                        prevEl: '.swiper-prev',
                    }}
                    pagination={{ clickable: true, el: '.custom-swiper-pagination', renderBullet: (index, className) => `<span class='${className} custom-bullet'></span>` }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    className="pb-10"
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviews.map((review, idx) => (
                        <SwiperSlide key={idx}>
                            {({ isActive }) => (
                                <div
                                    className={`rounded-2xl bg-white px-6 py-8 h-full flex flex-col justify-between shadow-sm transition-all duration-300 ${isActive
                                        ? 'scale-105 shadow-lg z-10'
                                        : 'opacity-40 scale-95'
                                        }`}
                                >
                                    <FaQuoteLeft className="text-[#b6e0e2] text-3xl mb-2" />
                                    <p className="text-gray-600 text-base mb-6">
                                        {review.feedback}
                                    </p>
                                    <hr className="border-dashed border-[#18404233] border-t-2 mb-4" />
                                    <div className="flex items-center gap-3">
                                        {review.avatar ? (
                                            <img
                                                src={review.avatar}
                                                alt={review.name}
                                                className="h-10 w-10 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="h-10 w-10 rounded-full bg-[#184042] flex items-center justify-center text-white font-bold text-lg">
                                                {review.name
                                                    .split(' ')
                                                    .map(n => n[0])
                                                    .join('')}
                                            </div>
                                        )}
                                        <div>
                                            <div className="font-bold text-[#184042]">
                                                {review.name}
                                            </div>
                                            <div className="text-gray-400 text-sm">
                                                {review.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Custom navigation and pagination */}
                <div className="flex items-center gap-4 mt-6 w-2/8 mx-auto ">
                    <button className="swiper-prev w-8 h-8 rounded-full bg-[#CAEB66] border border-gray-300 flex items-center justify-center text-sm text-[#184042]">
                        <FaArrowLeft size={12} />
                    </button>
                    <div className="custom-swiper-pagination flex gap-2"></div>
                    <button className="swiper-next w-8 h-8 rounded-full bg-[#CAEB66] flex items-center justify-center text-sm text-[#184042]">
                        <FaArrowRight size={12} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhatOurCustomerSaid;