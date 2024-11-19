"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

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
        <h2 className="text-5xl font-comic mb-4">Call me for duty</h2>
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
        className="text-center mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-200 max-w-2xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-2xl font-comic text-gray-700 mb-6">
          🚀 Want to see my full journey?
        </p>
        <Link
          href="/Abdullah Nabil Ibrahim.pdf"
          download="Abdullah Nabil Ibrahim.pdf"
          className="group relative inline-flex items-center gap-2 px-8 py-4 
                     bg-gradient-to-r from-blue-500 to-blue-600 
                     hover:from-blue-600 hover:to-blue-700
                     text-white rounded-xl font-comic text-xl
                     transform hover:scale-105 transition-all duration-300
                     shadow-lg hover:shadow-blue-300"
        >
          <span className="relative">
            <svg
              className="w-6 h-6 inline-block mr-2 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </span>
        </Link>
      </motion.div>
    </div>
  );
}

export default Contact;
