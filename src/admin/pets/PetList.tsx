import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin';

const PetList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="breed" />
      <TextField source="age" />
      <TextField source="gender" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default PetList;
