import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setloading] = useState(false);
  const [shouldResetForm, setShouldResetForm] = useState(false);
  const [mobile, setmobile] = useState(window.innerWidth <= 1024 ? true : false);
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      await emailjs.send(
        "service_zs7i60j",
        "template_a3vsjus",
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Ayush Chavda",
          message: form.message,
          to_email: "ayushchavda2020@gmail.com",
        },
        "9qS_f_LiUfmBk1uxK"
      );

      setloading(false);
      alert("Your message has been sent successfully");
      setShouldResetForm(true); // Set this to true after successful submission
    } catch (error) {
      setloading(false);
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    if (shouldResetForm) {
      setform({
        name: "",
        email: "",
        message: "",
      });
      setShouldResetForm(false); // Reset the flag
    }
  }, [shouldResetForm]);

  return (
    <section id="contact" className="c-space my-20 lg:pt-28">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {mobile ? "" : (<img
          src="/assets/terminal.png"
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[115vh]"
        />)}

        <div className="contact-container  ">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Ayush Chavda"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ayushchavda2020@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in ..."
              ></textarea>
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending ..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt=""
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
