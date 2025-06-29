import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Aslisoona</h1>
      <p>
        I'm Aarav Sharma, the digital marketing expert behind Aslisoona — where nature
        meets home décor. I specialize in SEO, social media marketing, and content strategy
        to ensure Aslisoona reaches plant lovers across India and beyond.
      </p>
      <Link to="/products">
        <button className="landing-button">Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
