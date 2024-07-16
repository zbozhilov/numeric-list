import Item from './Item';
import { ListItemProps } from './NumericListProps';

const ListItems = ({
    items,
    enableInput,
    onChange
}: {
    items: ListItemProps[];
    onChange: (items: ListItemProps[]) => void;
    enableInput?: boolean;
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
                        enableInput={enableInput}
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
