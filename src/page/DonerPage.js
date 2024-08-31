import React, { useEffect, useState } from 'react'
import CardsComp from '../component/CardsComp'
import axios from 'axios';

function DonerPage() {
    const [data,setData] = useState([])

    // useEffect(()=>{
    //     axios.get('https://api.coincap.io/v2/assets')
    //     .then(function (response) {
    //       setData(response.data.data)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // })

    return (
        <>
            {
                Array.isArray(data) && data.length > 0 ? 
                    data.map((val,index)=>{
                        return(
                            <CardsComp key={val.id} 
                                name={val.name}
                                bloodgroup='O+'
                                mob='9929947074'
                                donatedNoOfTime={val.rank}
                                lastDonatedDate='27-08-2024'
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

                            <CardsComp key={2} 
                                name='Av**** S*****' 
                                bloodgroup='A+'
                                mob='86*******'
                                donatedNoOfTime='2'
                                lastDonatedDate='**-**-****'
                            />

                            <CardsComp key={3} 
                                name='Ni**** J*****' 
                                bloodgroup='B-'
                                mob='96*******'
                                donatedNoOfTime='1'
                                lastDonatedDate='**-**-****'
                            />
                        </>
                    )
            }
            
           
        </>
  )
}

export default DonerPage