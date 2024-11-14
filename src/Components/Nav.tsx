"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuItems = [
    { href: "#experience", label: "My Origin Story" },
    { href: "#skills", label: "My Superpowers" },
    { href: "#projects", label: "My Heroic Feats" },
    { href: "#contact", label: "Get in Touch" },
  ];

  return (
    <>
      <div className="w-full   border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hidden md:block">
        <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto w-full   ">
          <div className="grid grid-cols-3 w-full items-center">
            <div className="col-span-1">
              <Link href="/" className="relative">
                <h1 className="font-bold text-xl  p-2 ">
                  {`<> ABDULLAH NABIL </>`}
                </h1>
              </Link>
            </div>
            <div className="col-span-2 flex justify-end">
              <ul className="flex items-center gap-6">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="relative font-bold hover:-translate-y-1 transition-transform inline-block
                    after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black 
                    after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 
                    after:transition-transform after:duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="block md:hidden ">
        <motion.div
          className="fixed top-4 right-4 z-50"
          whileTap={{ scale: 0.95 }}
        >
          <IoMenu
            className="text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            role="button"
          />
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-black/90 z-40 flex items-center justify-center"
            >
              <motion.ul
                className="flex flex-col items-center space-y-8 text-white text-xl"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      closed: { opacity: 0, y: 20 },
                      open: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-gray-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Nav;
