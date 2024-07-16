# Numeric List Items with Optional Scrollbar, Search field and Number Input
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Properties

- **items**: `ListItemProps[]`
  - An array of items to be displayed in the list.

- **enableSearch**: `boolean`
  - Determines whether the search functionality is enabled.

- **enableScrollbar**: `boolean`
  - Specifies whether the scrollbar is enabled for the list.

- **maxHeight** (optional): `number`
  - Maximum height of the list container in pixels.

- **enableInput** (optional): `boolean`
  - Determines whether user input is enabled for the number. When false only - / + buttons will be available.

- **onChange**: `(items: ListItemProps[]) => void`
  - Callback function triggered when the items in the list are changed.

# Example

```javascript

import { useState } from 'react';
import './App.css';
import NumericList from './NumericList/NumericList';
import { ListItemProps } from './NumericList/NumericListProps';

function App() {
    const [items, setItems] = useState<ListItemProps[]>([
        {
            id: 'item1',
            value: 0,
            label: 'Item 1',
            description: 'This is item 1',
            max: 10, // max possible value
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


```

