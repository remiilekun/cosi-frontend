import { theme } from '@chakra-ui/core';
import { mq } from './media-query';

const customTheme = {
  ...theme,
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
    mono: "'Poppins', sans-serif",
  },
  mq: mq(theme.breakpoints),
};

export default customTheme;
