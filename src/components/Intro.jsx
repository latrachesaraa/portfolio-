import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

import { design } from "../design";
import { ComputersCanvas } from "./canvas";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px]  max-w-7xl mx-auto ${design.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${design.heroHeadText} text-white`}>
           {t('intro.greeting')} <span className='text-[#915EFF]'>{t('intro.name')}</span>
          </h1>
          <p className={`${design.heroSubText} mt-2 text-white-100`}>
           {t('intro.subtitle')} <br className='sm:block hidden' />
        {t('intro.description')}
          </p>
        </div>
      </div>

      <ComputersCanvas />

    </section>
  );
};

export default Intro;