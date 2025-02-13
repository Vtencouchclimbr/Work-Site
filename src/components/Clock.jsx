import { useState, useEffect } from 'react';
import './Clock.css'; // Optional: for styling

const Clock = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM:SS (24-hour format)
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  // Format date as "Day, Month Date, Year"
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const day = days[time.getDay()];
  const month = months[time.getMonth()];
  const date = time.getDate();
  const year = time.getFullYear();
  const formattedDate = `${day}, ${month} ${date}, ${year}`;

  return (
    <div className="clock">
      <div className="time">
        {hours}:{minutes}:{seconds}
      </div>
      <div className="date">
        {formattedDate}
      </div>
    </div>
  );
};

export default Clock;