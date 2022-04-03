import React, { useCallback, useState } from "react";
import { ServerData } from "../utils/types";
import styled from "styled-components";
import { floating, primary } from "../utils/colors";

var AvatarContainer = styled.div`
position: relative;
`

var AvatarShape = styled.div`
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

export default function Avatar(data: ServerData): JSX.Element {
    var [isHovering, setHoveringState] = useState(false);

    function getShortName(name: string) {
        return name.split(" ").map(l => l.charAt(0))
    }

    var mouseMoveCallback = useCallback(() => {
        setHoveringState(!isHovering)
    }, [isHovering])

    return (
        <AvatarContainer onMouseEnter={mouseMoveCallback} onMouseLeave={mouseMoveCallback}>
            <AvatarShape>
                {
                    data.icon
                        ? <img src={data.icon} width="100%" height="100%" />
                        : <p>{getShortName(data.name)}</p>
                }
            </AvatarShape>
            {
                isHovering &&
                <NamePopup>{data.name}</NamePopup>
            }
        </AvatarContainer>
    )
}