import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <div className='flex my-14'>
            <div className='w-1/2'>
                <div className='relative'>
                    <img className='w-2/3 rounded-md' src={person} alt="" />
                    <img className='w-1/2 absolute top-1/2 left-1/3 border-8 rounded-md border-white' src={parts} alt="" />
                </div>
            </div>
            <div className='w-1/2 space-y-8'>
                <h4 className='text-xl text-orange font-bold'>About Us</h4>
                <h2 className='text-5xl leading-[55px] font-bold'>We are qualified <br /> & of experience <br /> in this field</h2>
                <p className='text-pColor'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-pColor'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn bg-orange border-0'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;