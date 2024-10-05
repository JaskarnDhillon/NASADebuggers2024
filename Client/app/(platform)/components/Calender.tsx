import { useState, useEffect } from 'react';
import { format, addWeeks, startOfWeek, addDays, isSameDay } from 'date-fns';
import Image from 'next/image';

const Calender = () => {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date()));
  const [currentDay, setCurrentDay] = useState(new Date()); 

  const handleNextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1));
  };

  const handlePreviousWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, -1));
  };

  const renderWeekDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = addDays(currentWeek, i);
      days.push(
        <div
          key={i}
          className={`day ${isSameDay(day, currentDay) ? 'text-[#86a0ff] ' : ''} p-2  m-1 flex gap-2 flex-col items-center rounded`}
        >
          <span className='uppercase'>{format(day, 'EEE')}</span> 
          <span>{format(day, 'd')}</span> 
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar-container  text-white flex flex-col items-center ">
      <div className="header flex items-center justify-between w-full mb-4">
      <h3 className="text-xl ">
          {format(currentWeek, 'MMMM yyyy')}
        </h3>
        <div className="flex gap-1">
            <button onClick={handlePreviousWeek} className="p-1">
                <Image src="/arrow-prev.svg" alt="" width={25} height={25}/>
            </button>
            <button onClick={handleNextWeek} className="p-1 ">
                <Image src="/arrow-next.svg" alt="" width={25} height={25}/>
            </button>
        </div>
        
      </div>

      <div className="week-view grid bg-[#28292C] grid-cols-7 py-3 px-2 rounded-[15px] gap-2">
        {renderWeekDays()}
      </div>
    </div>
  );
};

export default Calender;
