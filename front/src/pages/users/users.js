import React from 'react';
import './users.scss';
import { DataGrid } from 'devextreme-react';
import { Column, Editing, Paging } from 'devextreme-react/data-grid';
import ODataStore from 'devextreme/data/odata/store';
import { FilterRow } from 'devextreme-react/data-grid';

export default () => {
  
  const handleRemove = (e) => {
    // e.cancel = true;
    // e.changes = e.changes.map(c => ({...c, key: c.key.UserId}))
    // console.log(e.cancel());
    e.key = e.key.UserId
    console.log(e);
  }

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Users</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          <DataGrid
            dataSource={dataSource}
            onRowRemoving={handleRemove}
          >
            <Editing 
              mode='row'
              allowDeleting={true}
              allowAdding={true}
              allowUpdating={true}
            />
            <FilterRow visible={true}/>
            <Paging defaultPageSize={3} />
            <Column dataField="UserId" />
            <Column dataField="UserName" />
            
          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  )
};

const dataSource = new ODataStore({
  url: 'https://localhost:7273/odata/user',  
  select: [
    'UserId',
    'UserName'
  ],
  key: ['UserId'],
  keyType: {
    UserId: 'Int32'
  },
  version: 4
});