export const textFadeIn = (delay) => {
  return {
      hidden: { y: 20, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          delay: delay,
        },
      },
    }
  };

  export const listFadeIn = (delay) => {
    return {
      hidden: {
        x: -1,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 1.4,
          ease: "easeInOut",
        },
      },
    }
  }
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };