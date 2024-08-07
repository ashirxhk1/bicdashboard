import React,{useEffect, useState} from 'react'
import ReactApexChart from "react-apexcharts"
import { useNavigate, useParams } from 'react-router-dom'
import { fetchuserbyid } from '../features/userApis'
import { Col,Card,CardTitle,Table,CardBody} from 'reactstrap'
import Loader from './loader/Loader'

const UserDetails = () => {
  const param = useParams()
  const navigate = useNavigate()
  const [isLoading,setIsLoading] = useState(false)
  const [userDetails,setUserDetails] = useState([])
  const [audioUrls, setAudioUrls] = useState([]);
  const [options, setOptions] = useState({

    series: [{
      name: "Ratings",
  }],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Evaluated User Ratings',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5

      series: [{
        name: "Ratings",
      }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: true
        },
        toolbar:{
          show:true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Evaluated User Ratings',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis:{
        labels:{
          show:false,
        }
      }
    },

    xaxis: {
      // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels:{
        show:false
      }
    }
  },



  });
  
  const getUser = async () => {
    setIsLoading(true)
    const {data} = await fetchuserbyid(param.id)
    if(data.success){
      setIsLoading(false)

      setUserDetails(data)
    }

  
    }
    setUserDetails(data)

  }

  useEffect(() => {
    getUser()
  },[])
  // console.log(userDetails?.counts);
    const [usergraph,setUserGraph] = useState({ 
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
          const userRating = userDetails?.user?.evaluationRating?.map(rating => rating?.rating);
          // const dates = userDetails?.user?.evaluationRating?.map((_, index) => new Date().getTime() + index * 86400000);
          // console.log(userRating,dates);
          setOptions((pre) => ({
            ...pre,
            series:[
              {data:userRating.map((rating) => (rating))}
            ],
          }))
        }
        if(userDetails?.user?.escalationdetail){
          const fetchAudioUrls = async () => {
            const urls = await Promise.all(
              userDetails?.user?.escalationdetail?.map(async (val) => {
                var url = val?.audio?.replace("uploads\\", "");
                const response = await fetch(`https://backendbic.onrender.com/audio/${url}`);
                if (response) {
                  return response?.url;
                } else {
                  return null;
                }
              })
            );
            setAudioUrls(urls);
          };
          fetchAudioUrls();
        }
    }, [userDetails]);
    // https://backendbic.onrender.com
    const handlerUserReport = (name) => {
      navigate(`/bi/agentReport/${name}`)
    }

  return (
    <div className='d-flex flex-column gap-3'>

      {isLoading ?  <div><Loader/></div> : 
      <>
        <div className='rounded' style={{backgroundColor:'#fff'}}><ReactApexChart options={usergraph?.options} series={usergraph?.series} type="radialBar" height={350} /></div>
        <div className='rounded p-3' style={{backgroundColor:'#fff'}}><ReactApexChart options={options?.options} series={options?.series} type="area" height={350} /></div>
        <div className='sc-none' style={{overflowX:'scroll'}} >
        <Col lg="12" style={{width:'max-content'}}>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0 fw-bold">
              User : {userDetails?.user?.name}
            </CardTitle>
            <CardBody>
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
                <tbody  style={{overflowX:'scroll'}} >
                  {userDetails?.user?.escalationdetail?.map((val,index) => {
                    return(
                    <tr style={{overflowX:'hidden',cursor:'pointer'}} key={index} onClick={() => handlerUserReport(val?.agentName)}>
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
                        {audioUrls[index] ? (
                            <audio controls>
                              <source src={audioUrls[index]} type="audio/mpeg" />
                            </audio>
                          ) : (
                            'Loading...'
                          )}
                      </td>
                    </tr>
                  )})}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        </div>
      </>
      }
      {isLoading ? <div style={{width:'100%',display:'flex',justifyContent:'center'}}><Loader/></div> :
      <> 
      <div className='rounded' style={{backgroundColor:'#fff'}}><ReactApexChart options={usergraph?.options} series={usergraph?.series} type="radialBar" height={350} /></div>
      <div className='rounded p-3' style={{backgroundColor:'#fff'}}><ReactApexChart options={options?.options} series={options?.series} type="area" height={350} /></div>
      <div className='sc-none' style={{overflowX:'scroll'}} >
      <Col lg="12" style={{width:'max-content'}}>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0 fw-bold">
            User : {userDetails?.user?.name}
          </CardTitle>
          <CardBody>
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
              <tbody  style={{overflowX:'scroll'}} >
                {userDetails?.user?.escalationdetail?.map((val,index) => {
                  return(
                  <tr style={{overflowX:'hidden',cursor:'pointer'}} key={index} onClick={() => handlerUserReport(val?.agentName)}>
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
                      {audioUrls[index] ? (
                          <audio controls>
                            <source src={audioUrls[index]} type="audio/mpeg" />
                          </audio>
                        ) : (
                          'Loading...'
                        )}
                    </td>
                  </tr>
                )})}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      </div>
      </>}

    </div>
  )
}

export default UserDetails
