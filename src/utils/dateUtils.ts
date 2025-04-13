
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
};

export const formatTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  return date.toLocaleTimeString('en-US', options);
};

export const getDayOfWeek = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  return date.toLocaleDateString('en-US', options);
};

export const getCurrentDateTimeInfo = (): {
  formattedDate: string;
  formattedTime: string;
  dayOfWeek: string;
} => {
  const now = new Date();
  
  return {
    formattedDate: formatDate(now),
    formattedTime: formatTime(now),
    dayOfWeek: getDayOfWeek(now)
  };
};
