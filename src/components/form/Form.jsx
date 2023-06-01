import React from 'react'

const Form = () => {
    // const [details,setDetails]=useState({firstName:"",lastName:"lastName"});
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" value=""/><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
  <input type="submit" value="Submit"/>
</form> 
    </div>
  )
}

export default Form
