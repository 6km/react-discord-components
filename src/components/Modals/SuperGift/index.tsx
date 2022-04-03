import { XIcon } from "@heroicons/react/solid";
import React from "react";
import styled from "styled-components";
import { tertiary } from "../../../utils/colors";

var Wrapper = styled.div`
position: absolute;
left: 0;
right: 0;
bottom: 0;
top: 0;
background: rgba(0, 0, 0, 0.6);
z-index: 100; /* ffffff0a */

display: flex;
align-items: center;
justify-content: center;
`

var SuperModal = styled.div`
width: 28em;
height: /*36em*/ 18em;
background: /* #F6F6F6 */ ${tertiary};
border-radius: 4px;
overflow: hidden;
position: relative;
user-select: none;

img {
    opacity: 0.4;
    height: 100%;
}

::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: /*45%*/ 100%;
    background: linear-gradient(0deg, ${tertiary}, transparent);
}
`

var Header = styled.div`
padding: 12px 12px 12px 12px;
display: flex;
align-items: center;
gap: 4px;
position: relative;
background: rgba(240, 240, 255, 0.1);
backdrop-filter: blur(2px);

& > h2 {
    color: white;
    font-size: 17px;
    font-family: whitney;
    font-weight: 500;
    margin: 0;
    flex: 1;
}
`

var CloseButton = styled.button`
outline: none;
border: none;
height: 25px;
background: transparent;
color: white;
cursor: pointer;
opacity: 0.7;
transition: 0.15s ease-out;

:hover {
    opacity: 1;
}
`

export default function SuperGift(): JSX.Element {
    return (
        <Wrapper>
            <SuperModal>
                <div style={{ width: "100%", position: "absolute", zIndex: 10 }}>
                    <Header>
                        <h2>Claim Your Gift</h2>
                        <CloseButton><XIcon width={24} /></CloseButton>
                    </Header>
                </div>
                <img src="/assets/superimage.png" />
            </SuperModal>
        </Wrapper>
    )
}