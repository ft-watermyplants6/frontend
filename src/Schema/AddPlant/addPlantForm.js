import React from "react";
import { useHistory } from "react-router-dom";

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props;
    const history = useHistory();
    const successRoute = () => {
        history.push("/plant/success"); //VERIFY ROUTE PLACEHOLDER
    }

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
    return(
        <form className="add-plant contatiner" id="add-plant-form" onChange={onChange} onSubmit={onSubmit}>
        <div className="form-group submit">
            <h2>Add Plant</h2>
        </div>

        </form>
    )
}