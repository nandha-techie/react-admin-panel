import TopBox from '../../component/topBox/TopBox';
import ChartBox from '../../component/chartBox/ChartBox';
import PieChartBox from '../../component/pieChartBox/PieChartBox.js';
import BigChartBox from '../../component/bigChartBox/BigChartBox.js'; 
import BarChartBox from '../../component/barChartBox/BarChartBox.js'; 

import './home.scss';
import { 
    chartBoxUser,
    chartBoxProduct,
    chartBoxConversion,
    chartBoxRevenue,
    barChartBoxVisit,
    barChartBoxRevenue
} from '../../data.js';

const Home = ()=>{
    return(
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className="box box4">
                <PieChartBox />
            </div>
            <div className="box box5">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="box box6">
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className="box box7">
                <BigChartBox />
            </div>
            <div className="box box8">
                <BarChartBox {...barChartBoxVisit} />
            </div>
            <div className="box box9">
                <BarChartBox {...barChartBoxRevenue} />
            </div>
        </div>
    )
}

export default Home;