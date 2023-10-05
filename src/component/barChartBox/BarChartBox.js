
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

import './barChartBox.scss';

const BarChartBox = (props)=>{

    return(
        <div className='barChartBox'>
            
            <h2>{ props.title }</h2>
            <div className='charts'>
                <ResponsiveContainer width="99%" height={100}>
                    <BarChart data={props.chartData}>
                    <Tooltip
                        contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                        labelStyle={{ display: "none" }}
                        cursor={{fill:"none"}}
                        />
                        <Bar dataKey={props.dataKey} fill={props.color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarChartBox;