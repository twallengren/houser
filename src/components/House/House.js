import React from 'react';

function House(props) {
    return (
        <div>
            <div>PROPERTY NAME: {props.houseDetails.property_name}</div>
            <div>ADDRESS: {props.houseDetails.address}</div>
            <div>CITY: {props.houseDetails.city}</div>
            <div>STATE: {props.houseDetails.state}</div>
            <div>ZIP CODE: {props.houseDetails.zip}</div>
            <button>DELETE PROPERTY</button>
        </div>
    )
}

export default House;