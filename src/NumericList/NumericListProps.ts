export interface ListItemProps {
    id: string;
    value: number;
    label: string;
    description?: string;
    min?: number;
    max?: number;
}

export interface ListProps {
    items: ListItemProps[];
    enableSearch: boolean;
    enableScrollbar: boolean;
    maxHeight?: number;
    onChange: (items: ListItemProps[]) => void;
}
