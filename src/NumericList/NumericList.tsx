import { ListProps } from './NumericListProps';
import Search from './Search';
import React, { useState } from 'react';
import './style/NumericList.scss';
import ListItems from './ListItems';

const WithMaybeScrollbar = (props: {
    maxHeight: number;
    enableScrollbar: boolean;
    children: React.ReactNode;
}) => {

    if (props.enableScrollbar) {
        return (
            <div
                className='zb-num-list-scroll'
                style={{
                    maxHeight: props.maxHeight,
                }}
            >
                {props.children}
            </div>
        );
    }

    return <>{props.children}</>;
};

const NumericList = (props: ListProps) => {
    const { items } = props;

    const [search, setSearch] = useState<string>('');

    return (
        <div className='zb-num-list'>
            {props.enableSearch && (
                <Search
                    value={search}
                    setValue={(text) => {
                        setSearch(text);
                    }}
                />
            )}

            <WithMaybeScrollbar
                enableScrollbar={props.enableScrollbar}
                maxHeight={props.maxHeight || 340}
            >
                <ListItems
                    items={items.filter(test => {
                        return test.label.toLowerCase().includes(search.toLowerCase());
                    })}
                    onChange={(items) => {
                        props.onChange(items);
                    }}
                />
            </WithMaybeScrollbar>
        </div>
    );
};

export default NumericList;
