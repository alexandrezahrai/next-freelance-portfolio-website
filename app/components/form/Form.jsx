import "../form/forms.css";

export default function Form() {
  return (
    <div className="formcarry-container">
      <form action="#" method="POST" encType="multipart/form-data">
        <div className="formcarry-block">
          <label htmlFor="fc-generated-1-name">Full Name</label>
          <input
            type="text"
            name="name"
            id="fc-generated-1-name"
            placeholder="Your first and last name"
          />
        </div>
        <div className="formcarry-block">
          <label htmlFor="fc-generated-1-email">Your Email Address</label>
          <input
            type="email"
            name="email"
            id="fc-generated-1-email"
            placeholder="john@doe.com"
          />
        </div>
        <div className="formcarry-block">
          <label htmlFor="fc-generated-1-message">Your message</label>
          <textarea
            name="message"
            id="fc-generated-1-message"
            placeholder="Enter your message..."
            defaultValue={""}
          />
        </div>
        <div className="formcarry-block">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
