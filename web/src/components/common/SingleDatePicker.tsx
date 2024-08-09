import { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { body4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import calendarIcon from '../../assets/calander.png';

interface SingleDatePickerProps {
  placeholder: string;
}

export const SingleDatePicker = ({ placeholder }: SingleDatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date || undefined);
  };

  return (
    <Container>
      <Icon src={calendarIcon} alt="calendar" />
      <DatePickerWrapper>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText={placeholder}
          dateFormat="yyyy. MM. dd"
        />
      </DatePickerWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${COLORS.Gray5};
  border-radius: 10px;
  background-color: ${COLORS.Gray6};
  padding: 10px;
  width: 100%;
  height: 46px;
  margin-bottom: 40px;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

const DatePickerWrapper = styled.div`
  flex: 1;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  input {
    ${body4Style}
    color: ${COLORS.Gray2};
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
  }
`;
