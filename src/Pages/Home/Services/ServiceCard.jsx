import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <div className="flex justify-between items-center text-orange text-xl font-bold">
                        <p>Price: {price}</p>
                        <Link to={`/checkout/${_id}`}> <FaArrowRight className='cursor-pointer' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;