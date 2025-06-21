function ContactUs() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <label>Email:</label><br />
        <input type="email" placeholder="your@email.com" /><br /><br />
        <label>Message:</label><br />
        <textarea placeholder="Write your message here..."></textarea><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default ContactUs;
