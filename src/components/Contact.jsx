import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Instagram } from 'lucide-react';

// Fill these with your EmailJS credentials
const SERVICE_ID = 'service_fqfpyzs';
const TEMPLATE_ID = 'template_j8xnlxb';
const USER_ID = 'yqCOTsU-m3ISh6zn3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSent(false);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(
        (result) => {
          setIsSubmitting(false);
          setSent(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          setIsSubmitting(false);
          setError('Failed to send message. Please try again later.');
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'josephdadzie0002@gmail.com',
      link: 'mailto:josephdadzie0002@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+233 (550) 931-272',
      link: 'tel:+233550931272'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Kumasi - Ghana, West Africa',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: 'https://github.com/Jhay-Dadzie',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/joseph-dadzie-33a42a263',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Instagram size={24} />,
      label: 'WhatsApp',
      url: 'https://www.instagram.com/jhay_graphix',
      color: 'hover:text-green-400'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      url: 'mailto:josephdadzie0002@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-magenta-500/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-700 mx-auto rounded-full"></div>
          <p className="text-xl text-white/60 mt-6 max-w-2xl mx-auto">
            Ready to turn your ideas into reality? Let's collaborate on your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 rounded-2xl border border-white/10 bg-gray-900/50">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-magenta-500/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl text-white mb-6">Send Message</h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-white/80 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-white/80 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm text-white/80 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm text-white/80 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-300 to-blue-700 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                {sent && (
                  <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
                )}
                {error && (
                  <p className="text-red-400 text-center mt-4">{error}</p>
                )}
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Contact Information</h3>
              <p className="text-lg text-white/70 mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                and creative collaborations. Don't hesitate to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-magenta-500/20 rounded-lg flex items-center justify-center border border-white/20">
                    <div className="text-cyan-400">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-white/60">{info.label}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white hover:text-cyan-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full border border-white/20 text-white/60 ${social.color} hover:border-current transition-all duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}