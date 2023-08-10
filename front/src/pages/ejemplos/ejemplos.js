import UseRefUse from '../../exampleComponents/UseRefUse';
import TemplateRenderingFunction from '../../exampleComponents/TemplateRenderingFunction';
import TemplateComponent from '../../exampleComponents/TemplateComponent';
import TemplateRenderingComponent from '../../exampleComponents/TemplateRenderingComponent'
import Validation from '../../exampleComponents/Validation'

export default () => (
  <>
    <h2 className={'content-block'}>Ejemplos</h2>
    <div className={'content-block'}>
      <div className={'dx-card responsive-paddings'}  style={{display: 'flex', flexDirection: 'column', gap:'2rem'}}>

        <TemplateRenderingFunction />
        <TemplateRenderingComponent />
        <TemplateComponent />
        <UseRefUse />
        <Validation />
      </div>
    </div>
  </>
);

