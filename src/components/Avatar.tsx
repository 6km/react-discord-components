import React from "react";
import { ServerData } from "../types";
import styled from "styled-components";

var AvatarContainer = styled.div`
border-radius: 10px;
background-color: red;
width: 45px;
height: 45px;
color: white;
`

export default function Avatar(data: ServerData): JSX.Element {
    var getShortName = (name: string) => {
        return name.toUpperCase().split(" ").map(l => l.charAt(0))
    }

    return (
        <AvatarContainer>
            {
                data.icon
                    ? <img src={data.icon} width="100%" height="100%" />
                    : <p>{getShortName(data.name)}</p>
            }
        </AvatarContainer>
    )
}