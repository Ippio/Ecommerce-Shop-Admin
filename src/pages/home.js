import Loading from '../components/Loading'
import StatisticsCard from './Home/StatisticsCard'
import { useFetch } from "../hooks/useFetch"
import NotFound from './404'
import Featured from './Home/Featured'
import Chart from './Home/Chart'
import "./Home/home.scss";
// import NotificationModal from '../components/NotificationModel'
const Home = () => {
    const { data, loading } = useFetch(`http://localhost:5001/AdminHome`)
    if (loading) return <Loading />
    if (!data) return (<NotFound />)
    return (
        <div className='home'>
            <div className='homeContainer'>
                <div className='widgets'>
                    <StatisticsCard data={data} />
                </div>
                {/* <NotificationModal show={true}/> */}
                <div className="charts">
                    <Featured totalSales={data.totalSales}/>
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
            </div>
        </div>
    )
}

export default Home