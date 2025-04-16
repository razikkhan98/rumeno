import React from 'react'

// Import Third Party Components
import { useForm } from 'react-hook-form';
import { Bounce, toast } from "react-toastify";

// Common Components
import { postData } from "../../common/APIs/api";

const ServiceForm = () => {
  const { register, handleSubmit } = useForm();

    const endpoint = "/user/service";

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await postData(endpoint, data);

            // store data in session for  later use
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } catch (error) {
            toast.error(error?.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
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
                        <form className='row px-lg-5 px-2 py-lg-0 py-3' onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3 d-flex flex-column col-lg-12">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="service-form-input" placeholder="Full name"
                                    {...register("name")}
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
                                <input type="time" className="service-form-input" placeholder="Select Time"
                                    {...register("bestTime")}
                                />
                            </div>
                            <div className="mb-4 d-flex flex-column col-lg-6">
                                <label className="form-label">Contact No</label>
                                <input type="tel" className="service-form-input" placeholder="Your Mobile No"
                                    {...register("phone")}
                                />
                            </div>
                            <div className="mb-4 d-flex flex-column col-lg-6">
                                <label className="form-label">Experience in Livestock Farming</label>
                                <select className="service-form-input"
                                    {...register("experience")}
                                >
                                    <option>Select Experience</option>
                                    <option>Experience 1</option>
                                    <option>Experience 2</option>
                                    <option>Experience 3</option>
                                </select>
                            </div>
                            <div className="mb-4 d-flex flex-column col-lg-6">
                                <label className="form-label">No of animals</label>
                                <select className="service-form-input"
                                    {...register("numAnimals")}
                                >
                                    <option>Select no of animals</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
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
                                <input type="number" className="service-form-input" placeholder="Size of land"
                                    {...register("landSize")}
                                />
                            </div>

                            <div className="mb-4 d-flex flex-column col-lg-12">
                                <label className="form-label">How can we help?</label>
                                <input type="text" className="service-form-input" placeholder="Tell us more about"
                                    {...register("need")}
                                />
                            </div>

                            <button type='submit' className="rounded-3 border-0 py-3 mt-3 text-white w-100 bg-orange-color">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ServiceForm;
