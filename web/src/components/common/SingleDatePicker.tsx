import { RootState } from '@/store';
import { setAnnouncementDate } from '@/store/comment';
import { body4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { CSSProperties } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import calendarIcon from '../../assets/calander.png';

interface SingleDatePickerProps {
  placeholder: string;
  style?: CSSProperties;
}

export const SingleDatePicker = ({
  placeholder,
  style,
}: SingleDatePickerProps) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state: RootState) => state.dates?.announcementDate
  );

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더합니다.
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      const formattedDate = `${year}. ${month}. ${day} ${hours}:${minutes}`;
      dispatch(setAnnouncementDate(formattedDate));
    } else {
      dispatch(setAnnouncementDate(null));
    }
  };

  return (
    <Container style={style}>
      <Icon src={calendarIcon} alt="calendar" />
      <DatePickerWrapper>
        <DatePicker
          selected={selectedDate ? new Date(selectedDate) : null} // Redux 상태를 Date 객체로 변환
          onChange={handleDateChange}
          placeholderText={placeholder}
          dateFormat="yyyy. MM. dd HH:mm"
          showTimeSelect
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
