// import React, {useState, useEffect} from "react";
// import * as yup from "yup";
// import axios from "axios";
// import schema from "../formSchema";

// const initialFormValues = {
//     nickname: "",
//     species: "",
//     h2ofrequency: "",
//     image: "",
// };

// const initialFormErrors = {
//     nickname: "",
//     species: "",
//     h2ofrequency: "",
//     image: "",
// };

// const plantList = [];
// const initialDisabled = true;
// export default function DeletePlant (){
//     const [plants, setPlants]
// }
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import schema from "../formSchema";
import EditPlantForm from "./EditPlantForm";
import styled from 'styled-components';


const initialFormValues = {
    nickname: "",
    species: "",
    h2ofrequency: "",
    image: "",
};

const initialFormErrors = {
    nickname: "",
    species: "",
    h2ofrequency: "",
    image: "",
};

const plantList = [];
const initialDisabled = true;


export default function EditPlant() {
    const [plants, setPlants] = useState(plantList);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    // const plantSubmitted = (newplant) => {
    //     return setPlants(formValues)
    // }

    //   AXIOS PLACE HOLDERS ====================
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

    const putNewPlant = (editPlant) => {
        axios
            .put("???????", editPlant)
            .then((res) => {
                setPlants([...plants, res.data]);
                setFormValues(initialFormValues);
                console.log(`HERE is putNewPlant`, putNewPlant);
            })
            .catch((err) => {
                debugger;
                console.log(err);
            })
    };

    //VALIDATIONS =======================
    const validate = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then((valid) => {
                //eslint-disable-line
                setFormErrors({
                    ...formErrors,
                    [name]: "",
                });
            })
            .catch((err) => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0],
                });
            });
        setFormValues({ ...formValues, [name]: value })
    };

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues]);

    //CHANGE HANDLER =========================

    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({ ...formValues, [name]: value });
    };

    //SUBMIT HANDLER
    const formSubmit = () => {
        const newPlant = {
            nickname: formValues.nickname.trim(),
            species: formValues.species.trim(),
            h2ofrequency: formValues.h2ofrequency.trim(),
            image: formValues.image.trim()
        }
        const editPlant = {
            nickname: formValues.nickname.trim(),
            species: formValues.species.trim(),
            h2ofrequency: formValues.h2ofrequency.trim(),
            image: formValues.image.trim(),
        }


        postNewPlant(newPlant);
        putNewPlant(editPlant);
    }


    return (
        <Container>
            <div>
                <EditPlantForm
                    values={formValues}
                    change={inputChange}
                    submit={formSubmit}
                    disabled={disabled}
                    errors={formErrors}
                />
            </div>

            <div>
                <Image src="https://images.unsplash.com/photo-1498569026542-39c64353e401?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG1pc3NpbmclMjBwbGFudCUyMHNwb3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </div>
        </Container>
    )

}

const Image = styled.img`
border: 1px solid black;
margin: 3% ;
height: 60vh; `

const Container = styled.div``;