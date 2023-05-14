import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { data } from 'autoprefixer';

const Checkout = () => {

    const { user } = useContext(AuthContext);

    const service = useLoaderData();
    const { _id, title, price, service_id, img } = service;
    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const phone = form.phone.value;
        // const price = form.price.value;
        console.log(name, email, date, phone, price);
        const booking = {
            customerName: name,
            email,
            phone,
            img,
            date,
            price,
            service: title
        }
        console.log(booking);
        fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <div className="card-body">
                <form onSubmit={handleBookService}>
                    <div className='grid lg:grid-cols-2 gap-6 my-4'>
                        <div className='w-full'>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.name} placeholder="First Name" name="name" className="w-full input input-bordered" />
                        </div>
                        <div className='w-full'>
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="w-full input input-bordered" />
                        </div>
                        <div className='w-full'>
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="number" placeholder="Your Phone" name="phone" className="w-full input input-bordered" />
                        </div>
                        <div className='w-full'>
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} placeholder="Your Email" name="email" className="w-full input input-bordered" />
                        </div>
                    </div>
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={"$" + price} name="price" className="w-full input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Book</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Checkout;