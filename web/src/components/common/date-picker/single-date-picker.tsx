import calendarImg from '@/assets/calander.png';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { SignleDatePickerWrapper } from './single-date-picker.styles';

import 'react-datepicker/dist/react-datepicker.css';

type SignleDatePickerProps = {
  value: string;
  onChange: (dateString: string) => void;
  className?: string;
};

export const SignleDatePicker = ({
  value,
  onChange,
  className,
}: SignleDatePickerProps) => {
  const [selected, setSelected] = useState<Date | null>(null);

  useEffect(() => {
    if (value) {
      setSelected(new Date(value));
    }
  }, [value]);

  const handleChange = (date: Date | null) => {
    if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      const dateString = `${year}. ${month}. ${day} ${hours}:${minutes}`;
      setSelected(date);
      onChange(dateString);
    } else {
      setSelected(null);
      onChange('');
    }
  };

  return (
    <SignleDatePickerWrapper className={className}>
      <div className="date-box">
        {selected ? null : (
          <img src={calendarImg} alt="calendar" className="calendar" />
        )}
        <DatePicker
          selected={selected}
          onChange={handleChange}
          placeholderText="날짜 선택"
          showTimeSelect
          dateFormat={'yyyy-MM-dd HH:mm'}
        />
      </div>
    </SignleDatePickerWrapper>
  );
};
