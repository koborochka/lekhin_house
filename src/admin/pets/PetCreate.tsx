import { Create, SimpleForm, TextInput, SelectInput, CreateProps, DateInput, ImageField, ImageInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

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
      <TextInput source="description" label="Описание" helperText='Краткое описание питомца' />
	  <RichTextInput toolbar={[]} source="about" label="О питомце" helperText='Полное описание питомца' fullWidth />
      <DateInput source="birthdate" label="Дата рождения питомца" />
      <ImageInput 
        source="images_url" 
        label="Фотографии" 
        accept={{ 'image/*': ['.jpg', '.jpeg', '.png', '.jfif'] }} 
        placeholder="Нажмите, чтобы загрузить новые фотографии или перетащите несколько." 
        multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export default PetCreate;
