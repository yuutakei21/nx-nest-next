import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';

type FormSelectProps = SelectProps & {
    size?: string;
    items: Array<{ value: any, label: string }>;
};

const UISelect = (props: FormSelectProps) => {
    const { size, items, variant, sx, ...selectProps } = props
    return (
        <FormControl fullWidth>
            <InputLabel>{props.label}</InputLabel>
            <Select
                {...selectProps}
                size={size || 'medium'}
                value={props.value || ""}
                variant={variant || "outlined"}
                sx={{ width: '200px', ...sx }}
            >
                <MenuItem value="" sx={{ display: 'none' }} />
                {items.map((item: any, index: number) => (
                    <MenuItem key={`${props.name}-${index}`}
                        value={item.value}
                    >
                        {item.label}
                    </MenuItem>
                ))}

            </Select>
        </FormControl>




    );
};

export default UISelect