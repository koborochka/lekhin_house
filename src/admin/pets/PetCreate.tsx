import { Create, SimpleForm, TextInput, SelectInput, CreateProps, DateInput, FileInput, FileField } from 'react-admin';
  
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
      <TextInput source="description" label="Описание" helperText='Краткое описание питомца'/>
      <TextInput source="about" label="О питомце" helperText='Полное описание питомца'/>
      <DateInput source="birthdate" label="Дата рождения питомца" />
      <FileInput source="images_url" label="Фотографии" accept={{ 'image/*': ['.jpg', '.jpeg', '.png', '.jfif'] }} multiple>
        <FileField source="title" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export default PetCreate;
