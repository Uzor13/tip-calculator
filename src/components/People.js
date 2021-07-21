import React from 'react';
import {InputForm, InputContainer} from "../style";

const People = ({value, setValue}) => {

    const handleOnChange = e => {
        setValue(e.target.value)
    }

    return (
        <InputContainer>
            <label htmlFor="people">Number of People</label>
            <InputForm type="text" placeholder='0' value={value} onChange={handleOnChange}/>
        </InputContainer>
    );
};

export default People;
