import React from "react"
import styled from "styled-components"
import { tertiary } from "../../utils/colors"
import { ServerData } from "../../utils/types"
import Avatar from "../Avatar"
import CircleButton from "../CircleButton"
import GuildSperator from "./GuildSperator"
import { ReactComponent as DiscordLogo } from "./Icons/DiscordLogo.svg"

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
padding-top: 12px;
gap: 8px;
`

export default function ServersList({ servers }: ServersListProps): JSX.Element {
    return (
        <Wrapper>
            <CircleButton name={"Home"} icon={DiscordLogo} />
            <GuildSperator />
            {servers.map((server) => {
                return (
                    <Avatar {...server} />
                )
            })}
            <GuildSperator />
        </Wrapper>
    )
}