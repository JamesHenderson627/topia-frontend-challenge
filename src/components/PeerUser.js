import { Box, Typography } from "@material-ui/core";

export const PeerUser = (props) => {
  const {top, left, name} = props;
  return <Box position='absolute' top={top} left={left} transform= 'translate(-50%-50%)' height= '125px' width='50px' border='2px solid black'>
    <Typography>{name}</Typography>
  </Box>
}