import React from 'react'

const AgentForm = () => {
  return (
    <div className='d-flex justify-content-center'>
    <div className='w-50 bg-gray d-flex flex-column gap-3'>
        <div className='bg-gray rounded d-flex justify-content-center flex-column align-items-center'>
            <h1 className='fw-bolder'>BRIGHT IDEA'S</h1>
            <p>COMMUNICATION</p>
        </div>
        <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column '>
<div className='d-flex flex-start p-4'>
  <label>Enter your email: <br />
    <input type="email" placeholder="Enter Your Email Here"  />
  </label>
</div>

        </div>
        <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
        <div className='d-flex flex-start p-4'>
  <label>lead ID: <br />
    <input type="text" placeholder="Enter Your Lead ID Here"  />
  </label>
</div>
        </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
            <div className='d-flex flex-start p-4'>
      <label>Agent Name: <br />
        <input type="text" placeholder="Enter Agent Name Here" />
      </label>
    </div>
            </div>
        <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
          <h3 className='p-4'>Mode of Communication</h3>
        <form class='bg-gray px-4'>
      <label><input className='m-1' type='radio' name="Department" value="Chat" defaultChecked></input>Chat</label><br />
      <label><input className='m-1' type='radio' name="Department" value="Call"></input>Call</label><br />
      <br/>
  </form>
        </div>
            <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
              <h3 className='p-4'>Select The Team</h3>
            <form class='bg-gray p-4'>
          <label><input className='m-1' type='radio' name="Department" value="ERC Dubai" defaultChecked></input>Fawad Ali (ERC Dubai)</label><br />
          <label><input className='m-1' type='radio' name="Department" value="ERC Abu Dhabi"></input>Muhammad Abdullah Akram (ERC Abu Dhabi)</label><br />
          <label><input className='m-1' type='radio' name="Department" value="Dynamic"></input>Muhammad Abubakar (Dynamic)</label><br />
          <label><input className='m-1' type='radio' name="Department" value="Jordan"></input>Yousef Almaani (Jordan)</label>
          <br/>
      </form>
            </div>
        <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
        <div className=' p-4'>    
          <h3>Greetings</h3>
          <p>Demonstrates enthusiasm and a positive tone throughout the call.</p>
<label><input className='m-2' type="checkbox" id="social" name="account" value="uses" />Uses a professional and friendly greeting within the first 3 seconds, including the company name and their own name</label> <br />
<label><input className='m-2' type="checkbox" id="social" name="account" value="marrk" />Not upto the mark</label> <br />
</div>
        </div>
        <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
        <div className=' p-4'>    
          <h3>Accuracy & Compliance</h3>
          <p>Provides accurate and up-to-date secondaryrmation about the company's products or services, adhering to all relevant scripts and policies.</p>
<label><input className='m-2' type="checkbox" id="social" name="account" value="uses" />Asks clear and concise questions to accurately identify the customer's needs or inquiries.</label> <br />
<label><input className='m-2' type="checkbox" id="social" name="account" value="marrk" />Not upto the mark</label> <br />
</div>
        </div>
        <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
        <div className=' p-4'>    
          <h3>Building Rapport & Discovery</h3>
          <p>Identifies potential pain points or opportunities where the product/service can provide value to the customer.</p>
<label><input className='m-2' type="checkbox" id="social" name="account" value="uses" />Demonstrates active listening skills and asks open-ended questions to understand the customer's needs and potential interest in the product/service.</label> <br />
<label><input className='m-2' type="checkbox" id="social" name="account" value="marrk" />Not upto the mark</label> <br />
</div>
        </div>
        <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
        <div className=' p-4'>    
          <h3>Presenting Solutions & Making the Sale</h3>
          <p>Clearly and concisely presents the product/service features and benefits tailored to the customer's needs identified earlier.</p>
<label><input className='m-2' type="checkbox" id="social" name="account" value="uses" />Attempts to overcome objections professionally using established techniques and effectively guides the customer towards booking an appointment.</label> <br />
<label><input className='m-2' type="checkbox" id="social" name="account" value="marrk" />Not upto the mark</label> <br />
</div>
        </div>
        <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
        <div className=' p-4'>    
          <h3>Call Closing & Securing Commitment</h3>
          <p>Confirms the customer's details and secures their commitment for the sale or appointment. Thanks the customer for their time and offers further assistance if needed.</p>
<label><input className='m-2' type="checkbox" id="social" name="account" value="uses" />Professionally summarizes key points discussed and clearly outlines the next steps, including the call to action (e.g., callback, appointment booking).</label> <br />
<label><input className='m-2' type="checkbox" id="social" name="account" value="marrk" />Not upto the mark</label> <br />
</div>
        </div>
        <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
        <div className=' p-4'>    
          <h3>Bonus Point</h3>
<label><input className='m-2' type="checkbox" id="social" name="account" value="uses" />Goes above and beyond by exceeding customer expectations, offering additional solutions, demonstrating exceptional product knowledge, or successfully overcoming a significant objection.</label> <br />
<label><input className='m-2' type="checkbox" id="social" name="account" value="marrk" />Not upto the mark</label> <br />
</div>
        </div>


        <div className='bg-secondary text-white rounded d-flex justify-content-center flex-column'>
        <div className='d-flex flex-start p-4'>
  <label><h4>Evaluation Summary</h4>
    <p>What areas need improvement in the call?</p>
    <p>What did the agent overlook?</p>
    <label for="exampleFormControlTextarea1">Other</label>
    <textarea class="form-control mt-1" id="exampleFormControlTextarea1" placeholder='Your Answer' rows="3"></textarea>
  </label>
</div>
        </div>
       
<div className='p-4'>
<button type="button" class="btn btn-outline-success btn-lg">Submit</button>
</div>
    </div>
</div>
 )
}

export default AgentForm
