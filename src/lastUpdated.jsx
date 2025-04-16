import { useEffect, useState } from "react";

function LastUpdated({ timestamp }) {
  const [formatted, setFormatted] = useState('');

  useEffect(() => {
    if (!timestamp){
      return console.log('No timestamp provided to <LastUpdated /> component')
    }

    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.toLocaleString('en-AU', { month: 'long' });
    const suffix = getDaySuffix(day);
    const time = date.toLocaleString('en-AU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    const display = `Last updated at ${day}<sup>${suffix}</sup> ${month} ${time}`;
    setFormatted(display);
  }, [timestamp]);

  return (
    <div dangerouslySetInnerHTML={{ __html: formatted }} />
  );
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

export default LastUpdated;
