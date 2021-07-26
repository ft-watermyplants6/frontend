import React, { useState, useEffect } from "react";
// import * as yup from "yup";
// import schema from "./validations/formSchema";
import axios from "axios";

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
    const [plants, setPlants] = useState(plantList);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    
    const plantSubmitted = (newplant) => {
        return setPlants(formValues)
    } 

     //   axios
  //     .get("https://reqres.in/api/orders")
  //     .then((res) => {
  //       setPizzas(res.data.data);
  //       console.log(`HERE IS setPizzas`, setPizzas);
  //     })
  //     .catch((err) => {
  //       debugger;
  //       console.log(err);
  //     });
  // };

  const postNewPlant = (newPlant) => {
    axios
      .post("???????", newPlant)
      .then((res) => {
        setPlants([...plants, res.data]);
        setFormValues(initialFormValues);
        console.log(`HERE is postNewPlant`, postNewPlant);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      })
  };

    
    return(
        <div>

        </div>
    )

}