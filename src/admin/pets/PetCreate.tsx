import { Create, SimpleForm, TextInput, SelectInput, CreateProps, DateInput } from 'react-admin';

const PetCreate = (props: CreateProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label="Имя" />
      <TextInput source="breed" label="Порода" />
      <SelectInput source="gender" label="Пол" choices={[
        { id: 'male', name: 'Мужской' },
        { id: 'female', name: 'Женский' },
      ]} />
      <SelectInput source="type" label="Тип" choices={[
        { id: 'cat', name: 'Кот' },
        { id: 'dog', name: 'Собака' },
      ]} />
      <TextInput source="about" label="О питомце" />
      <TextInput source="description" label="Описание" />
      <TextInput source="images_url[0]" label="URL фото" />
      <DateInput source="birthdate" label="Дата рождения питомца" />
    </SimpleForm>
  </Create>
);

export default PetCreate;
