import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';

import pets from './pets'
import Dashboard from './Dashboard';


export default function AdminPage() {
  return (
    <Admin basename="/admin"  dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource {...pets} />
    </Admin>
  )
}

