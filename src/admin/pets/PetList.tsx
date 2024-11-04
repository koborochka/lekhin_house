import { List, Datagrid, TextField, NumberField, ImageField, EditButton, DeleteButton, ListProps, SearchInput, SelectInput, FunctionField } from 'react-admin';
import { formatAge } from '../../utils/utils';
import IPet from '../../interfaces/IPet';

const postFilter = [
  <SearchInput source="q" alwaysOn />,
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
        <FunctionField label="Возраст" source="birthdate" render={(record: IPet) => formatAge(record.birthdate)} />       
        <TextField source="type" label="Тип" sortable={false} />
        <TextField source="about" label="О питомце" sortable={false} />
        <TextField source="description" label="Описание" sortable={false} />
        <ImageField source="images_url[0]" label="Фото" sortable={false} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

export default PetList;
