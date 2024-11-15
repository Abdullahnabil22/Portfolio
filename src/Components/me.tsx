"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Me() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <div
      className="mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-8 p-5 bg-white rounded-2xl border-3 border-black relative filter drop-shadow-custom bg-pattern overflow-hidden"
      ref={ref}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-3 border-black p-8 relative max-w-[400px] rounded-2xl comic-speech-bubble md:mb-0 mb-12"
      >
        <h1 className="text-5xl font-comic m-0">
          Hi, I&apos;m Abdullah Nabil!
        </h1>
        <p className="text-3xl font-comic mt-2.5 mb-0">
          A Full Stack Developer
        </p>
      </motion.div>
      <motion.div
        className="rounded-lg p-5 justify-start self-start flex flex-1 relative"
        style={{ perspective: "1000px" }}
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ width: 400, height: 400, position: "relative" }}>
          <motion.div
            className="flip-card-inner  md:block"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
              }}
            >
              <Image
                src="/hi.png"
                alt="me"
                width={400}
                height={400}
                loading="eager"
                priority={true}
                className="cursor-pointer w-96 h-96 md:w-full md:h-full mx-auto"
              />
            </div>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Image
                src="/me2.jpg"
                alt="me"
                width={400}
                height={400}
                className="rounded-2xl cursor-pointer   w-96 h-96 md:w-full md:h-full mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Me;
