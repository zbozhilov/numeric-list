import { ListItemProps } from './NumericListProps';

const Item = ({
    item,
    onChange,
    enableInput,
}: {
    item: ListItemProps;
    onChange: (item: ListItemProps) => void;
    enableInput?: boolean;
}) => {
    const { value, label, description, max } = item;

    const handleNumberChange = (value: number) => {
        let newValue = value;

        if (isNaN(value) || value < 0) {
            newValue = 0;
        }

        if (max) {
            newValue = Math.min(max, newValue);
        }

        onChange({
            ...item,
            value: newValue,
        });
    };

    const inputDisabled = false === enableInput;

    return (
        <div className='zb-num-list-item'>
            <div>
                <div className='zb-num-list-item-label'>{label}</div>
                {description && (
                    <div className='zb-num-list-item-description'>
                        {description}
                    </div>
                )}
            </div>

            <div className={`zb-num-list-item-control${inputDisabled ? ' zb-num-list-item-control-no-input' : ''}`}>
                <div
                    className='zb-num-list-item-control-dec'
                    onClick={() => {
                        handleNumberChange(value - 1);
                    }}
                >
                    <i className='fa-solid fa-minus'></i>
                </div>
                <div
                    className={'zb-num-list-item-control-number'}
                >
                    {!inputDisabled && (
                        <input
                            type='text'
                            value={value}
                            onChange={(e) => {
                                handleNumberChange(Number(e.target.value));
                            }}
                        />
                    )}
                    {inputDisabled && (
                        <div className='zb-num-list-item-control-number-value'>
                            {value}
                        </div>
                    )}
                </div>
                <div
                    className='zb-num-list-item-control-inc'
                    onClick={() => {
                        handleNumberChange(value + 1);
                    }}
                >
                    <i className='fa-solid fa-plus'></i>
                </div>
            </div>
        </div>
    );
};

export default Item;
