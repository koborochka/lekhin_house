// components/admin/PetEdit.js
import { Edit, SimpleForm, TextInput, SelectInput, EditProps, DateInput } from 'react-admin';

const PetEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" label="Имя" />
      <TextInput source="breed" label="Порода" />
      <SelectInput source="gender" label="Пол" choices={[
        { id: 'male', name: 'Мужской' },
        { id: 'female', name: 'Женский' },
      ]} />
      <DateInput source="birthdate" label="Дата рождения"/>
      <SelectInput source="type" label="Тип" choices={[
        { id: 'dog', name: 'Собака' },
        { id: 'cat', name: 'Кот' },
      ]} />
      <TextInput source="about" label="О питомце" />
      <TextInput source="description" label="Описание" />
      <TextInput source="images_url[0]" label="URL фото" />
    </SimpleForm>
  </Edit>
);

export default PetEdit;
