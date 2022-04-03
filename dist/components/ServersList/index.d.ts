export interface ServerData {
    name: string;
    icon?: any;
    verified?: boolean;
    partnered?: boolean;
}
export interface ServersListProps {
    servers: ServerData[];
}
export default function ServersList({ servers }: ServersListProps): JSX.Element;
