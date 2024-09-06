'use client';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';
import { useState } from 'react';

type FormSelectInputProps = SelectProps & {
  size?: string;
  items: Array<{ value: any; text: string }>;
  onChange?: any;
};

export default function FormSelectInput(props: FormSelectInputProps) {
  const { size, items, variant, sx, onChange, error, ...selectProps } = props;

  const [_value, setValue] = useState('');
  const handleChange = (event: any) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl sx={{ ...sx }}>
      <Select
        value={_value}
        error={error}
        onChange={handleChange}
        size={size || 'small'}
        variant={variant || 'outlined'}
        sx={{ minWidth: '200px' }}
      >
        {items.map((item: any, index: number) => (
          <MenuItem key={`${props.name}-${index}`} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
