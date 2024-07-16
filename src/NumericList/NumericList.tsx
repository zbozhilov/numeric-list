import { ListProps } from './NumericListProps';
import Search from './Search';
import React, { useState } from 'react';
import './style/NumericList.scss';
import ListItems from './ListItems';
import { useRef, useEffect } from 'react';

const WithMaybeScrollbar = (props: {
    maxHeight: number;
    enableScrollbar: boolean;
    children: React.ReactNode;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!containerRef.current) {
            return;
        }

        const container = containerRef.current;

        const resizeObserver = new ResizeObserver(() => {

            const hasVerticalScroll = container.scrollHeight > container.clientHeight;

            if (hasVerticalScroll) {
                container.classList.add('zb-num-list-scroll-scollable');
            } else {
                container.classList.remove('zb-num-list-scroll-scollable');
            }

        });

        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    if (props.enableScrollbar) {
        return (
            <div
                ref={containerRef}
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
                    enableInput={props.enableInput}
                    items={items.filter((test) => {
                        return test.label
                            .toLowerCase()
                            .includes(search.toLowerCase());
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
