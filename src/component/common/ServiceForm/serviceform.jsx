import React from 'react'
import { useForm } from 'react-hook-form';

const ServiceForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className='container my-5'>
                <div className='bg-light-orange-color row g-0 form-radius'>
                    <div className='col-lg-6 p-5  text-white form-img'>
                        {/* <img src={FormImg} className='form-img' alt="Loading" /> */}
                        <div>
                            <p className='font-size-32'>LET’S TALK ABOUT YOUR NEEDS!!</p>
                            <p className='font-size-18'>Reach us anytime by simply filling this basic form</p>
                        </div>
                    </div>
                    <div className='col-lg-6 container d-flex align-items-center'>
                        <form className='row px-5' onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3 d-flex flex-column col-lg-12">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="service-form-input" placeholder="Full name"
                                    {...register("fullName")}
                                />
                            </div>
                            <div className="mb-3 d-flex flex-column col-lg-12">
                                <label className="form-label">Address</label>
                                <input type="text" className="service-form-input" placeholder="Your Address"
                                    {...register("address")}
                                />
                            </div>
                            <div className="mb-4 d-flex flex-column col-lg-6">
                                <label className="form-label">When can we call you</label>
                                <input type="text" className="service-form-input" placeholder="Select Time"
                                    {...register("callTime")}
                                />
                            </div>
                            <div className="mb-4 d-flex flex-column col-lg-6">
                                <label className="form-label">Contact No</label>
                                <input type="text" className="service-form-input" placeholder="Your Mobile No"
                                    {...register("contactNo")}
                                />
                            </div>
                            <div className="mb-4 d-flex flex-column col-lg-6">
                                <label className="form-label">Experience in Livestock Farming</label>
                                <select className="service-form-input"
                                    {...register("experience")}
                                >
                                    <option>Select Experience</option>
                                </select>
                            </div>
                            <div className="mb-4 d-flex flex-column col-lg-6">
                                <label className="form-label">No of animals</label>
                                <select className="service-form-input"
                                    {...register("numAnimals")}
                                >
                                    <option>Select no of animals</option>
                                </select>
                            </div>
                            <div className="mb-3 d-flex flex-column col-lg-12">
                                <label className="form-label">Size of the land for animal farming</label>
                                <div>
                                    <input {...register("farmType")} type="radio" value="Goat" id="goat" />
                                    <label htmlFor="goat" className="ms-2 me-5">Goat</label>
                                    <input {...register("farmType")} type="radio" value="Sheep" id="sheep" />
                                    <label htmlFor="sheep" className="ms-2 me-5">Sheep</label>
                                    <input {...register("farmType")} type="radio" value="Cow" id="cow" />
                                    <label htmlFor="cow" className="ms-2 me-5">Cow</label>
                                    <input {...register("farmType")} type="radio" value="Buffalo" id="buffalo" />
                                    <label htmlFor="buffalo" className="ms-2">Buffalo</label>
                                </div>
                            </div>
                            <div className="mb-4 d-flex flex-column col-lg-12">
                                {/* <label className="form-label">Full Name</label> */}
                                <input type="text" className="service-form-input" placeholder="Size of land"
                                    {...register("landSize")}
                                />
                            </div>

                            <div className="mb-4 d-flex flex-column col-lg-12">
                                <label className="form-label">How can we help?</label>
                                <input type="text" className="service-form-input" placeholder="Tell us more about"
                                    {...register("helpDetails")}
                                />
                            </div>

                            <button type='submit' className="btn py-3 mt-3 text-white w-100 bg-orange-color">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ServiceForm;