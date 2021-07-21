import React from 'react';
import {ResetButton, TotalContainer} from "../style";

const TipContainer = ({tip, total, reset}) => {

    const handleReset = () => {
        tip = ''
    }

    return (
        <TotalContainer>
            <div className='tip'>
                <h3 className='tip-amount'>Tip Amount <br/>
                    <span className='tip-amount__subtitle'>/ person</span>
                </h3>
                <h3 className="amount" id="tip">${isNaN(tip) ? '0.00' : tip}</h3>
            </div>

            <div className='total'>
                <h3 className='total-amount'>Total <br/>
                    <span className='total-amount__subtitle'>/ person</span>
                </h3>
                <h3 className="amount" id="total">${isNaN(total) ? '0.00' : total}</h3>
            </div>
            <ResetButton color='#0D686D' textColor='hsl(183, 100%, 15%)' onClick={reset}>reset</ResetButton>
        </TotalContainer>
    );
};

export default TipContainer;
