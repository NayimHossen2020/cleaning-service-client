import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../Api";

const AddService = () => {
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const serviceData = {
            ...data,
            image: imageURL,
        };

        const res = await fetcher.post("/add-services", serviceData);
        console.log(res);
        reset();
        setImageURL("");
    };

    const handleUploadImage = (event) => {
        setLoading(true);
        const image = event.target.files[0];

        const formData = new FormData();

        formData.set("image", image);

        axios
            .post(
                "https://api.imgbb.com/1/upload?key=17cff9a2ec79367bea2e84bf7b3aa508",
                formData
            )
            .then((res) => {
                setImageURL(res.data.data.display_url);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='h-screen w-full flex bg-accent justify-center items-center'>
            <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                <div className='card-body'>
                    <h1 className='text-center text-2xl'>Add Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-control'>
                            <label htmlFor='serviceName' className='label'>
                                <span className='label-text'>Service Name</span>
                            </label>
                            <input
                                type='text'
                                id='serviceName'
                                className='input input-bordered'
                                {...register("serviceName")}
                            />
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Service Charge</span>
                            </label>
                            <input
                                type='text'
                                className='input input-bordered'
                                {...register("serviceCharge")}
                            />
                        </div>
                        <div className='form-control'>
                            <label
                                htmlFor='image'
                                className={
                                    loading
                                        ? "btn btn-primary loading mt-5"
                                        : "btn btn-primary mt-5"
                                }
                            >
                                Upload Image
                            </label>
                            <input
                                type='file'
                                id='image'
                                className='input input-bordered hidden'
                                onChange={handleUploadImage}
                            />
                        </div>
                        <div className='form-control mt-6'>
                            <button
                                type='submit'
                                className='btn btn-primary'
                                disabled={!imageURL ? true : false}
                            >
                                Add Service
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;