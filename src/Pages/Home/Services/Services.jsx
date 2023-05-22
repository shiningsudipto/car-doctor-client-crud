import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const searchRef = useRef(null);
    const [services, setServices] = useState([]);
    const [asce, setAsce] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // https://car-doctor-server-crud.vercel.app/services
        fetch(`https://car-doctor-server-crud.vercel.app/services?search=${search}&sort=${asce ? 'asce' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asce, search])
    console.log(services);

    const handleSearch = () => {
        setSearch(searchRef.current.value)
    }
    return (
        <div>
            <div className='text-center space-y-4'>
                <h4 className='text-orange text-xl font-bold'>Service</h4>
                <h2 className='font-bold text-5xl'>Our Services Area</h2>
                <p className='text-pColor'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='text-center my-4'>
                <button onClick={() => setAsce(!asce)} className='btn'>{asce ? 'PRICE: High to Low' : 'PRICE: Low to HIGH'}</button>
            </div>
            <div className='text-center my-4'>
                <div className="form-control">
                    <div className="input-group">
                        <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
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