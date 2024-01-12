import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';

const tableHeadings = ['User Name', 'Distance', 'Is Broadcaster'];

export const UsersInViewTable = (props) => {
  const { usersInView } = props;
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHeadings.map((heading) => (
            <TableCell key={`heading-${heading}`}>{heading}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {usersInView.map((user, index) => {
          const tableRow = [
            user.username,
            user.distanceFromCenter,
            user.is_broadcaster
          ];
          return (
            <TableRow key={`row-${index}`}>
              {tableRow.map((cell, index) => (
                <TableCell key={`cell-${index}`}>{`${cell}`}</TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
