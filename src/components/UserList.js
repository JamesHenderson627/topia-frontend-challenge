import React, { useEffect, useState } from 'react';
import listUsersInView from '../utils/listUsersInView';
import { USER_LIST } from '../utils/constants';
import { Container, Box, Typography } from '@material-ui/core';
import { UsersInViewTable } from './UsersInViewTable';

export const UserList = (props) => {
  const { centerPosition, dialogIsOpen, screenWidth, screenHeight } = props;
  const [usersInView, setUsersInView] = useState([]);

  useEffect(() => {
    if (!dialogIsOpen) {
      setUsersInView((previousUsers) => {
        const usersInView = listUsersInView(
          USER_LIST,
          centerPosition.x,
          centerPosition.y,
          screenWidth,
          screenHeight
        );
        const scrollX = centerPosition.x - screenWidth / 2;
        const scrollY = centerPosition.y - screenHeight / 2;
        window.scrollTo(scrollX, scrollY);
        return usersInView;
      });
    }
  }, [dialogIsOpen, centerPosition, screenWidth, screenHeight]);

  // TODO: Create a Modal component with inputs for position and screen size (screen size should default to actual window width and height but be editable).
  // CTA in Modal should close modal, call listUsersInView with updated values, and update usersInView
  // Add a list of the users in view in the render statement below

  return (
    <Container maxWidth='md'>
      <Box my={4}>
        <Typography variant='h5' component='h1' gutterBottom>
          The following Users are currently visible based on position and screen
          size.
        </Typography>
        <UsersInViewTable usersInView={usersInView} />
      </Box>
      {usersInView.length === 0 && (
        <Box my={4}>
          <Typography component='p' gutterBottom>
            There are currently no users within view.
          </Typography>
        </Box>
      )}
    </Container>
  );
};
