import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeField, TimeFieldProps } from '@mui/x-date-pickers/TimeField';
import dayjs, { Dayjs } from 'dayjs';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(tz);

export type UITimeFieldProps = TimeFieldProps<Dayjs> & {
  mode?: 'mobile' | 'desktop';
};

function UITimeField(props: UITimeFieldProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimeField
        className="ui-time-field"
        timezone="UTC"
        sx={{ width: '80px' }}
        slotProps={{
          textField: {
            size: 'small',
            placeholder: ':',
          },
        }}
        inputProps={{
          sx: {
            textAlign: 'center',
          },
        }}
        format="HH:mm"
        {...props}
      />
    </LocalizationProvider>
  );
}

export default UITimeField;
