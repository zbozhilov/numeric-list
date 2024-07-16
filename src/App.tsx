import React, { useState } from 'react';
import './App.css';
import { ListItemProps } from './NumericList/NumericListProps';
import NumericList from './NumericList/NumericList';

function App() {
    const [items, setItems] = useState<ListItemProps[]>([
        {
            id: 'item1',
            value: 0,
            label: 'Item 1',
            description: 'This is item 1',
            max: 10,
        },
        {
            id: 'item2',
            value: 0,
            label: 'Item 2',
            description: 'This is item 2',
            max: 10,
        },
        {
            id: 'item3',
            value: 0,
            label: 'Item 3',
            description: 'This is item 3',
            max: 10,
        },
        {
            id: 'item4',
            value: 0,
            label: 'Item 4',
            description: 'This is item 4',
            max: 10,
        },
        {
            id: 'item5',
            value: 0,
            label: 'Item 5',
            description: 'This is item 5',
            max: 10,
        },
    ]);

    return (
        <div className='App'>
            <NumericList
                maxHeight={280}
                enableSearch={true}
                enableScrollbar={true}
                enableInput={true}
                items={items}
                onChange={(items) => {
                    setItems(items);
                }}
            />
        </div>
    );
}

export default App;
