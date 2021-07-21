import React from 'react';
import {InputContainer, InputForm} from "../style";

const Bill = ({value, setValue}) => {


    const handleOnChange = e => {
        setValue(e.target.value)
    }

    return (
        <InputContainer>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <label htmlFor="bill">Bill</label>
            </div>
            <InputForm type="text" placeholder='0' onChange={handleOnChange} value={value}/>
        </InputContainer>
    );
};

export default Bill;
