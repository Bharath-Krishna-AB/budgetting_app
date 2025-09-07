//rrd imports
import { useLoaderData, } from 'react-router-dom'


//helper function
import { fetchData } from '../helpers'
import Intro from '../comonents/Intro'

//loader 
export function dashboardLoader() {
    const userName = fetchData("userName")
    return { userName}
}


const Dashboard = () =>{
    const {userName} = useLoaderData()
  return (
    <>
        {userName ? (<p>{userName}</p>) : (<Intro />)}
    </>
  )
}

export default Dashboard