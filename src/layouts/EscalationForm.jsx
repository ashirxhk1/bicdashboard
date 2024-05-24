import React, { useEffect, useState } from 'react'
import { Input } from 'reactstrap'
import { escalationApi } from '../features/userApis'
const EscalationForm = () => {
  const [otherReason, setOtherReason] = useState('');
  const [escalation,setEscalation] = useState({
    email:'',
    leadId:'',
    evaluatedBy:'',
    agentName:'',
    teamLeader:'',
    leadSource:'',
    leadStatus:'',
    escSeverity:'',
    issueIden:'',
    escAction:'',
    successmaration:''
  })

  const handlerEscalation = (name,value) => {
    setEscalation((pre) => ({
      ...pre,
      [name]:value
    }))
  }

  const handlerOtherChange = (e) => {
    setOtherReason(e.target.value)
  }

  useEffect(() => {
    if(otherReason.trim() !== ''){
      handlerEscalation('escAction',otherReason)
    }
  },[otherReason])

  const handlerEscForm = async () => {
    if(
      escalation.email.trim() === '' ||
      escalation.leadId.trim() === '' ||
      escalation.evaluatedBy.trim() === '' ||
      escalation.agentName.trim() === '' ||
      escalation.teamLeader.trim() === '' ||
      escalation.leadSource.trim() === '' ||
      escalation.leadStatus.trim() === '' ||
      escalation.escSeverity.trim() === '' ||
      escalation.issueIden.trim() === '' ||
      (escalation.escAction === 'Call' && otherReason.trim() === '') ||
      escalation.successmaration.trim() === ''
    ){
      alert("Please fill fields!")
      return
    }else{
      const getUser = JSON.parse(localStorage.getItem('userData'))
      const id = getUser.id
      escalation._id = id
      const data = await escalationApi(escalation)
      if(data.data.success === true){
        setOtherReason('')
        setEscalation({
          email:'',
          leadId:'',
          evaluatedBy:'',
          agentName:'',
          teamLeader:'',
          leadSource:'',
          leadStatus:'',
          escSeverity:'',
          issueIden:'',
          escAction:'',
          successmaration:''
        })
        alert("Successfully Created!")
      }
    }
  }

  return (
    <div className='d-flex justify-content-center'>
        <div className='w-50 bg-gray d-flex flex-column gap-3'>
            <div className='bg-light rounded d-flex justify-content-center flex-column align-items-center my-60px mx-50px'>
                <h1 className='fw-bolder'>BRIGHT IDEA'S</h1>
                <p>COMMUNICATION</p>
                <h3 className='text-danger'>Escalation Form</h3>
            </div>
            <div className='bg-warning rounded d-flex justify-content-center flex-column '>
  
    <div className='d-flex flex-start p-4'>
      <label>Enter your email: <br />
        <Input className='border-none' type="email" placeholder="Enter Your Email Here" value={escalation.email}
        onChange={(e) => handlerEscalation("email",e.target.value)}/>
      </label>
    </div>

            </div>
            <div className='bg-warning rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label>lead ID: <br />
        <Input className='border-none' type="text" placeholder="Enter Your Lead ID Here" value={escalation.leadId}
        onChange={(e) => handlerEscalation("leadId",e.target.value)}  />
      </label>
    </div>
            </div>
            <div className='bg-warning rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label>Evaluated by: <br />
        <Input className='border-none' type="text" placeholder="Enter Your Name Here" value={escalation.evaluatedBy}
        onChange={(e) => handlerEscalation("evaluatedBy",e.target.value)} />
      </label>
    </div>
            </div>
            <div className='bg-warning rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label>Agent Name: <br />
        <Input className='border-none' type="text" placeholder="Enter Agent Name Here" value={escalation.agentName}
        onChange={(e) => handlerEscalation("agentName",e.target.value)} />
      </label>
    </div>
            </div>
            <div className='bg-warning rounded d-flex justify-content-center flex-column'>
              <h3 className='mx-4 mt-2'>Team Leader</h3>
        <form class='bg-gray px-4 py-2 mt-0'>
          <label><Input className='m-1' type='radio' name="Department" id="lead" value="ERC Dubai" 
            onChange={(e) => handlerEscalation("teamLeader",e.target.value)} checked={escalation.teamLeader === 'ERC Dubai'} defaultChecked></Input>Fawad Ali (ERC Dubai)</label><br />
          <label><Input className='m-1' type='radio' name="Department" id="lead" value="ERC Abu Dhabi" 
            onChange={(e) => handlerEscalation("teamLeader",e.target.value)} checked={escalation.teamLeader === 'ERC Abu Dhabi'}/>Muhammad Abdullah Akram (ERC Abu Dhabi)</label><br />
          <label><Input className='m-1' type='radio' name="Department" id="lead" value="Dynamic" 
            onChange={(e) => handlerEscalation("teamLeader",e.target.value)} checked={escalation.teamLeader === 'Dynamic'}/>Muhammad Abubakar (Dynamic)</label><br />
          <label><Input className='m-1' type='radio' name="Department" id="lead" value="Jordan" 
            onChange={(e) => handlerEscalation("teamLeader",e.target.value)} checked={escalation.teamLeader === 'Jordan'}/>Yousef Almaani (Jordan)</label>
          <br/>
      </form>
            </div>
            <div className='bg-warning rounded d-flex justify-content-center flex-column'>
            <div className=' p-4'>    
              <h3>Lead Source</h3>
    <label><Input className='m-2' type="radio" id="social" name="account" value="Facebook" checked={escalation.leadSource === 'Facebook'} 
      onChange={(e) => handlerEscalation("leadSource",e.target.value)} />Facebook</label> <br />
    <label><Input className='m-2' type="radio" id="social" name="account" value="Instagram" checked={escalation.leadSource === 'Instagram'} 
      onChange={(e) => handlerEscalation("leadSource",e.target.value)} />Instagram</label> <br />
    <label><Input className='m-2' type="radio" id="social" name="account" value="Live chat" checked={escalation.leadSource === 'Live chat'} 
      onChange={(e) => handlerEscalation("leadSource",e.target.value)} />Live chat</label> <br />
    <label><Input className='m-2' type="radio" id="social" name="account" value="Call"  checked={escalation.leadSource === 'Call'} 
      onChange={(e) => handlerEscalation("leadSource",e.target.value)} />Call</label> <br />
    <label><Input className='m-2' type="radio" id="social" name="account" value="WhatsApp" checked={escalation.leadSource === 'WhatsApp'} 
      onChange={(e) => handlerEscalation("leadSource",e.target.value)}/>WhatsApp</label> <br />
    <label><Input className='m-2' type="radio" id="social" name="account" value="PPC" checked={escalation.leadSource === 'PPC'} 
      onChange={(e) => handlerEscalation("leadSource",e.target.value)} />PPC</label> <br />
    </div>
            </div>
            <div className='bg-warning rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label><h4>Lead Status</h4>
        <p>What is the parked status of the lead?</p>
    <label for="exampleFormControlTextarea1">Other</label>
    <textarea class="form-control mt-1" placeholder='Your Answer'  id="exampleFormControlTextarea1" rows="3" value={escalation.leadStatus}
    onChange={(e) => handlerEscalation("leadStatus",e.target.value)}></textarea>
      </label>
    </div>
            </div>
            <div className='bg-warning rounded d-flex justify-content-center flex-column'>
              <div className='p-4'>
                <h3>Escalation Severity</h3>
                <label className='d-flex align-items-center'><Input className='m-3' type="radio" id="sev" name="Severity" value="Urgent Action required" checked={escalation.escSeverity === 'Urgent Action required'}
                onChange={(e) => handlerEscalation("escSeverity",e.target.value)} />Urgent Action Required</label>
                <label className='d-flex align-items-center'><Input className='m-3' type="radio" id="sev" name="Severity" value="High" checked={escalation.escSeverity === 'High'} 
                  onChange={(e) => handlerEscalation("escSeverity",e.target.value)} />High</label>
                <label className='d-flex align-items-center'><Input className='m-3' type="radio" id="sev" name="Severity" value="Repeated" checked={escalation.escSeverity === 'Repeated'} 
                  onChange={(e) => handlerEscalation("escSeverity",e.target.value)} />Repeated</label>
              </div>
            </div>
            <div className='bg-warning rounded d-flex justify-content-center flex-column '>
            <div className='p-4'>
            <h3>Issue Identification</h3>
    <label className='d-flex align-items-center gap-1 '><Input className='m-3' type="radio" id="issue" name="Issue" value="Facebook" checked={escalation.issueIden === 'Facebook'} 
      onChange={(e) => handlerEscalation("issueIden",e.target.value)} />Product Knowledge: Sales rep lacked knowledge of product features and benefits</label> <br />
    <label className='d-flex align-items-center gap-1 '><Input className='m-3 radioIn' type="radio" id="issue" name="Issue" value="Instagram" checked={escalation.issueIden === 'Instagram'} 
      onChange={(e) => handlerEscalation("issueIden",e.target.value)} />Sales Process: Deviation from established sales process (e.g., not qualifying leads, not handling objections properly).</label> <br />
    <label className='d-flex align-items-center'><Input className='m-3 ' type="radio" id="issue" name="Issue" value="Live chat" checked={escalation.issueIden === 'Live chat'} 
      onChange={(e) => handlerEscalation("issueIden",e.target.value)} />Communication: Poor communication skills (e.g., unclear explanations, unprofessional language).</label> <br />
    <label className='d-flex align-items-center'><Input className='m-3' type="radio" id="issue" name="Issue" value="Call" checked={escalation.issueIden === 'Call'} 
      onChange={(e) => handlerEscalation("issueIden",e.target.value)} />Customer Focus: Not actively listening to customer needs, aggressive sales tactics.</label> <br />
    <label className='d-flex align-items-center'><Input className='m-3' type="radio" id="issue" name="Issue" value="WhatsApp" checked={escalation.issueIden === 'WhatsApp'} 
      onChange={(e) => handlerEscalation("issueIden",e.target.value)} />SOP's: Failing to update BITRIX or BOOKING Software in a proper manner</label> <br />
    </div>
            </div>
            <div className='bg-warning rounded d-flex justify-content-center flex-column'>
            <div className='p-4'>
     <h3>Escalation Action</h3>
    <label className='d-flex align-items-center'><Input className='m-3' type="radio" id="action" name="Action" value="Facebook" checked={escalation.escAction === 'Facebook'} 
      onChange={(e) => handlerEscalation('escAction',e.target.value)}/>Coaching Required: Recommend coaching for the sales rep by the Sales Manager.</label> <br />
    <label className='d-flex align-items-center'><Input className='m-3' type="radio" id="action" name="Action" value="Instagram" checked={escalation.escAction === 'Instagram'} 
      onChange={(e) => handlerEscalation('escAction',e.target.value)} />Additional Training Needed: Recommend specific sales training for the rep..</label> <br />
    <label className='d-flex align-items-center'><Input className='m-3' type="radio" id="action" name="Action" value="Live chat" checked={escalation.escAction === 'Live chat'} 
      onChange={(e) => handlerEscalation('escAction',e.target.value)} />Policy Violation: Report potential policy violation to the Sales Manager.</label> <br />
    <label className='d-flex align-items-center'><Input className='m-3' type="radio" id="action" name="Action" value="Call" checked={escalation.escAction === 'Call'} 
      onChange={(e) => handlerEscalation('escAction',e.target.value)}/>Other</label>
    <textarea class="form-control mt-1" placeholder='Your Answer' id="exampleFormControlTextarea1" rows="3" value={otherReason} 
    onChange={(e) => handlerOtherChange(e)}></textarea>
      
    </div>
            </div>
    <div className='bg-warning rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label><h4>Additional successrmation</h4>
        <p>Provide any additional successrmation relevant to the issue</p>
        <label for="exampleFormControlTextarea1">Other</label>
    <textarea class="form-control mt-1" id="exampleFormControlTextarea1" placeholder='Your Answer' rows="3" value={escalation.successmaration}
    onChange={(e) => handlerEscalation('successmaration',e.target.value)}></textarea>
      </label>
    </div>
            </div>
    <div class="input-group px-4">
      <h5>Attach relevant recording (call) or transcript (chat).</h5>
      <label><input type="file" class="form-control" id="inputGroupFile02"/>
  </label>
</div>
<div className='p-4'>
<button type="button" class="btn btn-outline-success btn-lg" onClick={handlerEscForm}>Submit</button>
</div>
        </div>
    </div>
    
  )
}

export default EscalationForm
