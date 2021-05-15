const getClosedMenuLineY = (lineNumber: number) => {
  switch (lineNumber) {
    case 1:
      return -4;
    case 2:
      return 0;
    case 3:
      return 4;
    default:
      return 0;
  }
};

export const menuLine = {
  hidden: { opacity: 0 },
  closed: (lineNumber: number) => ({
    x: '-50%',
    y: getClosedMenuLineY(lineNumber),
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  }),
  condensed: {
    x: '-50%',
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
  opened: (lineNumber: number) => ({
    x: '-50%',
    y: 0,
    rotate: lineNumber === 1 ? -45 : 45,
    transition: {
      duration: 0.5,
    },
  }),
};
