import { RootState } from '@/store';
import { setAnnouncementDate } from '@/store/comment';
import { body4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { CSSProperties, useState } from 'react';
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

  const [date, setDate] = useState<Date | undefined>(
    selectedDate ? new Date(selectedDate) : undefined
  );

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = formatDate(date);
      dispatch(setAnnouncementDate(formattedDate));
      setDate(date); // 선택된 날짜를 상태로 저장
    } else {
      dispatch(setAnnouncementDate(null));
      setDate(undefined); // 날짜를 초기화
    }
  };

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 120); // 오늘부터 120일 후

  return (
    <Container style={style}>
      <Icon src={calendarIcon} alt="calendar" />
      <DatePickerWrapper>
        <DatePicker
          selected={date} // 상태로 관리되는 날짜를 사용
          onChange={handleDateChange}
          placeholderText={placeholder}
          dateFormat="yyyy-MM-dd HH:mm"
          showTimeSelect
          minDate={new Date()} // 시작일은 오늘부터 선택 가능
          maxDate={maxDate} // 오늘부터 3달 후까지만 선택 가능
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
  padding: 15px;
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
  margin-left: 10px;

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
