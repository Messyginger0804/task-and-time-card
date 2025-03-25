import React, { useState } from 'react';
import DayRow from './components/DayRow';

const App = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const taskOptions = [
    "Meetings",
    "Coding",
    "Design Work",
    "Support",
    "Break",
    "Research",
    "Admin"
  ];

  const [totals, setTotals] = useState({});

  const handleTotalChange = (day, total) => {
    setTotals((prev) => ({ ...prev, [day]: total }));
  };

  const totalHours = Object.values(totals).reduce((sum, val) => sum + val, 0);

  console.log(totalHours)

  return (
    <div className="bg-gray-100 font-['Roboto'] min-h-screen">
      {/* Header Banner */}
      <div className="bg-blue-800 text-white text-center py-3">
        <h1 className="text-lg font-semibold">Need More Than a Calculator?</h1>
        <p className="text-sm">Let Virtual TimeClock automate your employee time tracking.</p>
        <button className="mt-2 bg-yellow-400 text-blue-900 px-4 py-1 rounded font-semibold">Free Trial</button>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto mt-10 bg-white p-6 shadow-md rounded">
        <h2 className="text-2xl font-bold text-center mb-1">Free Time Card Calculator</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Work hours calculator in <a href="#" className="text-blue-600 underline">decimal format</a>.
        </p>

        {/* Name and Date Inputs */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
          <input type="text" placeholder="Name" className="border p-2 flex-1 rounded" />
          <input type="text" placeholder="Dates" className="border p-2 flex-1 rounded" />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-red-700 text-white">
              <tr>
                <th className="p-2">Day</th>
                <th className="p-2">Starting Time</th>
                <th className="p-2">Ending Time</th>
                <th className="p-2">Break Deduction</th>
                <th className="p-2">Task</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {days.map((day) => (
                <DayRow key={day} day={day} taskOptions={taskOptions} onTotalChange={handleTotalChange} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Hours Row */}
        <div className="text-right text-lg mt-4 font-semibold">
          Total Hours: <span className="text-gray-700">{totalHours.toFixed(2)}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="bg-green-600 text-white px-4 py-2 rounded">PRINT</button>
          <button className="bg-gray-300 px-4 py-2 rounded">CALCULATE</button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded">CLEAR ALL</button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded">Support the Calculator</button>
        </div>
      </div>
    </div>
  );
};

export default App;
