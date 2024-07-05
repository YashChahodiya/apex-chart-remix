import React, { useEffect, useState } from 'react'

export default function piechart() {
const [Apexchart,setApexchart] : any = useState();




useEffect(()=>{
    import("react-apexcharts").then( (d)=> setApexchart(() => d.default) )
},[])


  return !Apexchart ? <></> : < Apexchart 
  options= {
    {
      chart: {
        type: 'pie'
      },
    }
    }
    
    series = {
     [{
        name: 'sales',
        data: [30,40,35,50]
      },
      {
        name: 'total',
        data: [30,40,35,50,49]
      },
    ]
    }
  
   height ={700}
   width={1000}


   type="pie"

   
  /> ;
}
