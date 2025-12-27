import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { design } from "../design";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../data/myPersonalData";
import { fadeIn, textVariant } from "../tools/mvn";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  company,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 150;
  const isLongText = description.length > characterLimit;

  const displayText = isExpanded || !isLongText 
    ? description 
    : `${description.substring(0, characterLimit)}...`;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-1 text-[16px] font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic'>
            {company}
          </p>
          <p className='mt-2 text-secondary text-[14px]'>
            {displayText}
            {isLongText && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className='ml-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200'
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            )}
          </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${design.sectionSubText} `}>My work</p>
        <h2 className={`${design.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
The following projects highlight my professional experience as a Full Stack and Backend Developer, working on real-world applications in production. They demonstrate my ability to design scalable architectures, build REST and GraphQL APIs, optimize performance, and collaborate within Agile teams, while showcasing hands-on experience with modern JavaScript frameworks, Golang services, databases, and cloud solutions. Personal projects include full technical details, features, and source code when available. For company projects, I provide clear descriptions of functionality, my role, and contributions. Due to confidentiality agreements, source code and live demos for company projects are not shared.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");