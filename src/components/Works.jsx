import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

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
  id,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const characterLimit = 150;
  const translatedDescription = t(`projects.${id}.description`);
  const isLongText = translatedDescription.length > characterLimit;

  const displayText = isExpanded || !isLongText 
    ? translatedDescription 
    : `${translatedDescription.substring(0, characterLimit)}...`;

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
          <h3 className='text-white font-bold text-[24px]'>{t(`projects.${id}.name`)}</h3>
          <p className='mt-1 text-[16px] font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic'>
            {t(`projects.${id}.company`)}
          </p>
          <p className='mt-2 text-secondary text-[14px]'>
            {displayText}
            {isLongText && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className='ml-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200'
              >
                {isExpanded ? t('projects.readLess') : t('projects.readMore')}
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
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${design.sectionSubText} `}>{t('projects.subtitle')}</p>
        <h2 className={`${design.sectionHeadText}`}>{t('projects.title')}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {t('projects.description')}
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