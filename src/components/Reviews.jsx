import React, { useState } from "react";
import { motion } from "framer-motion";

import { design } from "../design";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../tools/mvn";
import { testimonials } from "../data/myPersonalData";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 300;
  const isLongText = testimonial.length > characterLimit;
  
  const displayText = isExpanded || !isLongText 
    ? testimonial 
    : `${testimonial.substring(0, characterLimit)}...`;

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] xl:w-[450px]'
    >
      <p className='text-white font-black text-[48px]'>"</p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[16px] leading-relaxed'>
          {displayText}
        </p>
        
        {isLongText && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='mt-2 text-blue-500 hover:text-blue-400 text-[14px] font-medium transition-colors'
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  );
};

const Reviews = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${design.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={design.sectionSubText}>What others say</p>
          <h2 className={design.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${design.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Reviews, "");