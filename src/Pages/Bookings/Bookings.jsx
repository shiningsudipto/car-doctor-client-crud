import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:3000/bookings?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data)
            })
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?')
        if (proceed) {
            fetch(`http://localhost:3000/bookings/${id}`, {
                method: 'DELETE'
            }
            )
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleConfirm = id => {
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
                }
            })
    }

    return (
        <div>
            <h3 className='text-3xl font-bold'>Your Bookings: {bookings.length}</h3>

            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Confirmation</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* Table Row */}

                            {
                                bookings.map(booking => <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleConfirm={handleConfirm}
                                ></BookingRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default Bookings;