import { List, Datagrid, TextField, NumberField, ImageField, EditButton, DeleteButton, ListProps } from 'react-admin';

const PetList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" label="Имя" />
      <TextField source="breed" label="Порода" />
      <TextField source="gender" label="Пол" />
      <NumberField source="age" label="Возраст" />
      <TextField source="type" label="Тип" />
      <TextField source="about" label="О питомце" />
      <ImageField source="images_url[0]" label="Фото" /> {/* Отображаем первое изображение */}
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default PetList;
