import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProvider from './DataProvider';
import { ToolList, ToolEdit, ToolCreate } from './tools';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="tools" list={ToolList} edit={ToolEdit} create={ToolCreate} />
    <Resource name="tool_types" list={ListGuesser} />
  </Admin>
);
export default App;