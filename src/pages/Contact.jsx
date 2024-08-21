function Contact() {
  return (
    <>
      <h1 className="text-center light-font">Contact Me</h1>

      <form action="https://api.web3forms.com/submit" method="POST" className="contact-form column">
        <input type="hidden" name="access_key" value="45ea0a30-6748-4a2f-b94b-e69469fa4e0b"></input>

        <input name="fullName" type="text" placeholder="Enter your full name" />
        <input name="email" type="email" placeholder="Enter your email address" />
        <textarea name="message" rows="10" cols="30" placeholder="Enter your message"></textarea>
        <button>Send</button>
      </form>
    </>
  )
}

export default Contact