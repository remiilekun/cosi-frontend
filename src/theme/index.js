import { theme } from '@chakra-ui/core';
import { mq } from './media-query';

const customTheme = {
  ...theme,
  mq: mq(theme.breakpoints),
};

export default customTheme;
