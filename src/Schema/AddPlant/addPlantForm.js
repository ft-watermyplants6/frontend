import React from "react";
import { useHistory } from "react-router-dom";

export default function Form() {
    const { values, submit, change, disabled, errors } = props;
    const history = useHistory();
    const successRoute = () => {
        history.push("/plant/success"); //VERIFY ROUTE PLACEHOLDER
    }

    const OnChange = (evt) => {
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
        <form className="add-plant contatiner" id="add-plant-form" onChange={onChange} onSubmit={onSubmit}/>
    )
}