
type Props = {
    str: string;
    limit: number
}

export const shortcut = ({str, limit}: Props) => {
    return str.length > limit ? `${str.slice(0, limit)}...` : str;
}