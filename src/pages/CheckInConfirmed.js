import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/core';
import { PageWrapper } from 'components/molecules';
import { PageTitle } from 'components/atoms';
import IconChecked from 'components/icons/Checked';
import { Link } from 'react-router-dom';

const CheckInConfirmed = () => {
  return (
    <PageWrapper>
      <Flex py="3rem" flexDirection="column" alignItems="center" justifyContent="center">
        <PageTitle>Your check-in is confirmed!</PageTitle>

        <Box mb="2rem">
          <IconChecked width={120} height={120} />
        </Box>

        <Button as={Link} to="/">
          Return to home
        </Button>
      </Flex>
    </PageWrapper>
  );
};

export default CheckInConfirmed;
