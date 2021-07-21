import React from 'react';
import Buttons from "./Buttons";

const Tip = ({value, setValue, five, ten, fifteen, twentyFive, fifty, custom}) => {
    return (
        <div>
            <h3>Select Tip %</h3>
            <div>
                <Buttons value={value}
                         setValue={setValue}
                         five={five}
                         ten={ten}
                         fifteen={fifteen}
                         twentyFive={twentyFive}
                         fifty={fifty}
                         custom={custom}
                />
            </div>
        </div>
    );
};

export default Tip;
