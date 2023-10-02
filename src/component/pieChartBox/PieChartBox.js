import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

import './pieChartBox.scss';


const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];

const PieChartBox = ()=>{
    return(
        <div className="pieChartBox">
            <h2>Leads by Source</h2>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }}
                        />
                        <Pie data={data}
                            cx={120}
                            cy={120}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value" >
                            {
                                data.map(item =>(
                                    <Cell key={item.name} fill={item.color} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {
                    data.map(item => (
                        <div key={item.name} className="option">
                            <div className="title">
                                <div className="dot" style={{background: item.color}}></div>
                                <div>{ item.name }</div>
                            </div>
                            <span>{ item.value }</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PieChartBox;