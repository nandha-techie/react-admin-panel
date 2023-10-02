import { Link } from 'react-router-dom';
import { ResponsiveContainer, Line, LineChart, Tooltip,  } from 'recharts';
import './chartBox.scss';


const ChartBox = (props)=>{
    return(
        <div className='chartBox'>
            <div className='boxInfo'>
                <div className='title'>
                    <img src={ `images${ props.icon } `} alt=""/>
                    <span>{ props.title }</span>
                </div>
                <div>{ props.number }</div>
                <Link to="/" style={{color: props.color}}>view all</Link>
            </div>
            <div className='chartInfo'>
                <div className='chart'>
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 70 }}
                            />
                            <Line type="monotone" dot={false} dataKey={props.dataKey} stroke={props.color} strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='texts'>
                    <span className='percentage' style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>{ props.percentage }%</span>
                    <span className="duration">this month</span>
                </div>
            </div>
            
        </div>
    )
}
export default ChartBox;