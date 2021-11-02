import React, { useEffect, useState } from 'react';

const Manageservice = () => {
    const [services,  setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));

    },[])

    const handleDelete = id => {

        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })

        .then(res => res.json())
        .then(data => { 
           console.log(data);
           if(data.deletedCount){
               alert('deleted succesfully');
                 const remaining = services.filter(service => service._id !== id);
            setServices(remaining);

           }
          

          })

    }
    return (
        <div>
            <h2>this is manage order</h2>
            {
                services.map(service => <div key={service.key}>
                <h2>{service.Name}</h2>
                <button onClick={() => {handleDelete(service._id)} }>delete</button> <br />

                </div> )
            }
        </div>
    );
};

export default Manageservice;