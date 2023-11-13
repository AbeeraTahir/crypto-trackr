export const textFadeIn = () => {
  return {
      hidden: { opacity: 0, y: 20 },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.25,
          delay: 0.1,
          ease: "easeInOut"
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