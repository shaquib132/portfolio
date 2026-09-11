import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contact.png";

function Contact({ darkMode }) {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Message sent successfully! ✅");
          form.current.reset();
          setSending(false);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        background: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-16 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="text-center mb-10"
          data-aos="fade-up"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            Get{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              In Touch
            </span>
          </h2>

          <p
            className="text-lg"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            Let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="rounded-2xl p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            style={{
              background: darkMode
                ? "linear-gradient(to right, #1f2937, #111827)"
                : "linear-gradient(to right, #ffffff, #f9fafb)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
            data-aos="fade-left"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

              <input
                type="text"
                name="name"
                placeholder="First Name"
                required
                className="w-full px-4 py-3 rounded-lg border outline-none focus:border-orange-500"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  // color: darkMode ? "white" : "#1f2937",
                }}
              />

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="w-full px-4 py-3 rounded-lg border outline-none focus:border-orange-500"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  // color: darkMode ? "white" : "#1f2937",
                }}
              />

            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-lg border outline-none mb-4 focus:border-orange-500"
              style={{
                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                // color: darkMode ? "white" : "#1f2937",
              }}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border outline-none mb-4 focus:border-orange-500"
              style={{
                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                // color: darkMode ? "white" : "#1f2937",
              }}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="6"
              className="w-full px-4 py-3 rounded-lg border outline-none mb-5 resize-none focus:border-orange-500"
              style={{
                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                // color: darkMode ? "white" : "#1f2937",
                
              }}
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 text-white font-semibold rounded-lg transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)",
              }}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;