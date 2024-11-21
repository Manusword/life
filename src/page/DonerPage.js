import React, { useEffect, useState } from 'react'
import CardsComp from '../component/CardsComp'
import axios from 'axios';
import {useAuth} from '../page/AuthProvider'
import backendURL from "../page/backendUrl";
const URl = backendURL + "doner/list";

function DonerPage() {
    const [data,setData] = useState([])
    const {isLogin} = useAuth();

    useEffect(() => {
        if (isLogin) {
            axios.get(URl)
                .then(function (response) {
                    console.log('donel list');
                    setData(response.data);
                })
                .catch(function (error) {
                    //console.log(error);
                });
        }
    }, [isLogin]); 

    return (
        <>
            {
                Array.isArray(data) && data.length > 0 ? 
                //isLogin ? 
                    data.map((val,index)=>{
                        return(
                            <CardsComp key={val.id} 
                                name={val.fullname}
                                bloodgroup={val.blood}
                                mob={val.mobile}
                                donatedNoOfTime={val.userId}
                                lastDonatedDate={val.blood}
                            />
                        )
                    })
                :
                    (
                        <>
                           <h2>Doner List</h2>
                        </>
                    )
            }
            
           
        </>
  )
}

export default DonerPage