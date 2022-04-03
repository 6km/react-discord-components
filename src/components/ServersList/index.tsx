import React from "react"
import styled from "styled-components"
import { ServerData } from "../../types"
import Avatar from "../Avatar"

export interface ServersListProps {
    servers: ServerData[]
}

var Wrapper = styled.div`
width: 72px;
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