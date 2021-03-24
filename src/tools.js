import * as React from "react";
import { 
    List, Datagrid, TextField, NumberField, EditButton, 
    Edit, SimpleForm, TextInput, NumberInput 
} from 'react-admin';

// <Datagrid rowClick="edit">
export const ToolList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="type" />
            <TextField source="location" />
            <NumberField source="num_units" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ToolEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="type" />
            <TextInput source="location" />
            <NumberInput source="num_units" />
        </SimpleForm>
    </Edit>
);

export const ToolCreate = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="type" />
            <TextInput source="location" />
            <NumberInput source="num_units" />
        </SimpleForm>
    </Edit>
);