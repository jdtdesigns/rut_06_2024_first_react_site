import { useState } from 'react'
import axios from 'axios'

const initialFormData = {
  fullName: '',
  email: '',
  message: '',
  stack: 'none',
  access_key: '45ea0a30-6748-4a2f-b94b-e69469fa4e0b'
}

function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const [alertMessage, setAlertMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const url = 'https://api.web3forms.com/submit'

    const res = await axios.post(url, formData)

    setAlertMessage('Your submission was received!')
    setFormData({
      ...initialFormData
    })

    setTimeout(() => {
      setAlertMessage('')
    }, 3500)
  }

  const handleInputChange = (event) => {
    const dataProp = event.target.name
    setFormData({
      ...formData,
      [dataProp]: event.target.value
    })
  }

  return (
    <>
      <h1 className="text-center light-font">Contact Me</h1>

      {alertMessage && <p className="text-center alert-message">{alertMessage}</p>}

      <form onSubmit={handleSubmit} className="contact-form column">
        <input onChange={handleInputChange} value={formData.fullName} name="fullName" type="text" placeholder="Enter your full name" />
        <input onChange={handleInputChange} value={formData.email} name="email" type="email" placeholder="Enter your email address" />
        <label>Please choose the stack your are inquiring about:</label>

        <select onChange={handleInputChange} name="stack" value={formData.stack}>
          <option value="none" defaultValue={true}>None</option>
          <option value="MERN">MERN</option>
          <option value="MEAN">MEAN</option>
          <option value="MEVN">MEVN</option>
        </select>
        <textarea onChange={handleInputChange} value={formData.message} name="message" rows="10" cols="30" placeholder="Enter your message"></textarea>
        <button>Send</button>
      </form>
    </>
  )
}

export default Contact