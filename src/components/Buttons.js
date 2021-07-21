import React, {useEffect} from 'react';
import {Button, ButtonContainer, CustomInputForm} from "../style";

const Buttons = ({value, setValue, five, ten, fifteen, twentyFive, fifty, custom}) => {

    const handleOnChange = e => {
        setValue(e.target.value)
    }

    useEffect(() => {
        custom()
    }, [value])

    return (
        <ButtonContainer>
            <Button color='hsl(183, 100%, 15%)' textColor='white' onClick={five}>5%</Button>
            <Button color='hsl(183, 100%, 15%)' textColor='white' onClick={ten}>10%</Button>
            <Button color='hsl(183, 100%, 15%)' textColor='white' onClick={fifteen}>15%</Button>
            <Button color='hsl(183, 100%, 15%)' textColor='white' onClick={twentyFive}>25%</Button>
            <Button color='hsl(183, 100%, 15%)' textColor='white' onClick={fifty}>50%</Button>
            <CustomInputForm type='text' value={value} onChange={handleOnChange} placeholder='Custom'/>
        </ButtonContainer>
    );
};

export default Buttons;
