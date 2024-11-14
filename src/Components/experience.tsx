"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Experience() {
  const [ref1, inView1] = useInView({
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.2,
  });

  return (
    <div
      className=" w-full mx-auto flex flex-col gap-8 p-5 m-2.5 bg-white rounded-2xl border-3 border-black relative filter drop-shadow-custom bg-pattern"
      id="experience"
    >
      <motion.div
        ref={ref1}
        initial={{ x: -100, opacity: 0 }}
        animate={inView1 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="experience-item"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-comic">
            Full-stack Web Development Using MEARN Track
          </h3>
          <span className="text-xl font-comic text-gray-600">
            05/2024 – Present
          </span>
        </div>
        <p className="text-2xl font-comic text-gray-600 italic">
          Information Technology Institute – ITI
        </p>
        <motion.ul
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="list-disc pl-5 mt-4 text-xl font-comic"
        >
          <li>
            Develop full-stack web applications using MongoDB, Express.js,
            React, Next.js, Angular and Node.js
          </li>
          <li>
            Collaborate with cross-functional teams to design and implement
            user-centric features
          </li>
          <li>Apply Agile methodologies and version control using Git</li>
        </motion.ul>
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ x: -100, opacity: 0 }}
        animate={inView2 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="experience-item"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-comic">
            Software Development Fundamentals Track
          </h3>
          <span className="text-xl font-comic text-gray-600">
            11/2023 – 03/2024
          </span>
        </div>
        <p className="text-2xl font-comic text-gray-600 italic">
          Information Technology Institute – ITI
        </p>
        <motion.ul
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="list-disc pl-5 mt-4 text-xl font-comic"
        >
          <li>
            Gained foundational knowledge in software development principles and
            best practices
          </li>
          <li>
            Completed various coding projects to reinforce learning and
            practical application
          </li>
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default Experience;
