import React from 'react'
import {Wrapper} from "./style";
import Logo from "./components/Logo";
import './index.css'
import Body from "./components/Body";

function App() {
    return (
        <Wrapper>
            <Logo/>
            <Body/>
        </Wrapper>
    );
}

export default App;
