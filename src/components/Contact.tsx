import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Web3Forms API - Simple and reliable
      const accessKey = '9582c6ab-bf88-43cc-8e7c-9fc152e020e1';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          subject: `New Contact from ${formData.name}`,
          from_name: 'Marantrix Website',
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log('Email sent successfully:', result);
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setIsSubmitting(false);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'marantrix@gmail.com',
      href: 'mailto:marantrix@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="w-full max-w-[980px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0, 0.63, 1] }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 px-4 text-[#1d1d1f]"
            style={{ 
              letterSpacing: '-0.009em',
              lineHeight: '1.05',
              fontWeight: 600
            }}
          >
            Get In Touch
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl px-4 text-[#86868b]"
            style={{ 
              letterSpacing: '-0.003em',
              lineHeight: '1.47059',
              fontWeight: 400
            }}
          >
            Ready to start your project? Send us a message
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.28, 0, 0.63, 1] }}
            className="rounded-[18px] p-8 bg-[#f5f5f7] border border-[#d2d2d7]"
          >
            <h3 
              className="text-2xl mb-6 text-[#1d1d1f]"
              style={{ 
                letterSpacing: '-0.007em',
                lineHeight: '1.1',
                fontWeight: 600
              }}
            >
              Contact Information
            </h3>

            <div className="space-y-5">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, ease: [0.28, 0, 0.63, 1] }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0071e3] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p 
                        className="text-sm mb-1 text-[#86868b]"
                        style={{ 
                          letterSpacing: '-0.003em',
                          fontWeight: 400
                        }}
                      >
                        {item.label}
                      </p>
                      <p 
                        className="text-base group-hover:text-[#0071e3] transition-colors text-[#1d1d1f]"
                        style={{ 
                          letterSpacing: '-0.003em',
                          fontWeight: 600
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.28, 0, 0.63, 1] }}
            className="rounded-[18px] p-8 bg-[#f5f5f7] border border-[#d2d2d7]"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label 
                  className="block text-sm mb-2 text-[#1d1d1f]"
                  style={{ 
                    letterSpacing: '-0.003em',
                    fontWeight: 600
                  }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-base transition-all duration-300 text-[#1d1d1f] ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-[#d2d2d7] focus:border-[#0071e3] bg-white'
                  } focus:outline-none`}
                  style={{ 
                    letterSpacing: '-0.003em',
                    fontWeight: 400
                  }}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label 
                  className="block text-sm mb-2 text-[#1d1d1f]"
                  style={{ 
                    letterSpacing: '-0.003em',
                    fontWeight: 600
                  }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-base transition-all duration-300 text-[#1d1d1f] ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-[#d2d2d7] focus:border-[#0071e3] bg-white'
                  } focus:outline-none`}
                  style={{ 
                    letterSpacing: '-0.003em',
                    fontWeight: 400
                  }}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label 
                  className="block text-sm mb-2 text-[#1d1d1f]"
                  style={{ 
                    letterSpacing: '-0.003em',
                    fontWeight: 600
                  }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border text-base border-[#d2d2d7] focus:border-[#0071e3] bg-white transition-all duration-300 focus:outline-none text-[#1d1d1f]"
                  style={{ 
                    letterSpacing: '-0.003em',
                    fontWeight: 400
                  }}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label 
                  className="block text-sm mb-2 text-[#1d1d1f]"
                  style={{ 
                    letterSpacing: '-0.003em',
                    fontWeight: 600
                  }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border text-base transition-all duration-300 resize-none text-[#1d1d1f] ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-[#d2d2d7] focus:border-[#0071e3] bg-white'
                  } focus:outline-none`}
                  style={{ 
                    letterSpacing: '-0.003em',
                    fontWeight: 400
                  }}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  letterSpacing: '-0.003em',
                  fontWeight: 400
                }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : submitError ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    Failed to send
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {submitError && (
                <p className="text-red-500 text-sm text-center">
                  Failed to send message. Please try again or email us directly at marantrix@gmail.com
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
