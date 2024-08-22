import { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [alertMessage, setAlertMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const url = 'https://api.web3forms.com/submit'
    const accessKey = '45ea0a30-6748-4a2f-b94b-e69469fa4e0b'

    const res = await axios.post(url, {
      fullName,
      email,
      message,
      access_key: accessKey
    })

    setAlertMessage('Your submission was received!')
    setFullName('')
    setEmail('')
    setMessage('')

    setTimeout(() => {
      setAlertMessage('')
    }, 3500)
  }

  const handleFullNameChange = (event) => {
    setFullName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <>
      <h1 className="text-center light-font">Contact Me</h1>

      {alertMessage && <p className="text-center alert-message">{alertMessage}</p>}

      <form onSubmit={handleSubmit} className="contact-form column">
        <input onChange={handleFullNameChange} value={fullName} name="fullName" type="text" placeholder="Enter your full name" />
        <input onChange={handleEmailChange} value={email} name="email" type="email" placeholder="Enter your email address" />
        <textarea onChange={handleMessageChange} value={message} name="message" rows="10" cols="30" placeholder="Enter your message"></textarea>
        <button>Send</button>
      </form>
    </>
  )
}

export default Contact