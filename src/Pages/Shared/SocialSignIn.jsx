import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SocialSignIn = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {

                // The signed-in user info.
                const user = result.user;
                console.log(user);
                const loggedUser = {
                    email: user.email
                }
                fetch('https://car-doctor-server-crud.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('access-token', data.token)
                    })
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
            });
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center my-4'>
                <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'>G</button></div>
        </div>
    );
};

export default SocialSignIn;