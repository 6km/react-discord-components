import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { brandColor, floating, primary } from "../utils/colors";

var ButtonContainer = styled.div`
position: relative;
`

var ButtonShape = styled.div`
border-radius: 50%;
background-color: ${primary};
width: 48px;
height: 48px;
color: white;
overflow: hidden;
text-align: center;
transition: 0.15s ease-out;
user-select: none;
position: relative;
display: flex;
align-items: center;
justify-content: center;

p {
    height: full;
    font-family: whitney;
    font-size: 16px;
    font-weight: bold;
}

&:hover {
    border-radius: 16px;
    cursor: pointer;
    background: ${brandColor};
}
`

var NamePopup = styled.div`
background: ${floating};
color: white;
position: absolute;
left: calc(100% + 22px);
width: max-content;
padding: 8px;
padding-left: 12px;
border-radius: 4px;
top: 6px;
user-select: none;

font-family: whitney !important;
font-weight: 900;
font-size: 16px;

::before {
    position: absolute;
    left: -4px;
    border-top-left-radius: 2px;
    transform: rotate(-45deg);
    top: calc(50% - (10px / 2));
    height: 8px;
    width: 8px;
    background: ${floating};
    content: '';
}
`

export interface CircleButtonProps {
    name: string,
    icon: any
}

export default function CircleButton(data: CircleButtonProps): JSX.Element {
    var [isHovering, setHoveringState] = useState(false);

    function getShortName(name: string) {
        return name.split(" ").map(l => l.charAt(0))
    }

    var mouseMoveCallback = useCallback(() => {
        setHoveringState(!isHovering)
    }, [isHovering])

    return (
        <ButtonContainer onMouseEnter={mouseMoveCallback} onMouseLeave={mouseMoveCallback}>
            <ButtonShape>
                {
                    data.icon
                        ? <data.icon width="29px" height="20px" />
                        : <p>{getShortName(data.name)}</p>
                }
            </ButtonShape>
            {
                isHovering &&
                <NamePopup>{data.name}</NamePopup>
            }
        </ButtonContainer>
    )
}