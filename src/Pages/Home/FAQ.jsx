import React from 'react';
import icon1 from '../../assets/icons/001-timetable.png'
import icon2 from '../../assets/icons/location.png'
import icon3 from '../../assets/icons/phone.png'

const FAQ = () => {
    return (
        <div className='bg-black flex justify-evenly py-16 rounded-xl my-14'>
            <div className='flex items-center'>
                <img src={icon1} className='h-10 mr-4' alt="" />
                <div className='text-white'>
                    <p>We are open monday-friday</p>
                    <p className='text-[25px] font-bold'>7:00am - 9:00pm</p>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={icon2} className='h-10 mr-4' alt="" />
                <div className='text-white'>
                    <p>Have a question?</p>
                    <p className='text-[25px] font-bold'>+25462512658</p>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={icon3} className='h-10 mr-4' alt="" />
                <div className='text-white'>
                    <p>Need a repair? our address</p>
                    <p className='text-[25px] font-bold'>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;