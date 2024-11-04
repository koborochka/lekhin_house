import { List, Datagrid, TextField, NumberField, ImageField, EditButton, DeleteButton, ListProps, SearchInput, TextInput, SelectInput, useSortState } from 'react-admin';

const postFilter = [
  <SearchInput source="q" alwaysOn />,
  <TextInput source="name" />,
  <SelectInput source="type" choices={[
    { id: 'cat', name: 'Коты' },
    { id: 'dog', name: 'Собаки' },
  ]} />,
  <SelectInput source="gender" choices={[
    { id: 'male', name: 'Мальчики' },
    { id: 'female', name: 'Девочки' },
  ]} />
];

const PetList = (props: ListProps) => {

  return (
    <List {...props} filters={postFilter} sort={{ field: 'age', order: 'ASC' }}>
      <Datagrid>
        <NumberField source="id" />
        <TextField source="name" label="Имя" sortable={false} />
        <TextField source="breed" label="Порода" sortable={false} />
        <TextField source="gender" label="Пол" sortable={false} />
        <TextField source="age" label="Возраст" sortByOrder='ASC'/>
        <TextField source="type" label="Тип" sortable={false} />
        <TextField source="about" label="О питомце" sortable={false} />
        <ImageField source="images_url[0]" label="Фото" sortable={false} /> {/* Отображаем первое изображение */}
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

export default PetList;
