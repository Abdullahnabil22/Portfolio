"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const projects = [
    {
      title: "Booking.com clone",
      image: "/Booking.png",
      link: "https://booking-mearn-front.vercel.app/",
    },
    {
      title: "Movies Website",
      image: "/Movie.png",
      link: "https://an-ten.vercel.app/",
    },
  ];

  const showBubble = (direction: "prev" | "next") => {
    const bubble = document.querySelector(`.swiper-button-${direction}-effect`);
    bubble?.classList.remove("hidden");
    setTimeout(() => {
      bubble?.classList.add("hidden");
    }, 500);
  };

  return (
    <div
      className="w-full mx-auto flex flex-col gap-8 p-5 m-2.5 bg-white rounded-2xl border-3 border-black filter drop-shadow-custom bg-pattern"
      id="projects"
      ref={ref}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-comic text-center mb-8"
      >
        My Heroic Feats
      </motion.div>

      <motion.div
        className="relative w-full max-w-4xl mx-auto px-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div
          className="swiper-button-prev-effect hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 
                      font-comic text-2xl bg-white p-4 rounded-full transform rotate-12 
                      border-2 border-black"
        >
          WHOOSH!
        </div>
        <div
          className="swiper-button-next-effect hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 
                      font-comic text-2xl bg-white p-4 rounded-full transform -rotate-12 
                      border-2 border-black"
        >
          KAPOW!
        </div>
        <Swiper
          modules={[Navigation, Virtual]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className="w-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.a
                href={project.link}
                className="block w-full"
                target="_blank"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="swiper-lazy object-contain w-full h-full rounded-lg"
                    width={1200}
                    height={675}
                    priority
                  />
                </div>
                <h3 className="text-2xl font-comic text-center mt-1">
                  {project.title}
                </h3>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => {
            (
              document.querySelector(".swiper-button-prev") as HTMLElement
            )?.click();
            showBubble("prev");
          }}
          className="swiper-button-prev absolute left-60 top-1/2 -translate-y-1/2 z-10 
                     font-comic text-4xl p-2 transform hover:scale-110 
                     transition-transform text-black font-bold"
        >
          {`<`}
        </button>
        <button
          onClick={() => {
            (
              document.querySelector(".swiper-button-next") as HTMLElement
            )?.click();
            showBubble("next");
          }}
          className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 
                     font-comic text-4xl p-2 transform hover:scale-110 
                     transition-transform font-bold"
        >
          {`>`}
        </button>
      </motion.div>
    </div>
  );
}

export default Projects;
