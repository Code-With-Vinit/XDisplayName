import { useEffect, useState } from 'react'

function App() {

  const [firstName,setfirstName]=useState("");
  const [lastName,setlastName]=useState("");
  const [showMessage,setShowMessage]=useState(false);

  // useEffect(() => {
  //   setfirstName(firstName);
  //   setlastName(lastName);
  // },[]);


  const handlefirstName=(e)=>{
    setfirstName(e.target.value);
  }

  const handlelastName=(e)=>{
    setlastName(e.target.value);
  }


  const handleSubmit=(e)=>{
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
    setShowMessage(false);
    return;
  }

    setShowMessage(true);
  }

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <label>First Name:
        <input
          type="text" 
          value={firstName}
          required
          onChange={e => handlefirstName(e)}
        />
      </label>
      <br />

      <label>Last Name:
        <input
          type="text" 
          value={lastName}
          required
          onChange={(e) => handlelastName(e)}
        />
      </label>
       <button type="submit" style={{display:"block"}}>Submit</button>
    </form>
      <p>{showMessage &&  `Full Name: ${firstName} ${lastName}`}</p>
    </>
  )
}

export default App
