import React, { memo } from 'react';

const Search = memo(
    ({
        value,
        setValue,
    }: {
        value: string;
        setValue: (text: string) => void;
    }) => {
        return (
            <div className='zb-num-list-search'>
                <input
                    type='text'
                    value={value}
                    placeholder='Search'
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
            </div>
        );
    },
    (prevProps, nextProps) => prevProps.value === nextProps.value
);

export default Search;
