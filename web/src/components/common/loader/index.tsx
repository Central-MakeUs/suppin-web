import { motion, Variants } from 'framer-motion';
import { BarLoaderWrapper, SpinLoaderWrapper } from './loader.styles';

const variants: Variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 1,
      ease: 'circIn',
    },
  },
};

export const BarLoader = () => {
  return (
    <BarLoaderWrapper>
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="animate"
        className="bar-container"
      >
        <motion.div variants={variants} className="bar" />
        <motion.div variants={variants} className="bar" />
        <motion.div variants={variants} className="bar" />
        <motion.div variants={variants} className="bar" />
        <motion.div variants={variants} className="bar" />
      </motion.div>
    </BarLoaderWrapper>
  );
};

export const SpinLoader = () => {
  return (
    <SpinLoaderWrapper>
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </SpinLoaderWrapper>
  );
};
