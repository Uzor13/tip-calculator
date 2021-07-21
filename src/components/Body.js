import React, {useEffect, useState} from 'react';
import {Container} from "../style";
import Bill from "./Bill";
import People from "./People";
import Tip from "./Tip";
import TipContainer from "./TipContainer";

const Body = () => {

    const [billValue, setBillValue] = useState('');
    const [buttonTipValue, setButtonTipValue] = useState('');
    const [peopleValue, setPeopleValue] = useState('');
    const [totalValue, setTotalValue] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);

    useEffect(() => {
        totalAmount()
        custom()
    }, [billValue, peopleValue, tipAmount, buttonTipValue])

    const fivePercent = () => {
        let percentResult = parseFloat(billValue) * 5 / 100
        let total = percentResult / parseInt(peopleValue)
        setTipAmount(parseFloat(total.toFixed(2)))
    }

    const tenPercent = () => {
        let percentResult = parseFloat(billValue) * 10 / 100
        let total = percentResult / parseInt(peopleValue)
        setTipAmount(parseFloat(total.toFixed(2)))
    }
    const fifteenPercent = () => {
        let percentResult = parseFloat(billValue) * 15 / 100
        let total = percentResult / parseInt(peopleValue)
        setTipAmount(parseFloat(total.toFixed(2)))
    }
    const twentyFivePercent = () => {
        let percentResult = parseFloat(billValue) * 25 / 100
        let total = percentResult / parseInt(peopleValue)
        setTipAmount(parseFloat(total.toFixed(2)))
    }
    const fiftyPercent = () => {
        let percentResult = parseFloat(billValue) * 50 / 100
        let total = percentResult / parseInt(peopleValue)
        setTipAmount(parseFloat(total.toFixed(2)))
    }
    const custom = () => {
        let percentResult = parseFloat(billValue) * buttonTipValue / 100
        let total = percentResult / parseInt(peopleValue)
        setTipAmount(parseFloat(total.toFixed(2)))
    }

    const handleReset = () => {
        setTipAmount(0)
        setTotalValue(0)
        setPeopleValue('')
        setBillValue('')
        setButtonTipValue('')
    }


    const totalAmount = () => {
        let total = parseFloat(billValue) / parseInt(peopleValue) + tipAmount
        setTotalValue(parseFloat(total.toFixed(2)))
    }

    return (
        <Container>
            <div>
                <Bill value={billValue} setValue={setBillValue}/>
                <People value={peopleValue} setValue={setPeopleValue}/>
                <Tip
                    value={buttonTipValue}
                    setValue={setButtonTipValue}
                    five={fivePercent}
                    ten={tenPercent}
                    fifteen={fifteenPercent}
                    twentyFive={twentyFivePercent}
                    fifty={fiftyPercent}
                    custom={custom}
                />
            </div>
            <div>
                <TipContainer total={totalValue}
                              tip={tipAmount}
                              reset={handleReset}
                />
            </div>
        </Container>
    );
};

export default Body;
