"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const contactItems = [
    {
      icon: <MdEmail className="text-blue-500" size={32} />,
      title: "Email",
      value: "abdullhn.work@gmail.com",
      link: "mailto:abdullhn.work@gmail.com",
      color: "blue",
    },
    {
      icon: <FaGithub className="text-purple-600" size={32} />,
      title: "GitHub",
      value: "@Abdullahnabil22",
      link: "https://github.com/Abdullahnabil22",
      color: "purple",
    },
    {
      icon: <FaLinkedin className="text-blue-600" size={32} />,
      title: "LinkedIn",
      value: "Let's Connect!",
      link: "https://www.linkedin.com/in/abdullah-nabil22",
      color: "blue",
    },
    {
      icon: <MdLocationOn className="text-red-500" size={32} />,
      title: "Location",
      value: "Cairo, Egypt",
      link: "#",
      color: "red",
    },
  ];

  return (
    <div
      className="w-full p-5 m-2.5 bg-white rounded-2xl border-3 border-black relative filter drop-shadow-custom bg-pattern"
      id="contact"
      ref={ref}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-comic mb-4">Get in Touch!</h2>
        <p className="text-2xl font-comic text-gray-600">
          I&apos;m always open to new opportunities and interesting projects
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {contactItems.map((item, index) => (
          <motion.a
            key={item.title}
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            animate={
              inView
                ? { x: 0, opacity: 1 }
                : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className={`
              p-6 rounded-xl bg-gradient-to-br
              ${
                item.color === "blue"
                  ? "from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
                  : item.color === "purple"
                  ? "from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200"
                  : item.color === "red"
                  ? "from-red-50 to-red-100 hover:from-red-100 hover:to-red-200"
                  : "from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200"
              }
              border-2 border-gray-200 hover:border-${item.color}-400
              flex items-center gap-4 cursor-pointer transition-all duration-300
            `}
          >
            <div className={`p-3 rounded-lg bg-white shadow-sm`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-2xl font-comic">{item.title}</h3>
              <p className="text-lg font-comic text-gray-600">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-xl font-comic text-gray-600">
          Prefer to send a message directly?
        </p>
        <button
          className="mt-4 px-8 py-3 bg-blue-500 text-white rounded-xl font-comic text-xl 
                     hover:bg-blue-600 transition-colors"
          onClick={() =>
            (window.location.href = "mailto:abdullhn.work@gmail.com")
          }
        >
          Send Message
        </button>
      </motion.div>
    </div>
  );
}

export default Contact;
