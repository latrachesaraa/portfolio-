import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { design } from "../design";
import { services } from "../data/myPersonalData";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../tools/mvn";
import { RobotCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={design.sectionSubText}>Introduction</p>
        <h2 className={design.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Flex container for text and 3D model */}
      <div className='flex flex-col lg:flex-row lg:gap-10 items-start'>
        {/* Text content */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1'
        >
          I am a Full Stack Developer with over 3 years of experience building
          high-performance, scalable web applications. I specialize in JavaScript
          and Golang, with strong expertise in both front-end and back-end
          development using technologies such as React, Node.js, Express, and
          modern Go frameworks.
          <br /><br />
          I have a proven track record of delivering efficient solutions that
          improve performance and user engagement, including reducing load times,
          optimizing backend architectures, and developing robust REST and
          GraphQL APIs. I'm experienced in managing projects from concept to
          production, collaborating with teams and clients to translate business
          needs into reliable, user-friendly applications.
          <br /><br />
          Passionate about clean architecture, performance optimization, and
          continuous learning, I also enjoy sharing knowledge through mentoring
          and JavaScript training.
        </motion.p>

        {/* 3D Computer Model - right side on desktop, below text on mobile */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className='w-full lg:w-[500px] lg:min-w-[500px] h-[350px] lg:h-[500px] mt-8 lg:mt-0'
        >
          <RobotCanvas />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");