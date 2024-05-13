import React,{useState} from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import { LoginApi } from '../features/Login';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import Cookies from 'universal-cookie';
const cookie = new Cookies()
function Login() {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const nav = useNavigate()
  async function clii(){
    let data = {email,password}
    const res = await LoginApi(data)
    
    if(res.data.success === true){
      localStorage.setItem("userData",
      JSON.stringify({email:res.data.user.email,id:res.data.user._id}))
      cookie.set('token',res.data.token)
      nav('bi/profile')
    }
    // nav('bi/profile')
  }
  
  // <Navigate to="/starter#/starter" />
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(56, 100%, 50%)'}}>
            Bright Idea's <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>Communication</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass w-75'>
            <MDBCardBody className='p-5'>

              

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4'          type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />

              <div className='d-flex justify-content-start mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md' onClick={clii}>Sign-in</MDBBtn>

              <div className="text-center">

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;