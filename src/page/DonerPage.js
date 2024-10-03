import React, { useEffect, useState } from 'react'
import CardsComp from '../component/CardsComp'
import axios from 'axios';
import {useAuth} from '../page/AuthProvider'
const URl = "http://localhost:8081/doner/list";

function DonerPage() {
    const [data,setData] = useState([])
    const {isLogin} = useAuth();

    useEffect(() => {
        if (isLogin) {
            console.log(isLogin);
            axios.get(URL)
                .then(function (response) {
                    console.log(response.data);
                    setData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
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
                            <CardsComp key={1} 
                                name='Ma**** S*****' 
                                bloodgroup='O+'
                                mob='99*******'
                                donatedNoOfTime='3'
                                lastDonatedDate='**-**-****'
                            />
                        </>
                    )
            }
            
           
        </>
  )
}

export default DonerPage