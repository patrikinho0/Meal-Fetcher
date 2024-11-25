import './contact.css';

function Contact() {
    return (
        // All the necesarry elements in the HTML of the contact page
        <div className="contact">
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p className="description">
                    Got questions, suggestions, or just want to say hi? We'd love to hear from you!
                </p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
                <div className="funny-effect">
                    <span role="img" aria-label="smiley">
                        😄
                    </span>
                    <span role="img" aria-label="wave">
                        👋
                    </span>
                    <span role="img" aria-label="email">
                        📧
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
