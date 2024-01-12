import './App.css';
import useWindowSize from './utils/useWindowSize';
import { useState } from 'react';
import { UserList } from './components/UserList';
import { PeerUser } from './components/PeerUser';
import { USER_LIST } from './utils/constants';
import {
  Button,
  Box,
  Dialog,
  DialogContent,
  TextField,
  Typography
} from '@material-ui/core';

function App() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [centerPosition, setCenterPosition] = useState({
    x: 800,
    y: 400
  });
  const { screenWidth, screenHeight } = useWindowSize();

  const handleDialogClick = () => {
    setDialogIsOpen(true);
  };
  const setPositionValues = () => {
    setDialogIsOpen(false);
  };

  const renderUsersFromList = () => {
    return Object.values(USER_LIST).map((user) => (
      <PeerUser
        key={user.username}
        top={`${user.y}px`}
        left={`${user.x}px`}
        name={user.username}
      />
    ));
  };

  return (
    <div className='App'>
      <Box position='fixed' top='10px' left='50px' width='500px' border='1px solid black' bgcolor='rgba(0,0,0,.5)'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant='contained' onClick={() => handleDialogClick()}>
            Create User List
          </Button>
        </div>
        <UserList
          centerPosition={centerPosition}
          dialogIsOpen={dialogIsOpen}
          screenWidth={screenWidth}
          screenHeight={screenHeight}
        />
      </Box>

      <PeerUser
        top={`${centerPosition.y}px`}
        left={`${centerPosition.x}px`}
        name='You'
      />
      {renderUsersFromList()}

      <Dialog open={dialogIsOpen} onClose={() => setDialogIsOpen(false)}>
        <DialogContent
          sx={{
            position: 'fixed',
            height: '200px',
            width: '400px'
          }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Typography>X:</Typography>
            <TextField
              variant='standard'
              value={centerPosition.x}
              onChange={(e) =>
                setCenterPosition((prevCenter) => ({
                  ...prevCenter,
                  x: e.target.value
                }))
              }></TextField>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Typography>Y:</Typography>
            <TextField
              variant='standard'
              value={centerPosition.y}
              onChange={(e) =>
                setCenterPosition((prevCenter) => ({
                  ...prevCenter,
                  y: e.target.value
                }))
              }></TextField>
          </Box>
          <Box>
            <Button variant='contained' onClick={() => setPositionValues()}>
              Set New Center Point
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
