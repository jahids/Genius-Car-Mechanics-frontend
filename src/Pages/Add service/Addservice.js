import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./addservice.css"

const Addservice = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/services', data)
    .then(res => {
        if(res.data.insertedId){
         alert('succesful data saved');
         reset();   
        }
    console.log(res);
})

    } 

    return (
        <div className="add-service">
            <h2>plese add  a service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="name" {...register("Name", { required: true, maxLength: 20 })} />
      <input  placeholder="description"  {...register("description")} />
      <input  placeholder="price"  type="number" {...register("price")} />
      <input  placeholder="image"  {...register("img")} />
      <input type="submit" />
    </form>
    </div>
    );
};

export default Addservice;