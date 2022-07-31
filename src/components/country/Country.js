import React from 'react';

const Country = (props) => {
    const { name , population } = props.country ;

     const handleClick = props.handleClick;


    const design ={

        border: "1px solid green" ,
        width: "60%",
        marginLeft : "20px",
        
        padding: " 20px",
        margin:"20px"
       
    }
    return (
        <div style={design}>
            

            <p> Name is : {name}</p>
            <p> Population : {population}</p>
            <button onClick={()=>handleClick(props.country)}>Add information </button>
        </div>
    );
};

export default Country;