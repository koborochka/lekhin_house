import { Edit, SimpleForm, TextInput, SelectInput, EditProps, DateInput, FileInput, FileField} from 'react-admin';

const PetEdit = (props: EditProps) => {
  return (
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
      <FileInput
          source="images_url"
          label="Фотографии"
          accept={{ 'image/*': ['.jpg', '.jpeg', '.png', '.jfif'] }}
          multiple
        >
          <FileField source="src" title="title" />
        </FileInput>
    </SimpleForm>
  </Edit>
)};

export default PetEdit;
