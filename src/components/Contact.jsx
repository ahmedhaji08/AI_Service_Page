export default function Contact({ setToast }) {
  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const btn = form.querySelector("button");
    btn.classList.add("loading");
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        form.reset();
        setToast(" Message sent successfully!");
      } else {
        setToast(" Failed to send message");
      }
    } catch {
      setToast(" Network error");
    }

    btn.classList.remove("loading");
    btn.disabled = false;
  };

   const autoResize = e => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <section id="contact" className="section contact fade-up">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Let’s Build Something Smart</h2>
          <p>
            Tell us about your idea and we’ll help you design an AI solution that
            delivers real business impact.
          </p>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/xnjvkqbp"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="field">
            <input name="name" required />
            <label>Your Name</label>
          </div>

          <div className="field">
            <input name="email" type="email" required />
            <label>Your Email</label>
          </div>

          <div className="field">
            <textarea
              name="message"
              rows="3"
              required
              onInput={autoResize}   
            />
            <label>Your Message</label>
          </div>

          <button type="submit">
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}