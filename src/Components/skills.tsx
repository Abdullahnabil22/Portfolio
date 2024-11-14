"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaAws,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiTypescript,
  SiAngular,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const skillCategories = [
    {
      title: "Front-end",
      skills: [
        { name: "HTML", icon: <FaHtml5 size={30} color="#E44D26" /> },
        { name: "CSS", icon: <FaCss3Alt size={30} color="#264DE4" /> },
        { name: "Bootstrap", icon: <FaBootstrap size={30} color="#7952B3" /> },
        { name: "Tailwind", icon: <SiTailwindcss size={30} color="#38BDF8" /> },
        { name: "JavaScript", icon: <FaJs size={30} color="#F7DF1E" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript size={30} color="#3178C6" />,
        },
        { name: "Angular", icon: <SiAngular size={30} color="#DD0031" /> },
        { name: "React.js", icon: <FaReact size={30} color="#61DAFB" /> },
      ],
    },
    {
      title: "Back-end",
      skills: [
        { name: "Node.js", icon: <FaNode size={30} color="#339933" /> },
        { name: "Express.js", icon: <SiExpress size={30} color="#000000" /> },
        { name: "Nest.js", icon: <SiNestjs size={30} color="#E0234E" /> },
        { name: "GraphQL", icon: <SiGraphql size={30} color="#E10098" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={30} color="#47A248" /> },
        {
          name: "MS SQL",
          icon: <SiMicrosoftsqlserver size={30} color="#CC2927" />,
        },
      ],
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", icon: <FaAws size={30} color="#232F3E" /> },
        { name: "Azure", icon: <FaMicrosoft size={30} color="#0078D4" /> },
        { name: "Git", icon: <FaGitAlt size={30} color="#F05032" /> },
      ],
    },
  ];

  return (
    <div
      className="w-full mx-auto flex flex-col gap-8 p-5 m-2.5 bg-white rounded-2xl border-3 border-black relative filter drop-shadow-custom bg-pattern"
      id="skills"
      ref={ref}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-comic text-center mb-8"
      >
        My Superpowers
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="skill-category"
          >
            <h3 className="text-3xl font-comic mb-4">{category.title}</h3>
            <div className="grid grid-cols-3 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + skillIndex * 0.1,
                  }}
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-xl border-2 border-gray-200"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <span className="text-lg font-comic">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
