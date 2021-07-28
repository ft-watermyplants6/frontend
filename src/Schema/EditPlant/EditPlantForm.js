import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export default function EditPlantForm(props) {
    const { values, submit, change, disabled, errors } = props;


    const history = useHistory();

    const onChange = (evt) => {
        const { name, value } = evt.target

        change(name, value)
    }
    const onSubmit = (evt) => {
        history.push('/EditPlantSuccess');
        evt.preventDefault();
        submit();
    }
    return (
        <Container>
            <form className="edit-plant contatiner" id="edit-plant-form" onChange={onChange} onSubmit={onSubmit}>
                <div className="form-group submit">
                    <h2>Edit Plant</h2>
                </div>

                <label>Plant Name
                    <input
                        name='nickname'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                        placeholder='type your plant name'
                        maxLength='30'
                        id='name-input'
                    />
                </label>


                <label>Species
                    <input
                        name='species'
                        value={values.species}
                        type='text'
                        onChange={onChange}
                        placeholder='type your plant species'
                        maxLength='30'
                        id='name-input'
                    />
                </label>


                <label>h2o Interval
                    <select
                        name='h2oInterval'
                        value={values.h2oInterval}
                        onChange={onChange}
                    >
                        <option value=''>- Select an option -</option>
                        <option value='daily'>Daily</option>
                        <option value='weekly'>Weekly</option>
                        <option value='monthly'>Monthly</option>
                    </select>
                </label>


                <label>Add Image
                    <input
                        name='image'
                        value={values.email}
                        type='text'
                        onChange={onChange}
                        placeholder='Add Image URL'
                    />
                </label>



                <button id="order-button" disabled={disabled}>Edit a Plant</button>

                <div className='errors'>
                    <div>{errors.nickname}</div>
                    <div>{errors.species}</div>
                    <div>{errors.h2oInterval}</div>
                    <div>{errors.image}</div>
                </div>


            </form>
        </Container>
    )
}



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
  }`;