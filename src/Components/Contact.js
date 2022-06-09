import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container mx-auto">
                <h1 className='text-white text-6xl border-b-2 mb-6 inline-block'>Contact me</h1>
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
    );
};

export default Contact;