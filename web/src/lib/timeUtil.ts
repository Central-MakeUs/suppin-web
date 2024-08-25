import { AppDispatch } from '@/store';
import { setEndDate, setStartDate } from '@/store/comment';

export const handleStartDateChange = (
  date: Date | null,
  dispatch: AppDispatch
) => {
  if (date && !isNaN(date.getTime())) {
    // 유효한 날짜인지 확인
    const formattedDate = formatDate(date);
    dispatch(setStartDate(formattedDate));
  } else {
    dispatch(setStartDate(null));
  }
};

export const handleEndDateChange = (
  date: Date | null,
  dispatch: AppDispatch
) => {
  if (date && !isNaN(date.getTime())) {
    // 유효한 날짜인지 확인
    const formattedDate = formatDate(date);
    dispatch(setEndDate(formattedDate));
  } else {
    dispatch(setEndDate(null));
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
