import { ServerData } from "../../types";
export interface ServersListProps {
    servers: ServerData[];
}
export default function ServersList({ servers }: ServersListProps): JSX.Element;
