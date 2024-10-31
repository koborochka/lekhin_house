// components/admin/PetEdit.js
import { Edit, SimpleForm, TextInput, NumberInput, SelectInput, EditProps } from 'react-admin';

const PetEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" label="Имя" />
      <TextInput source="breed" label="Порода" />
      <SelectInput source="gender" label="Пол" choices={[
        { id: 'male', name: 'Мужской' },
        { id: 'female', name: 'Женский' },
      ]} />
      <NumberInput source="age" label="Возраст" />
      <TextInput source="type" label="Тип" />
      <TextInput source="about" label="О питомце" />
      <TextInput source="description" label="Описание" />
      <TextInput source="images_url[0]" label="URL фото" />
    </SimpleForm>
  </Edit>
);

export default PetEdit;
