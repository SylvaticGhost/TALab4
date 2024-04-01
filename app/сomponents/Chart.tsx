import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../interfaces/main'

export const Chart:React.FC<ChartProps|undefined> = ({data}) => {
    return (
        <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[0, 100]}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="average" stroke="#8884d8" activeDot={{ r: 10 }} />
        </LineChart>
    );
};

export default Chart;
