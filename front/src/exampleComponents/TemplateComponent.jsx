import React from 'react'
import { Template } from 'devextreme-react';
import Form ,{ Item } from 'devextreme-react/form';

const employee = {
  ID: 1,
  FirstName: 'John',
  LastName: 'Heart',
  Position: 'CEO',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Address: '351 S Hill St., Los Angeles, CA',
  Phone: '360-684-1334',
  Email: 'jheart@dx-email.com'
};

const positions = [
  'HR Manager',
  'IT Manager',
  'CEO',
  'Controller',
  'Sales Manager',
  'Support Manager',
  'Shipping Manager'
];

const renderSelectBoxItem = (item) => {
  return <div>{item.toUpperCase()}</div>;
}

const positionEditorOptions = {
  items: positions,
  value: '',
  itemTemplate: 'selectBoxItem'
};

const TemplateComponent = () => {
  return (
    <div>
      <h2>Template Component</h2>

      <Form formData={employee}>
        <Item
            dataField="Position"
            editorType="dxSelectBox"
            editorOptions={positionEditorOptions}
        />
        <Template name="selectBoxItem" render={renderSelectBoxItem} />
      </Form>
    </div>
  )
}

export default TemplateComponent