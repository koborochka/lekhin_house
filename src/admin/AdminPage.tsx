import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import pets from './pets'
import Dashboard from './Dashboard';

const dataProvider = simpleRestProvider('http://localhost:8080/api');

export default function AdminPage() {
  return (
    <Admin basename="/admin"  dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource {...pets} />
    </Admin>
  )
}

