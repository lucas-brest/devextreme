import React from 'react';
import List from 'devextreme-react/list';
import Button from 'devextreme-react/button';

class ListItemTmpl extends React.PureComponent {
    render() {
        return (
            <p>{this.props.data.name.toLowerCase()}</p>
        );
    }
}
 
class ButtonTmpl extends React.PureComponent {
    render() {
        return (
            <div>
                <p>{this.props.data.text}</p>
            </div>
        );
    }
}
 
class App extends React.Component {

  state = {
    items : [{name: 'Primero'},{name: 'Segundo'},{name: 'Tercero'},{name: 'Cuarto'},]

  }

  render() {
      return (
          <div>
              <h2>Rendering Class Component</h2>
              <List itemComponent={ListItemTmpl} dataSource={this.state.items}/>
              <Button component={ButtonTmpl} text='button'/>
          </div>
      );
  }
}

export default App