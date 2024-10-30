import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const PetEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="breed" />
      <NumberInput source="age" />
      <TextInput source="gender" />
    </SimpleForm>
  </Edit>
);

export default PetEdit;