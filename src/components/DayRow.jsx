import React, { useEffect, useState } from 'react';

const DayRow = ({ day, taskOptions, onTotalChange }) => {
  const [startHour, setStartHour] = useState(8);
  const [endHour, setEndHour] = useState(5);
  const [breakHour, setBreakHour] = useState(1);

  const calculateTotal = () => {
    const total = endHour - startHour - breakHour;
    return total > 0 ? total : 0;
  };

  // 🔁 Notify parent when total changes
  useEffect(() => {
    const total = calculateTotal();
    onTotalChange(day, total);
  }, [startHour, endHour, breakHour]);

  return (
    <tr className="text-center border-b">
      <td className="p-2 font-semibold">{day}</td>
      <td className="p-2">
        <input
          type="number"
          value={startHour}
          onChange={(e) => setStartHour(Number(e.target.value))}
          className="w-12 border rounded p-1 text-center"
        />
      </td>
      <td className="p-2">
        <input
          type="number"
          value={endHour}
          onChange={(e) => setEndHour(Number(e.target.value))}
          className="w-12 border rounded p-1 text-center"
        />
      </td>
      <td className="p-2">
        <input
          type="number"
          value={breakHour}
          onChange={(e) => setBreakHour(Number(e.target.value))}
          className="w-12 border rounded p-1 text-center"
        />
      </td>
      <td className="p-2">
        <select className="border rounded p-2 w-full bg-white">
          {taskOptions.map((task, i) => (
            <option key={i} value={task}>
              {task}
            </option>
          ))}
        </select>
      </td>
      <td className="p-2">{calculateTotal().toFixed(2)}</td>
    </tr>
  );
};

export default DayRow;
