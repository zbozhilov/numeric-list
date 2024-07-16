import React from 'react';
import { ListItemProps } from './NumericListProps';
import Item from './Item';

const ListItems = ({
    items,
    onChange
}: {
    items: ListItemProps[];
    onChange: (items: ListItemProps[]) => void;
}) => {

    if (!items.length) {
        return null;
    }

    return (
        <div className='zb-num-list-items'>
            {items.map((item, index) => {
                return (
                    <Item
                        key={item.id}
                        item={item}
                        onChange={(item) => {
                            const newItems = [...items];
                            newItems[index] = item;
                            onChange(newItems);
                        }}
                    />
                );
            })}
        </div>
    );
};

export default ListItems;
