import React from 'react';
import './users.scss';
import { DataGrid } from 'devextreme-react';
import { Column, Editing, EmailRule, Paging, ValidationRule } from 'devextreme-react/data-grid';
import { FilterRow } from 'devextreme-react/data-grid';

export default () => {
  
  console.log("Reenderiza");

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Users</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          <DataGrid
            dataSource={dataSource}
            customizeColumns={(c) => c[0].width = 60}
            // keyExpr='UserId'
          >
            <Editing 
              mode='row'
              allowDeleting={true}
              allowAdding={true}
              allowUpdating={true}
            />
            <FilterRow visible={true}/>
            <Paging defaultPageSize={6} />
            
            <Column dataField="UserId" caption="ID" allowEditing={false} />
            <Column dataField="FirstName" />
            <Column dataField="LastName" />
            <Column dataField="Email" />
            <Column dataField="BirthDate" />

          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  )
};

const dataSource = {
  store: {
    type: 'odata',
    key: 'UserId',
    keyType: {
      UserId: 'Int32'
    },
    url: 'https://localhost:7273/odata/user',
    version: 4
  },
  select: [
    'UserId',
    'FirstName',
    'LastName',
    'Email',
    'BirthDate'
  ],
};


// const dataSource = new ODataStore({
//   url: 'https://localhost:7273/odata/user',  
//   select: [
//     'UserId',
//     'UserName'
//   ],
//   key: ['UserId'],
//   keyType: {
//     UserId: 'Int32'
//   },
//   version: 4
// });
  