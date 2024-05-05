import React from 'react'

const EscalationForm = () => {
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
        <input className='border-none' type="email" placeholder="Enter Your Email Here"  />
      </label>
    </div>

            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label>lead ID: <br />
        <input className='border-none' type="text" placeholder="Enter Your Lead ID Here"  />
      </label>
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label>Evaluated by: <br />
        <input className='border-none' type="text" placeholder="Enter Your Name Here"  />
      </label>
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label>Agent Name: <br />
        <input className='border-none' type="text" placeholder="Enter Agent Name Here" />
      </label>
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
              <h3 className='mx-4 mt-2'>Team Leader</h3>
            <form class='bg-gray px-4 py-2 mt-0'>
          <label><input className='m-1' type='radio' name="Department" value="ERC Dubai" defaultChecked></input>Fawad Ali (ERC Dubai)</label><br />
          <label><input className='m-1' type='radio' name="Department" value="ERC Abu Dhabi"></input>Muhammad Abdullah Akram (ERC Abu Dhabi)</label><br />
          <label><input className='m-1' type='radio' name="Department" value="Dynamic"></input>Muhammad Abubakar (Dynamic)</label><br />
          <label><input className='m-1' type='radio' name="Department" value="Jordan"></input>Yousef Almaani (Jordan)</label>
          <br/>
      </form>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className=' p-4'>    
              <h3>Lead Source</h3>
    <label><input className='m-2' type="checkbox" id="social" name="account" value="Facebook" />Facebook</label> <br />
    <label><input className='m-2' type="checkbox" id="social" name="account" value="Instagram" />Instagram</label> <br />
    <label><input className='m-2' type="checkbox" id="social" name="account" value="Live chat" />Live chat</label> <br />
    <label><input className='m-2' type="checkbox" id="social" name="account" value="Call" />Call</label> <br />
    <label><input className='m-2' type="checkbox" id="social" name="account" value="WhatsApp" />WhatsApp</label> <br />
    <label><input className='m-2' type="checkbox" id="social" name="account" value="PPC" />PPC</label> <br />
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label><h4>Lead Status</h4>
        <p>What is the parked status of the lead?</p>
    <label for="exampleFormControlTextarea1">Other</label>
    <textarea class="form-control mt-1" placeholder='Your Answer'  id="exampleFormControlTextarea1" rows="3"></textarea>
      </label>
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='p-4'>
            <h3>Escalation Severity</h3>
    <label><input className='m-3' type="checkbox" id="social" name="account" value="Urgent Action required" />Urgent Action Required</label> <br />
    <label><input className='m-3' type="checkbox" id="social" name="account" value="High" />High</label> <br />
    <label><input className='m-3' type="checkbox" id="social" name="account" value="Repeated" />Repeated</label> <br />
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column '>
            <div className='p-4'>
            <h3>Issue Identification</h3>
    <label><input className='m-3' type="checkbox" id="social" name="account" value="Facebook" />Product Knowledge: Sales rep lacked knowledge of product features and benefits</label> <br />
    <label><input className='m-3' type="checkbox" id="social" name="account" value="Instagram" />Sales Process: Deviation from established sales process (e.g., not qualifying leads, not handling objections properly).</label> <br />
    <label><input className='m-3' type="checkbox" id="social" name="account" value="Live chat" />Communication: Poor communication skills (e.g., unclear explanations, unprofessional language).</label> <br />
    <label><input className='m-3' type="checkbox" id="social" name="account" value="Call" />Customer Focus: Not actively listening to customer needs, aggressive sales tactics.</label> <br />
    <label><input className='m-3' type="checkbox" id="social" name="account" value="WhatsApp" />SOP's: Failing to update BITRIX or BOOKING Software in a proper manner</label> <br />
    </div>
            </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='p-4'>
     <h3>Escalation Action</h3>
    <label><input className='m-3' type="checkbox" id="social" name="account" value="Facebook" />Coaching Required: Recommend coaching for the sales rep by the Sales Manager.</label> <br />
    <label><input className='m-3' type="checkbox" id="social" name="account" value="Instagram" />Additional Training Needed: Recommend specific sales training for the rep..</label> <br />
    <label><input className='m-3' type="checkbox" id="social" name="account" value="Live chat" />Policy Violation: Report potential policy violation to the Sales Manager.</label> <br />
    <label><input className='m-3' type="checkbox" id="social" name="account" value="Call" /><label for="exampleFormControlTextarea1">Other</label>
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
