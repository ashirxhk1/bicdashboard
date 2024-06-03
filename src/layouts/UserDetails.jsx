import React,{useEffect, useState} from 'react'
import ReactApexChart from "react-apexcharts"
import { useParams } from 'react-router-dom'
import { fetchuserbyid } from '../features/userApis'
import { Col,Card,CardTitle,Table,CardBody} from 'reactstrap'

const UserDetails = () => {
  const param = useParams()
  const [userDetails,setUserDetails] = useState([])
  const getUser = async () => {
    const {data} = await fetchuserbyid(param.id)
    setUserDetails(data)
  }

  useEffect(() => {
    getUser()
  },[])
  // console.log(userDetails?.counts);
    const [usergraph,setUserGraph] = useState( {
          
        series: [ Number(userDetails?.counts?.good), Number(userDetails?.counts?.average), Number(userDetails?.counts?.bad)],
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
                    return Number(userDetails?.counts?.total)
                  }
                }
              }
            }
          },
          labels: [ 'Good', 'Average', 'Bad'],
        },
      
      
      })
      useEffect(() => {
        if (userDetails?.counts) {
          setUserGraph((pre) => ({
            ...pre,
            series: [
              Number(userDetails?.counts?.good),
              Number(userDetails?.counts?.average),
              Number(userDetails?.counts?.bad)
            ],
            options:{
              ...pre,
              plotOptions:{
                radialBar:{
                  dataLabels:{
                    ...pre,
                    total:{
                      ...pre,
                      formatter: function (w) {
                        return Number(userDetails?.counts?.total)
                      }
                    }
                  }
                }
              }
            },
          }));
        }
      }, [userDetails]);
  return (
    <div>
      <ReactApexChart options={usergraph.options} series={usergraph.series} type="radialBar" height={350} />
      <div>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0 fw-bold">
            User : {userDetails?.user?.name}
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Lead ID</th>
                  <th>Evaluated by</th>
                  <th>Agent Name</th>
                  <th>Team Leader</th>
                  <th>Lead Source</th>
                  <th>User Rating</th>
                  <th>Lead Status</th>
                  <th>Escalation Severity</th>
                  <th>Issue Identification</th>
                  <th>Escalation Action</th>
                  <th>Additional successrmation</th>
                  <th>Audio</th>
                </tr>
              </thead>
              <tbody style={{overflowX:'scroll'}}>
                {userDetails?.user?.escalationdetail.map((val,index) => {
                  var url = val?.audio.replace(/\\/g, "/");
                  return(
                  <tr style={{overflowX:'hidden'}}>
                    <th scope="row">{index+1}</th>
                    <td>{val?.useremail}</td>
                    <td>{val?.leadID}</td>
                    <td>{val?.evaluatedby}</td>
                    <td>{val?.agentName}</td>
                    <td>{val?.teamleader}</td>
                    <td>{val?.leadsource}</td>
                    <td>{val?.userrating}</td>
                    <td>{val?.leadstatus}</td>
                    <td>{val?.escalationseverity}</td>
                    <td>{val?.issueidentification}</td>
                    <td>{val?.escalationaction}</td>
                    <td>{val?.additionalsuccessrmation}</td>
                    <td>
                      <audio controls>
                          <source src={`http://localhost:8000/${url}`} type="audio/mpeg" />
                      </audio>
                    </td>
                  </tr>
                )})}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      </div>
    </div>
  )
}

export default UserDetails
