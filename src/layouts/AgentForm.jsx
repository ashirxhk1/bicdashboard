import React, { useState } from 'react'
import { Input } from 'reactstrap'
import { evaluationApi } from '../features/userApis'
const AgentForm = () => {
  const [evaluation,setEvaluation] = useState({
    email:'',
    leadId:'',
    agentName:'',
    mod:'',
    teamleader:'',
    greetings:'',
    accuracy:'',
    building:'',
    presenting:'',
    closing:'',
    bonus:'',
    evaluationsummary:''
  })

  const handlerChangeEvl = (name,value) => {
    setEvaluation((pre) => ({
      ...pre,
      [name]:value
    }))
  }

  const handlerEscForm = async () => {
    if(
      evaluation.email.trim() === '' ||
      evaluation.leadId.trim() === '' ||
      evaluation.agentName.trim() === '' ||
      evaluation.mod.trim() === '' ||
      evaluation.teamleader.trim() === '' ||
      evaluation.greetings.trim() === '' ||
      evaluation.accuracy.trim() === '' ||
      evaluation.building.trim() === '' ||
      evaluation.presenting.trim() === '' ||
      evaluation.closing.trim() === '' ||
      evaluation.bonus.trim() === '' ||
      evaluation.evaluationsummary.trim() === ''
    ){
      alert("Please fill fields!")
      return
    }else{
      const getUser = JSON.parse(localStorage.getItem('userData'))
      const id = getUser.id
      evaluation._id = id
      const data = await evaluationApi(evaluation)
      if(data.data.success === true){
        setEvaluation({
          email:'',
          leadId:'',
          agentName:'',
          mod:'',
          teamleader:'',
          greetings:'',
          accuracy:'',
          building:'',
          presenting:'',
          closing:'',
          bonus:'',
          evaluationsummary:''
        })
        alert("Successfully Created!")
      }
    }
  }
  console.log(evaluation);
  return (
    <div className='d-flex justify-content-center'>
    <div className='w-50 bg-gray d-flex flex-column gap-3'>
        <div className='bg-light rounded d-flex justify-content-center flex-column align-items-center'>
            <h1 className='fw-bolder'>BRIGHT IDEA'S</h1>
            <p>COMMUNICATION</p>
        </div>
        <div className='bg-warning rounded d-flex justify-content-center flex-column '>
<div className='d-flex flex-start p-4'>
  <label>Enter your email: <br />
    <Input type="email" placeholder="Enter Your Email Here" value={evaluation.email}
     onChange={(e) => handlerChangeEvl('email',e.target.value)} />
  </label>
</div>

        </div>
        <div className='bg-warning rounded d-flex justify-content-center flex-column'>
        <div className='d-flex flex-start p-4'>
  <label>lead ID: <br />
    <Input type="text" placeholder="Enter Your Lead ID Here" value={evaluation.leadId} 
     onChange={(e) => handlerChangeEvl('leadId',e.target.value)}/>
  </label>
</div>
        </div>
            <div className='bg-warning rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label>Agent Name: <br />
        <Input type="text" placeholder="Enter Agent Name Here" value={evaluation.agentName}
          onChange={(e) => handlerChangeEvl('agentName',e.target.value)}/>
      </label>
    </div>
            </div>
            <div className='bg-warning rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
              <label>Team Leader: <br />
                <Input className='border-none' type="text" placeholder="Enter Your Name Here" value={evaluation.teamleader} 
                  onChange={(e) => handlerChangeEvl('teamleader',e.target.value)} />
              </label>
            </div>
            </div>
        <div className='bg-warning rounded d-flex justify-content-center flex-column'>
          <h3 className='p-4'>Mode of Communication</h3>
        <form class='bg-gray px-4'>
      <label className='d-flex align-items-center gap-2'><Input className='m-1' type='radio' name="Communication" value="Chat" checked={evaluation.mod==='Chat'} 
        onChange={(e) => handlerChangeEvl('mod',e.target.value)} defaultChecked/>Chat</label><br />
      <label className='d-flex align-items-center gap-2'><Input className='m-1' type='radio' name="Communication" value="Call"checked={evaluation.mod==='Call'}
        onChange={(e) => handlerChangeEvl('mod',e.target.value)}/>Call</label><br />
      <br/>
  </form>
        </div>
            {/* <div className='bg-warning rounded d-flex justify-content-center flex-column'>
              <h3 className='p-4'>Select The Team</h3>
              <form class='bg-gray p-4'>
                <label><Input className='m-1' type='radio' name="Team" value="ERC Dubai" defaultChecked
                  checked={evaluation.greetings}
                  onChange={(e) => handlerChangeEvl('greetings',e.target.value)}/>Fawad Ali (ERC Dubai)</label><br />
                <label><Input className='m-1' type='radio' name="Team" value="ERC Abu Dhabi" checked={evaluation.greetings}
                  onChange={(e) => handlerChangeEvl('greetings',e.target.value)}/>Muhammad Abdullah Akram (ERC Abu Dhabi)</label><br />
                <label><Input className='m-1' type='radio' name="Team" value="Dynamic" checked={evaluation.greetings}
                onChange={(e) => handlerChangeEvl('greetings',e.target.value)}/>Muhammad Abubakar (Dynamic)</label><br />
                <label><Input className='m-1' type='radio' name="Team" value="Jordan" checked={evaluation.greetings}
                onChange={(e) => handlerChangeEvl('greetings',e.target.value)}/>Yousef Almaani (Jordan)</label>
                <br/>
              </form>
            </div> */}
        <div className='bg-warning rounded d-flex justify-content-center flex-column'>
        <div className=' p-4'>    
          <h3>Greetings</h3>
          <p>Demonstrates enthusiasm and a positive tone throughout the call.</p>
  <label className='d-flex align-items-center gap-2'><Input className='m-2 radioIn' type="radio" id="Greetings" name="Greetings" value="uses" checked={evaluation.greetings==='uses'}
    onChange={(e) => handlerChangeEvl('greetings',e.target.value)} />Uses a professional and friendly greeting within the first 3 seconds, including the company name and their own name</label> <br />
<label className='d-flex align-items-center gap-2'><Input className='m-2 ' type="radio" id="Greetings" name="Greetings" value="mark" checked={evaluation.greetings==='mark'}
   onChange={(e) => handlerChangeEvl('greetings',e.target.value)} />Not upto the mark</label> <br />
</div>
        </div>
        <div className='bg-warning rounded d-flex justify-content-center flex-column'>
        <div className=' p-4'>    
          <h3>Accuracy & Compliance</h3>
          <p>Provides accurate and up-to-date secondaryrmation about the company's products or services, adhering to all relevant scripts and policies.</p>
  <label className='d-flex align-items-center gap-2'><Input className='m-2' style={{width:'16px'}} type="radio" id="Accuracy" name="Accuracy" value="questions" checked={evaluation.accuracy==='questions'}
    onChange={(e) => handlerChangeEvl('accuracy',e.target.value)} />Asks clear and concise questions to accurately identify the customer's needs or inquiries.</label> <br />
  <label className='d-flex align-items-center gap-2'><Input className='m-2' type="radio" id="Accuracy" name="Accuracy" value="mark" checked={evaluation.accuracy==='mark'}
    onChange={(e) => handlerChangeEvl('accuracy',e.target.value)} />Not upto the mark</label> <br />
</div>
        </div>
        <div className='bg-warning rounded d-flex justify-content-center flex-column'>
        <div className=' p-4'>    
          <h3>Building Rapport & Discovery</h3>
          <p>Identifies potential pain points or opportunities where the product/service can provide value to the customer.</p>
<label className='d-flex align-items-center gap-2'><Input className='m-2' style={{width:'25px'}} type="radio" id="Building" name="Building" value="skills" 
  onChange={(e) => handlerChangeEvl('building',e.target.value)} checked={evaluation.building==='skills'} />Demonstrates active listening skills and asks open-ended questions to understand the customer's needs and potential interest in the product/service.</label> <br />
<label className='d-flex align-items-center gap-2'><Input className='m-2' type="radio" id="Building" name="Building" value="mark" 
 onChange={(e) => handlerChangeEvl('building',e.target.value)} checked={evaluation.building==='mark'} />Not upto the mark</label> <br />
</div>
        </div>
        <div className='bg-warning rounded d-flex justify-content-center flex-column'>
        <div className=' p-4'>    
          <h3>Presenting Solutions & Making the Sale</h3>
          <p>Clearly and concisely presents the product/service features and benefits tailored to the customer's needs identified earlier.</p>
  <label className='d-flex align-items-center gap-2'><Input className='m-2' style={{width:'25px'}} type="radio" id="Presenting" name="Presenting" value="appointment" checked={evaluation.presenting==='appointment'} 
    onChange={(e) => handlerChangeEvl('presenting',e.target.value)} />Attempts to overcome objections professionally using established techniques and effectively guides the customer towards booking an appointment.</label> <br />
  <label className='d-flex align-items-center gap-2'><Input className='m-2' type="radio" id="Presenting" name="Presenting" value="mark" checked={evaluation.presenting==='mark'} 
    onChange={(e) => handlerChangeEvl('presenting',e.target.value)}/>Not upto the mark</label> <br />
</div>
        </div>
        <div className='bg-warning rounded d-flex justify-content-center flex-column'>
        <div className=' p-4'>    
          <h3>Call Closing & Securing Commitment</h3>
          <p>Confirms the customer's details and secures their commitment for the sale or appointment. Thanks the customer for their time and offers further assistance if needed.</p>
<label className='d-flex align-items-center gap-2'><Input className='m-2' style={{width:'25px'}} type="radio" id="Closing" name="Closing" value="Professionally" 
  checked={evaluation.closing==='Professionally'} onChange={(e) => handlerChangeEvl('closing',e.target.value)}/>Professionally summarizes key points discussed and clearly outlines the next steps, including the call to action (e.g., callback, appointment booking).</label> <br />
<label className='d-flex align-items-center gap-2'><Input className='m-2' type="radio" id="Closing" name="Closing" value="mark" 
checked={evaluation.closing==='mark'} onChange={(e) => handlerChangeEvl('closing',e.target.value)}/>Not upto the mark</label> <br />
</div>
        </div>
        <div className='bg-warning rounded d-flex justify-content-center flex-column'>
        <div className=' p-4'>    
          <h3>Bonus Point</h3>
  <label className='d-flex align-items-center gap-2'><Input className='m-2' style={{width:'28px'}} type="radio" id="Bonus" name="Bonus" value="customer" checked={evaluation.bonus==='customer'}
    onChange={(e) => handlerChangeEvl('bonus',e.target.value)}/>Goes above and beyond by exceeding customer expectations, offering additional solutions, demonstrating exceptional product knowledge, or successfully overcoming a significant objection.</label> <br />
 <label className='d-flex align-items-center gap-2'><Input className='m-2' type="radio" id="Bonus" name="Bonus" value="mark" checked={evaluation.bonus==='customer'}
  onChange={(e) => handlerChangeEvl('bonus',e.target.value)}/>Not upto the mark</label> <br />
</div>
        </div>


        <div className='bg-warning rounded d-flex justify-content-center flex-column'>
        <div className='d-flex flex-start p-4'>
  <label><h4>Evaluation Summary</h4>
    <p>What areas need improvement in the call?</p>
    <p>What did the agent overlook?</p>
    <label for="exampleFormControlTextarea1">Other</label>
    <textarea class="form-control mt-1" id="exampleFormControlTextarea1" placeholder='Your Answer' rows="3" value={evaluation.evaluationsummary}
      onChange={(e) => handlerChangeEvl('evaluationsummary',e.target.value)}></textarea>
  </label>
</div>
        </div>
       
<div className='p-4'>
<button type="button" class="btn btn-outline-success btn-lg" onClick={handlerEscForm}>Submit</button>
</div>
    </div>
</div>
 )
}

export default AgentForm
