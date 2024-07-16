export interface ListItemProps {
    id: string;
    value: number;
    label: string;
    description?: string;
    max?: number;
}

export interface ListProps {
    items: ListItemProps[];
    enableSearch: boolean;
    enableScrollbar: boolean;
    maxHeight?: number;
    enableInput?: boolean;
    onChange: (items: ListItemProps[]) => void;
}
