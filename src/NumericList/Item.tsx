import { ListItemProps } from './NumericListProps';

const Item = ({
    item,
    onChange,
}: {
    item: ListItemProps;
    onChange: (item: ListItemProps) => void;
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

            <div className='zb-num-list-item-control'>
                <div
                    className='zb-num-list-item-control-dec'
                    onClick={() => {
                        handleNumberChange(value - 1);
                    }}
                >
                    <i className='fa-solid fa-minus'></i>
                </div>
                <div className='zb-num-list-item-control-number'>
                    <input
                        type='text'
                        value={value}
                        onChange={(e) => {
                            handleNumberChange(Number(e.target.value));
                        }}
                    />
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
