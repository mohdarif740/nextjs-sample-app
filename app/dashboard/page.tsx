'use client'
const Dashboard = ()=>{
const sayHello =()=>{
    'use server';
}
    return(
        <>
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={sayHello}>Save hello</button>
        </div>
        </>
    )
}
export default Dashboard;