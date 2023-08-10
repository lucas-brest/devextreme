import List from 'devextreme-react/list';
import Button from 'devextreme-react/button';
 
const items = [{name: 'Primero'},{name: 'Segundo'},{name: 'Tercero'},{name: 'Cuarto'},]

const renderListItem = (item) => {
    return <p>{item.name.toUpperCase()}</p>;
}
const renderButton = (button) => {
    return <div style={{ padding: 20 }}><p>{button.text}</p></div>;
}

const TemplateRenderingFunction = () => {
  return (
    <div>
      <h2>Rendering Function</h2>
      <List itemRender={renderListItem} dataSource={items}/>
      <Button render={renderButton} text='Botón'/>
    </div>
  )
}

export default TemplateRenderingFunction