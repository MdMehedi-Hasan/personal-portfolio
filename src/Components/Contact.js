import React from 'react';
import image from '../images/wave.png'

const Contact = () => {
    return (
        <div className="card rounded-none h-screen image-full">
        <figure><img width='100%' src={image} alt="Shoes" /></figure>
        <div className="card-body p-0">
        <div className='h-screen flex items-center justify-center'>
            <div className="container lg:w-fit w-auto">
                <h1 className='text-white lg:text-6xl text-5xl border-b-2 mb-6 inline-block'>Contact me</h1>
                <form target="_blank" action="https://formsubmit.co/761204c45454f3918b27b86c7af523d0" method="POST">
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col mb-4">
                                <input type="text" name="name" className="form-control border w-96 rounded py-2 px-2" placeholder="Full Name" required />
                            </div>
                            <div className="col mb-4">
                                <input type="email" name="email" className="form-control border w-96 rounded py-2 px-2" placeholder="Email Address" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" className="form-control border w-96 rounded py-2 px-2" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-lg btn-accent mt-4">Send message</button>
                </form>
            </div>
        </div>
        </div>
      </div>
    );
};

export default Contact;