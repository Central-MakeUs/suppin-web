import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { body4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { CSSProperties, useState } from 'react';
import calendarIcon from '../../assets/calander.png';
import { handleEndDateChange, handleStartDateChange } from '@/lib/timeUtil';

interface SurveyTimeInputProps {
  placeholderStart: string;
  placeholderEnd: string;
  style?: CSSProperties;
}

export const SurveyTimeInput = ({
  placeholderStart,
  placeholderEnd,
  style,
}: SurveyTimeInputProps) => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState<Date | undefined>(undefined); // 기본값 오늘
  const [endDate, setEndDate] = useState<Date | undefined>(undefined); // 기본값 오늘

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 120); // 오늘부터 120일 후

  const handleStartDate = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      handleStartDateChange(date, dispatch);
      if (endDate && date > endDate) {
        setEndDate(date);
        handleEndDateChange(date, dispatch);
      }
    }
  };

  const handleEndDate = (date: Date | null) => {
    if (date) {
      setEndDate(date);
      handleEndDateChange(date, dispatch);
    }
  };

  return (
    <Container style={style}>
      <div className="time-container">
        <Icon src={calendarIcon} alt="calendar" />
        <DatePickerWrapper>
          <DatePicker
            selected={startDate}
            onChange={handleStartDate}
            placeholderText={placeholderStart}
            dateFormat="yyyy-MM-dd HH:mm"
            showTimeSelect
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()} // 시작일은 오늘부터 선택 가능
            maxDate={maxDate} // 오늘부터 3달 후까지만 선택 가능
          />
        </DatePickerWrapper>
      </div>
      <Text>~</Text>
      <div className="time-container">
        <DatePickerWrapper>
          <DatePicker
            selected={endDate}
            onChange={handleEndDate}
            placeholderText={placeholderEnd}
            dateFormat="yyyy-MM-dd HH:mm"
            showTimeSelect
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate} // 종료일은 시작일 이후로 선택 가능
            maxDate={maxDate} // 오늘부터 7일 후까지만 선택 가능
          />
        </DatePickerWrapper>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${COLORS.Gray5};
  background-color: ${COLORS.Gray6};
  padding: 12px 15px;
  width: 100%;
  height: 46px;

  .time-container {
    display: flex;
    align-items: center;
  }
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

  .react-datepicker__input-container,
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__navigation--next--with-time:not(
      .react-datepicker__navigation--next--with-today-button
    ) {
    right: 2px;
  }
  .react-datepicker-popper {
    left: 50% !important;
    transform: translateX(-50%) !important;
    will-change: transform;
    margin-top: 1rem;
  }

  .react-datepicker__time-container {
    width: 100% !important;
  }

  input {
    ${body4Style}
    color: ${COLORS.Gray2};
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 0px;
  }
`;

const Text = styled.span`
  ${body4Style}
  color: ${COLORS.Gray2};
  margin: 0 10px;
`;
