"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const Projects = () => {
  const projectItems = [
    {
      title: "EcoThreads",
      description:
        "A platform connecting second-hand cloth sellers with recycling companies to promote sustainability.",
      link: "https://dashboard-pi-tan-87.vercel.app/",
      image: "/images/landingecothreads.png",
    },
    {
      title: "Tiberbu",
      description:
        "A responsive health app built with react featuring a user-friendly interface for browsing and patients can book doctors appointments online.",
      link: "https://tiberbu.vercel.app/",
      image: "/images/tiberbu.png",
    },
    {
      title: "Safari Desk",
      description:
        "A responsive Ticket Booking application built with nextjs featuring a user-friendly interface for booking safari tickets online.",
      link: "https://safaridesk-beta.vercel.app/",
      image: "/images/safari.png",
    },
    {
      title: "Hotel App",
      description:
        "A user-friendly hotel booking platform built with React, allowing users to search for rooms, check availability, and make reservations seamlessly, updated via JSON APIs.",
      link: "https://hotel-booking-topaz-two.vercel.app/",
      image: "/images/hotepage.png",
    },
    {
      title: "Food House",
      description:
        "A responsive food ordering app built with Next.js, featuring a user-friendly interface for ordering food.",
      link: "https://foodhouse-puce.vercel.app/",
      image: "/images/foodhouse.png",
    },
    {
      title: "Brickhouse",
      description:
        "A user-friendly app built with Next.js, offering a seamless experience for buyers and sellers of movie shows.",
      link: "https://brick-house-ebon.vercel.app/",
      image: "/images/brickhouse.png",
    },
 
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectItems.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 h-[400px] w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="object-cover rounded-md mb-6 h-[200px] w-full"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-gray-800 hover:text-blue-800 transition-colors duration-300 flex items-center mb-4"
              >
                {project.title} <FaExternalLinkAlt className="ml-2" />
              </a>
              <p className="text-black-500 mb-4 text-[12px] ">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
