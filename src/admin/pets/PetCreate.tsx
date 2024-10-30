import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const PetCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="breed" />
      <NumberInput source="age" />
      <TextInput source="gender" />
    </SimpleForm>
  </Create>
);

export default PetCreate;
