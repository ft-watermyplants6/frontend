import React, { useState, useEffect } from "react";
// import * as yup from "yup";
// import schema from "./validations/formSchema";
// import axios from "axios";
const initialFormValues = {
    plantname: "",
    species: "",
    frequency: "",
    image: "",
};

const initialFormErrors = {
    plantname: "",
    species: "",
    frequency: "",
    image: "",
};

const plantList = [];
const initialDisabled = true;


export default function AddPlant(){
    const [plants, setPlants] = useState(plantList)

    
    return(
        <div>

        </div>
    )

}