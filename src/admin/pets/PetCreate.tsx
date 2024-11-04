// components/admin/PetCreate.js
import { Create, SimpleForm, TextInput, NumberInput, SelectInput, CreateProps } from 'react-admin';

const PetCreate = (props: CreateProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label="Имя" />
      <TextInput source="breed" label="Порода" />
      <SelectInput source="gender" label="Пол" choices={[
        { id: 'male', name: 'Мужской' },
        { id: 'female', name: 'Женский' },
      ]} />
      <NumberInput source="age" label="Возраст" />
      <SelectInput source="type" label="Тип" choices={[
        { id: 'cat', name: 'Кот' },
        { id: 'dog', name: 'Собака' },
      ]} />
      <TextInput source="about" label="О питомце" />
      <TextInput source="description" label="Описание" />
      <TextInput source="images_url[0]" label="URL фото" />
    </SimpleForm>
  </Create>
);

export default PetCreate;
