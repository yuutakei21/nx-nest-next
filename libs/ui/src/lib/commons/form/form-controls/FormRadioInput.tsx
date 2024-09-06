/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-useless-fragment */
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export type UIRadioGroupProps = {
  id: string;
  value: any;
  items: Array<{
    value: any;
    text: string;
    disabled?: boolean;
    otherInput?: boolean;
  }>;
  label?: any;
  name?: string;
  error?: boolean;
  onChange: (value: any) => void;
  position?: 'right' | undefined;
  minWidth?: any;
};

const DEFAULT_OTHER_VALUE = 'OTHER_VAL';
const OTHER_RADIO_COCNTROL = 'OTHER_RADIO';
const OTHER_INPUT_CONTROL = 'OTHER_TEXT_INPUT';

const FormRadioInput = (props: UIRadioGroupProps) => {
  const { id, value, label, name, items, position, error } = props;
  const definedValue =
    items
      ?.filter((item: any) => !item.otherInput)
      .map((filterd: any) => filterd.value) || [];
  const initValue =
    definedValue.indexOf(value) < 0 && value != null
      ? DEFAULT_OTHER_VALUE
      : value;
  const initOtherInput = initValue === DEFAULT_OTHER_VALUE ? value : '';
  const [radioValue, setValue] = useState(initValue);
  const [otherValue, setOtherValue] = useState(initOtherInput);
  const [isDisableOther, setDisableOther] = useState(
    value == null || definedValue.indexOf(value) > 0,
  );

  const handleValueChange = (event: any) => {
    const controlName = event.target.name;
    const emitValue = event.target.value;
    if (controlName !== OTHER_INPUT_CONTROL) {
      setValue(event.target.value);
    }
    if (props.onChange) {
      if (controlName === OTHER_RADIO_COCNTROL) {
        if (isDisableOther) {
          setDisableOther(false);
        }
        console.log(otherValue);
        props.onChange(otherValue);
      } else {
        if (!isDisableOther && controlName !== OTHER_INPUT_CONTROL) {
          setDisableOther(true);
        }
        console.log(emitValue);
        props.onChange(emitValue);
      }
    }
  };

  const borderStyle = error ? 'solid 1px rgb(255, 23, 68)' : 'none';
  const rightStyle = {
    border: borderStyle,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '24px',
  };
  const upStyle = { border: borderStyle };
  const style = position === 'right' ? rightStyle : upStyle;

  return (
    <FormControl
      id={id}
      sx={{ paddingLeft: '4px', ...style }}
      className="ui-radio-group-root"
    >
      {label && <Typography variant="subtitle1">{label}</Typography>}
      <RadioGroup
        sx={{ minWidth: props.minWidth ? props.minWidth : 'inherit' }}
        row
        name={name}
        value={radioValue}
        onChange={(e) => handleValueChange(e)}
      >
        {items &&
          items.map((item: any, index: any) => (
            <div key={`${name}-${item.value}`}>
              {item.otherInput ? (
                <FormControlLabel
                  value={DEFAULT_OTHER_VALUE}
                  control={<Radio name={OTHER_RADIO_COCNTROL} />}
                  label={
                    <Box
                      display="flex"
                      flexDirection="row"
                      columnGap="6px"
                      alignItems="center"
                    >
                      <Typography fontSize="14px">
                        {item.text || 'その他'}
                      </Typography>
                      <TextField
                        value={otherValue}
                        size="small"
                        name={OTHER_INPUT_CONTROL}
                        disabled={isDisableOther}
                        sx={{ width: item.width ? item.width : 'inherit' }}
                        onChange={(e) => {
                          setOtherValue(e.target.value);
                          handleValueChange(e);
                        }}
                      />
                    </Box>
                  }
                />
              ) : (
                <FormControlLabel
                  value={item.value}
                  label={item.text}
                  disabled={item.disabled}
                  control={<Radio />}
                />
              )}
            </div>
          ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FormRadioInput;
