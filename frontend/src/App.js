import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function App() {
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push({ name: i, value: Math.floor(Math.random() * 100) });
    }
    setData(arr);
    setSorting(false);
  };

  const bubbleSort = async () => {
    setSorting(true);
    try {
        const response = await fetch('http://localhost:5000/sort', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ array: data }),
        });

        if (response.ok) {
            const sortedArray = await response.json();
            setData(sortedArray);
        } else {
            console.error('Server response was not ok.');
        }
    } catch (error) {
        console.error('There was an error sorting the array:', error);
    }
    setSorting(false);
  };

  return (
    <div style={{ margin: 'auto', width: '80%', paddingTop: '20px' }}>
      <button onClick={resetArray} disabled={sorting}>Neues Array generieren</button>
      <button onClick={bubbleSort} disabled={sorting}>Bubble Sort</button>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
