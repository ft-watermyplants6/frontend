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
                <div>
                <Image src="https://images.unsplash.com/photo-1498569026542-39c64353e401?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG1pc3NpbmclMjBwbGFudCUyMHNwb3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
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

const Image = styled.img`
box-sizing: border-box;
border: 1px solid black;
margin: 3% ;
border-radius: 30%;
max-height: 100%;
@media (max-width: 768px){
  max-width: 100%;
  border-radius: 50%;
}
`;