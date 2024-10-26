import React, { useState } from "react";

function ObjectHook() {
    const [cars, setCar] = useState([]);
    const [caryear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");

    function addAcar() {
        const newCar = { 
            Cyear: caryear,
            Cmake: carMake,
            Cmodel: carModel
        };
        setCar(prevCars => [...prevCars, newCar]);         
    }
                
    function carRemove(index) {
        setCar(prevCars => prevCars.filter((Element, i) => i !== index));
    }
    
    function yearChange(event) {
        setYear(event.target.value);
    }
    
    function makeChange(event) {
        setMake(event.target.value);
    }
    
    function makeModel(event) {
        setModel(event.target.value);
    }
  
    return (
        <div>
            <h1>List of cars</h1>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => carRemove(index)}>
                        {car.Cyear} {car.Cmake} {car.Cmodel}
                    </li>
                ))}  
            </ul>
            <input type="number" onChange={yearChange} value={caryear} placeholder="Year" />
            <input type="text" onChange={makeChange} placeholder="Enter the make" />
            <input type="text" onChange={makeModel} placeholder="Enter the model" />
            <button onClick={addAcar}>Add Car</button>
        </div>
    );
}

export default ObjectHook;