import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

import "react-vertical-timeline-component/style.min.css";

import { design } from "../design";
import { experiences } from "../data/myPersonalData";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../tools/mvn";

const ExperienceCard = ({ experience, index }) => {
  const { t } = useTranslation();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={t(`experience.${experience.id}.date`)}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{t(`experience.${experience.id}.title`)}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {t(`experience.${experience.id}.company_name`)}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, pointIndex) => (
          <li
            key={`experience-point-${index}-${pointIndex}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {t(`experience.${experience.id}.points.${pointIndex}`)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${design.sectionSubText} text-center`}>
          {t('experience.subtitle')}
        </p>
        <h2 className={`${design.sectionHeadText} text-center`}>
          {t('experience.title')}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");