import { setEndDate, setStartDate } from '@/store/comment';

export const handleStartDateChange = (
  date: Date | null,
  dispatch: (action: any) => void
) => {
  if (date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedDate = `${year}. ${month}. ${day} ${hours}:${minutes}`;
    dispatch(setStartDate(formattedDate));
  } else {
    dispatch(setStartDate(null));
  }
};

export const handleEndDateChange = (
  date: Date | null,
  dispatch: (action: any) => void
) => {
  if (date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedDate = `${year}. ${month}. ${day} ${hours}:${minutes}`;
    dispatch(setEndDate(formattedDate));
  } else {
    dispatch(setEndDate(null));
  }
};

export const formatDate = (date: Date | null): string => {
  if (!date) return '';
  return date
    .toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    .replace(/\./g, '. ')
    .replace(',', '');
};
