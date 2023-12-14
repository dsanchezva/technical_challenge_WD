import React from "react";

function PhoneInfo(props) {
  const phone = props.data;
  
  return (
    <div>
      <h3>
        {phone.name} Brand: {phone.manufacturer}
        <br />
        <img src={`/images/${phone.imageFileName}`} alt="phone image" width={300}/>
        <br />
        <p>{phone.description}</p>
        <ul>
            <li>Screen: {phone.screen}</li>
            <li>Processor: {phone.processor}</li>
            <li>Ram: {phone.ram}</li>
            <li>Color : {phone.color}</li>
        </ul>
        <p>Price: {phone.price}$ </p>

      </h3>
    </div>
  );
}

export default PhoneInfo;
