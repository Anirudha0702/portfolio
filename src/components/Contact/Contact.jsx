import './Contact.css'
import {useState} from 'react'
const Contact = () => {
    const[formData, setFormData] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData(true)
    }
  return (
    <div className="tab-content" onClick={(e)=>handleSubmit(e)}>
        <form action="" className="contact">
            <input type="text" id="name" name="name" placeholder="Your name.." required/>
            <input type="email" id="email" name="email" placeholder="Your email.." pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Please enter a valid email address" required/>
            <input type="tel" name="Phone No" id="" placeholder='Enter Phone No' pattern='[0-9]{10}'/>
            <textarea id="message" name="message" placeholder="Write something.." required rows={20} cols={30}></textarea>
            {
                formData && <p className='error'>Function is turned off intentionaly</p>
            }
            <input type="submit" value="Submit"/>
        </form>
        
    </div>
  )
}

export default Contact