import React,{useState} from 'react'
import ReactApexChart from "react-apexcharts"

const UserDetails = () => {
    const [usergraph,setUserGrapht] = useState( {
          
        series: [44, 55, 67, 83],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    return 249
                  }
                }
              }
            }
          },
          labels: ['No Answered', 'Answered', 'Busy', 'Failed'],
        },
      
      
      })
  return (
    <div>
      <ReactApexChart options={usergraph.options} series={usergraph.series} type="radialBar" height={350} />
    </div>
  )
}

export default UserDetails
