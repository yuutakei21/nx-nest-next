import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(tz);

export type UIDatePickerProps = DatePickerProps<Dayjs> & {
  mode?: 'mobile' | 'desktop';
};

function UIDatePicker(props: UIDatePickerProps) {
  const dateFormat = 'YYYY/MM/DD';

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className="ui-date-picker"
        timezone="UTC"
        sx={{
          width: '180px',
          '.MuiPickersCalendarHeader-iconButton': {
            backgroundColor: 'black',
          },
          ...props.sx,
        }}
        slots={{ openPickerIcon: CalendarMonthIcon }}
        slotProps={{
          textField: {
            size: 'small',
          },
        }}
        format={dateFormat}
        {...props}
      />
    </LocalizationProvider>
  );
}

export default UIDatePicker;
