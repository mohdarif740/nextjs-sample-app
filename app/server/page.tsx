import {connection} from "next/server";

const ServerPage = async()=>{
    await connection();
    // in pages router we use getServerSidePros 
    return(
        <>
        <div>
            <h1>Server Component</h1>
        </div>
        </>
    )
}


export default ServerPage;