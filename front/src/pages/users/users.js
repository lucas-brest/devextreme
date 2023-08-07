import React from 'react';
import './users.scss';
import { DataGrid } from 'devextreme-react';
import { Column } from 'devextreme-react/data-grid';

export default () => (
  <React.Fragment>
    <h2 className={'content-block'}>Users</h2>
    <div className={'content-block'}>
      <div className={'dx-card responsive-paddings'}>
        
        <DataGrid
          dataSource={dataSource}
        >

        </DataGrid>

      </div>
    </div>
  </React.Fragment>
);

const dataSource = {
  store: {
    type: 'odata',
    key: 'UserId',
    url: 'https://localhost:7273/api/user'
  },
  select: [
    'UserId',
    'UserName'
  ]
}