import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import pets from './pets'
import Dashboard from './Dashboard';

const dataProvider = simpleRestProvider('http://localhost:8080/api/'); // URL backend API

export default function AdminPage() {
  return (
    <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="admin/pets" {...pets} />
        <div>admin yep</div>
    </Admin>
  )
}

