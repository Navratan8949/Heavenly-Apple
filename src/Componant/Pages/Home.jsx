import './home.css';
const Home = () => {
    return (

     <div className="container">
  <div className="text-section">
    <h1>Welcome to our Website</h1>
    <p>This is the text section. You can put any content here.</p>
  </div>
  <div className="form-section">
    <h2>Contact Us</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" defaultValue={""} />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>


    )
}

export default Home
