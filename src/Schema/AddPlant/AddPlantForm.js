import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export default function AddPlantForm(props) {
    const { values, submit, change, disabled, errors } = props;

    const history = useHistory();
    // const successRoute = () => {
    //     history.push("/plant/success"); //VERIFY ROUTE PLACEHOLDER
    // }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };
    const onSubmit = (evt) => {
        history.push("plant/success");
        evt.preventDefault();
        submit();
    };
    return (
        <Container>
            <div>
                <form
                    className="add-plant contatiner"
                    id="add-plant-form"
                    onChange={onChange}
                    onSubmit={onSubmit}
                >
                    <div className="form-group submit">
                        <h2>Add Plant</h2>
                    </div>

                    <label>
                        Plant Name:
                        <input
                            name="nickname"
                            type="text"
                            value={values.name}
                            onChange={onChange}
                            placeholder="type your plant name"
                            maxLength="30"
                            id="name-input"
                        />
                    </label>

                    <label>
                        Species:
                        <input
                            name="species"
                            value={values.species}
                            type="text"
                            onChange={onChange}
                            placeholder="type your plant species"
                            maxLength="30"
                            id="name-input"
                        />
                    </label>

                    <label>
                        h2o Frequency:
                        <select
                            name="h2ofrequency"
                            value={values.h2ofrequency}
                            onChange={onChange}
                        >
                            <option value="">- Select an option -</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </label>

                    <label>
                        Add Image:
                        <input
                            name="image"
                            value={values.email}
                            type="text"
                            onChange={onChange}
                            placeholder="Add Image URL"
                        />
                    </label>

                    <button id="order-button" disabled={disabled}>
                        Add Plant
                    </button>
                    <div className="errors">
                        <div>{errors.nickname}</div>
                        <div>{errors.species}</div>
                        <div>{errors.h2ofrequency}</div>
                        <div>{errors.image}</div>
                    </div>
                    <div>
                        <Image
                            src="https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkZCUyMHBsYW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt="plant"
                        />
                    </div>
                </form>
            </div>
        </Container>
    );
}

const Image = styled.img`
  border: 1px solid black;
  margin: 3%;
  height: 60vh;
`;

const Container = styled.div`
  form {
    margin: 1%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
  }
  label {
    margin: 0.25%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
  button {
  }
`;
