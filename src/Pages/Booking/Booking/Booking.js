import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [data, setdata] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setdata(data));
       

    },[])
    return (
        <div>
            <h2>Detiles of : {data.Name} </h2>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;