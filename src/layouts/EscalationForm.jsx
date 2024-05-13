import React, { useState } from 'react'
import { Input } from 'reactstrap'
const EscalationForm = () => {
  const [email,setEmail] = useState('')
  const [leadId,setLeadId] = useState('')
  const [evaluatedBy,setEvaluatedBy] = useState('')
  const [agentName,setAgentName] = useState('')
  const [teamLeader,setTeamLeader] = useState('')
  const [leadSource,setLeadSource] = useState('')
  const [leadStatus,setLeadStatus] = useState('')
  const [escSeverity,setEscSeverity] = useState('')
  const [issueIden,setIssueIden] = useState('')
  const [escAction,setEscAction] = useState('')
  return (
    <div className='d-flex justify-content-center'>
        <div className='w-50 bg-gray d-flex flex-column gap-3'>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column align-items-center my-60px mx-50px'>
                <h1 className='fw-bolder'>BRIGHT IDEA'S</h1>
                <p>COMMUNICATION</p>
                <h3 className='text-danger'>Escalation Form</h3>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column '>
  
    <div className='d-flex flex-start p-4'>
      <label>Enter your email: <br />
        <Input className='border-none' type="email" placeholder="Enter Your Email Here" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      </label>
    </div>

            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label>lead ID: <br />
        <Input className='border-none' type="text" placeholder="Enter Your Lead ID Here" value={leadId}
        onChange={(e) => setLeadId(e.target.value)}  />
      </label>
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label>Evaluated by: <br />
        <Input className='border-none' type="text" placeholder="Enter Your Name Here" value={evaluatedBy}
        onChange={(e) => setEvaluatedBy(e.target.value)} />
      </label>
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label>Agent Name: <br />
        <Input className='border-none' type="text" placeholder="Enter Agent Name Here" value={agentName}
        onChange={(e) => setAgentName(e.target.value)} />
      </label>
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
              <h3 className='mx-4 mt-2'>Team Leader</h3>
        <form class='bg-gray px-4 py-2 mt-0'>
          <label><Input className='m-1' type='radio' name="Department" value="ERC Dubai" onChange={(e) => setTeamLeader(e.target.value)} checked={teamLeader === 'ERC Dubai'} defaultChecked></Input>Fawad Ali (ERC Dubai)</label><br />
          <label><Input className='m-1' type='radio' name="Department" value="ERC Abu Dhabi" onChange={(e) => setTeamLeader(e.target.value)} checked={teamLeader === 'ERC Abu Dhabi'}/>Muhammad Abdullah Akram (ERC Abu Dhabi)</label><br />
          <label><Input Muhammad className='m-1' type='radio' name="Department" value="Dynamic" onChange={(e) => setTeamLeader(e.target.value)} checked={teamLeader === 'Dynamic'}/>Muhammad Abubakar (Dynamic)</label><br />
          <label><Input Yousef className='m-1' type='radio' name="Department" value="Jordan" onChange={(e) => setTeamLeader(e.target.value)} checked={teamLeader === 'Jordan'}/>Yousef Almaani (Jordan)</label>
          <br/>
      </form>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className=' p-4'>    
              <h3>Lead Source</h3>
    <label><Input className='m-2' type="radio" id="social" name="account" value="Facebook" checked={leadSource === 'Facebook'} onChange={(e) => setLeadSource(e.target.value)} />Facebook</label> <br />
    <label><Input className='m-2' type="radio" id="social" name="account" value="Instagram" checked={leadSource === 'Instagram'} onChange={(e) => setLeadSource(e.target.value)} />Instagram</label> <br />
    <label><Input className='m-2' type="radio" id="social" name="account" value="Live chat" checked={leadSource === 'Live chat'} onChange={(e) => setLeadSource(e.target.value)} />Live chat</label> <br />
    <label><Input className='m-2' type="radio" id="social" name="account" value="Call"  checked={leadSource === 'Call'} onChange={(e) => setLeadSource(e.target.value)} />Call</label> <br />
    <label><Input className='m-2' type="radio" id="social" name="account" value="WhatsApp" checked={leadSource === 'WhatsApp'} onChange={(e) => setLeadSource(e.target.value)}/>WhatsApp</label> <br />
    <label><Input className='m-2' type="radio" id="social" name="account" value="PPC" checked={leadSource === 'PPC'} onChange={(e) => setLeadSource(e.target.value)} />PPC</label> <br />
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label><h4>Lead Status</h4>
        <p>What is the parked status of the lead?</p>
    <label for="exampleFormControlTextarea1">Other</label>
    <textarea class="form-control mt-1" placeholder='Your Answer'  id="exampleFormControlTextarea1" rows="3" value={leadStatus}
    onChange={(e) => setLeadStatus(e.target.value)}></textarea>
      </label>
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='p-4'>
            <h3>Escalation Severity</h3>
    <label><Input className='m-3' type="radio" id="social" name="account" value="Urgent Action required" checked={escSeverity === 'Urgent Action required'} onChange={(e) => setEscSeverity(e.target.value)} />Urgent Action Required</label> <br />
    <label><Input className='m-3' type="radio" id="social" name="account" value="High" checked={escSeverity === 'High'} onChange={(e) => setEscSeverity(e.target.value)} />High</label> <br />
    <label><Input className='m-3' type="radio" id="social" name="account" value="Repeated" checked={escSeverity === 'Repeated'} onChange={(e) => setEscSeverity(e.target.value)} />Repeated</label> <br />
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column '>
            <div className='p-4'>
            <h3>Issue Identification</h3>
    <label><Input className='m-3' type="radio" id="social" name="account" value="Facebook" checked={issueIden === 'Facebook'} onChange={(e) => setIssueIden(e.target.value)} />Product Knowledge: Sales rep lacked knowledge of product features and benefits</label> <br />
    <label><Input className='m-3' type="radio" id="social" name="account" value="Instagram" checked={issueIden === 'Instagram'} onChange={(e) => setIssueIden(e.target.value)} />Sales Process: Deviation from established sales process (e.g., not qualifying leads, not handling objections properly).</label> <br />
    <label><Input className='m-3' type="radio" id="social" name="account" value="Live chat" checked={issueIden === 'Live chat'} onChange={(e) => setIssueIden(e.target.value)} />Communication: Poor communication skills (e.g., unclear explanations, unprofessional language).</label> <br />
    <label><Input className='m-3' type="radio" id="social" name="account" value="Call" checked={issueIden === 'Call'} onChange={(e) => setIssueIden(e.target.value)} />Customer Focus: Not actively listening to customer needs, aggressive sales tactics.</label> <br />
    <label><Input className='m-3' type="radio" id="social" name="account" value="WhatsApp" checked={issueIden === 'WhatsApp'} onChange={(e) => setIssueIden(e.target.value)} />SOP's: Failing to update BITRIX or BOOKING Software in a proper manner</label> <br />
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='p-4'>
     <h3>Escalation Action</h3>
    <label><Input className='m-3' type="radio" id="social" name="account" value="Facebook" />Coaching Required: Recommend coaching for the sales rep by the Sales Manager.</label> <br />
    <label><Input className='m-3' type="radio" id="social" name="account" value="Instagram" />Additional Training Needed: Recommend specific sales training for the rep..</label> <br />
    <label><Input className='m-3' type="radio" id="social" name="account" value="Live chat" />Policy Violation: Report potential policy violation to the Sales Manager.</label> <br />
    <label><Input className='m-3' type="radio" id="social" name="account" value="Call" /><label for="exampleFormControlTextarea1">Other</label>
    <textarea class="form-control mt-1" placeholder='Your Answer' id="exampleFormControlTextarea1" rows="3"></textarea>
      </label>
    </div>
            </div>
    <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label><h4>Additional successrmation</h4>
        <p>Provide any additional successrmation relevant to the issue</p>
        <label for="exampleFormControlTextarea1">Other</label>
    <textarea class="form-control mt-1" id="exampleFormControlTextarea1" placeholder='Your Answer' rows="3"></textarea>
      </label>
    </div>
            </div>
    <div class="input-group px-4">
      <h5>Attach relevant recording (call) or transcript (chat).</h5>
      <label><input type="file" class="form-control" id="inputGroupFile02"/>
  </label>
</div>
<div className='p-4'>
<button type="button" class="btn btn-outline-success btn-lg">Submit</button>
</div>
        </div>
    </div>
    
  )
}

export default EscalationForm
