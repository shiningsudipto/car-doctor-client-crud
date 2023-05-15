import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-crud.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div>
            <div className='text-center space-y-4'>
                <h4 className='text-orange text-xl font-bold'>Service</h4>
                <h2 className='font-bold text-5xl'>Our Services Area</h2>
                <p className='text-pColor'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-10'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <div className='text-center my-6'>
                    <button className='default-btn'>More Services</button>
                </div>
            </div>
        </div>
    );
};

export default Services;