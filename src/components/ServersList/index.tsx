import React from "react"
import styled from "styled-components"
import { tertiary } from "../../utils/colors"
import { ServerData } from "../../utils/types"
import Avatar from "../Avatar"

export interface ServersListProps {
    servers: ServerData[]
}

var Wrapper = styled.div`
width: 72px;
background: ${tertiary};
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
padding-top: 16px;
gap: 8px;
`

export default function ServersList({ servers }: ServersListProps): JSX.Element {
    return (
        <Wrapper>
            {servers.map((server) => {
                return (
                    <Avatar {...server} />
                )
            })}
        </Wrapper>
    )
}