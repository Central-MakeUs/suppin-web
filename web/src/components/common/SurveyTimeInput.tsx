import { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { body4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import calendarIcon from '../../assets/calander.png';
interface SurveyTimeInputProps {
  placeholderStart: string;
  placeholderEnd: string;
}

export const SurveyTimeInput = ({
  placeholderStart,
  placeholderEnd,
}: SurveyTimeInputProps) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  return (
    <Container>
      <Icon src={calendarIcon} alt="calendar" />
      <DatePickerWrapper>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          placeholderText={placeholderStart}
          dateFormat="yyyy. MM. dd"
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </DatePickerWrapper>
      <Text>~</Text>
      <DatePickerWrapper>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          placeholderText={placeholderEnd}
          dateFormat="yyyy. MM. dd"
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </DatePickerWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.Gray5};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  width: 314px;
  height: 46px;
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

const Text = styled.span`
  ${body4Style}
  color: ${COLORS.Gray2};
  margin: 0 10px;
`;
