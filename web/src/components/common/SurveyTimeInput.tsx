import { RootState } from '@/store';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { body4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { CSSProperties } from 'react';
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

  const startDate = useSelector((state: RootState) => state.dates?.startDate);
  const endDate = useSelector((state: RootState) => state.dates?.endDate);

  return (
    <Container style={style}>
      <div className="time-conatiner">
        <Icon src={calendarIcon} alt="calendar" />
        <DatePickerWrapper>
          <DatePicker
            selected={startDate ? new Date(startDate) : null} // Redux에서 상태를 받아서 Date 객체로 변환
            onChange={date => handleStartDateChange(date, dispatch)}
            placeholderText={placeholderStart}
            dateFormat="yyyy. MM. dd HH:mm"
            showTimeSelect
            selectsStart
            startDate={startDate ? new Date(startDate) : undefined}
            endDate={endDate ? new Date(endDate) : undefined}
          />
        </DatePickerWrapper>
      </div>
      <Text>~</Text>
      <div className="time-conatiner">
        <DatePickerWrapper>
          <DatePicker
            selected={endDate ? new Date(endDate) : null} // Redux에서 상태를 받아서 Date 객체로 변환
            onChange={date => handleEndDateChange(date, dispatch)}
            placeholderText={placeholderEnd}
            dateFormat="yyyy. MM. dd HH:mm"
            showTimeSelect
            selectsEnd
            startDate={startDate ? new Date(startDate) : undefined}
            endDate={endDate ? new Date(endDate) : undefined}
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

  .time-conatiner {
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
    text-align: center;
  }
`;

const Text = styled.span`
  ${body4Style}
  color: ${COLORS.Gray2};
  margin: 0 10px;
`;
