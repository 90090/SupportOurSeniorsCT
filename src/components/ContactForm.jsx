import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/contact-proxy.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">

        <div>
          <label htmlFor="name" className="block mb-2 font-semibold text-[var(--color-purple-dark)] text-sm md:text-base">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm md:text-base"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-[var(--color-purple-dark)] text-sm md:text-base">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm md:text-base"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 font-semibold text-[var(--color-purple-dark)] text-sm md:text-base">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm md:text-base"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold text-[var(--color-purple-dark)] text-sm md:text-base">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none text-sm md:text-base"
          />
        </div>

        {success === true && (
          <p className="text-green-600 font-semibold text-sm text-center">
            Message sent! We'll be in touch soon.
          </p>
        )}
        {success === false && (
          <p className="text-red-500 font-semibold text-sm text-center">
            Something went wrong. Please try again or call us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-8 py-3 md:py-4 bg-[var(--color-accent)] text-black rounded-lg text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {loading ? "Sending..." : success === true ? "Message Sent!" : "Send Message"}
        </button>

      </form>
    </div>
  );
}
