import React from "react";
import { useHistory } from "react-router-dom";

export default function AddPlantForm(props) {
    const { values, submit, change, disabled, errors } = props;
    const history = useHistory();
    // const successRoute = () => {
    //     history.push("/plant/success"); //VERIFY ROUTE PLACEHOLDER
    // }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    const onSubmit = (evt) => {
        history.push('plant/success');
        evt.preventDefault();
        submit();
    }
    return (
        <form className="add-plant contatiner" id="add-plant-form" onChange={onChange} onSubmit={onSubmit}>
            <div className="form-group submit">
                <h2>Add Plant</h2>
            </div>
            <div>
                <label>Plant Name
                    <input
                        name='plantname'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                        placeholder='type your plant name'
                        maxLength='30'
                        id='name-input'
                    />
                </label>
            </div>
            <div>
                <label>Species
                    <input
                        name='species'
                        value={values.species}
                        type='text'
                        onChange={onChange}
                        placeholder='type your unsername'
                        maxLength='30'
                        id='name-input'
                    />
                </label>
            </div>
            <div>
                <label>h2o Frequency
                    <select
                        name='h2ofrequency'
                        value={values.h2ofrequency}
                        onChange={onChange}
                    >
                        <option value=''>- Select an option -</option>
                        <option value='daily'>Daily</option>
                        <option value='weekly'>Weekly</option>
                        <option value='monthly'>Monthly</option>
                    </select>
                </label>
            </div>
            <div>
                <label>Add Image
                    <input
                        name='image'
                        value={values.email}
                        type='text'
                        onChange={onChange}
                        placeholder='Add Image URL'
                    />
                </label>

            </div>

            <button id="order-button" disabled={disabled}>Add Plant</button>

        </form>
    )
}