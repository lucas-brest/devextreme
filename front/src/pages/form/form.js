import { Form } from "devextreme-react"
import { ButtonItem, GroupItem, RequiredRule, SimpleItem } from "devextreme-react/form"
import { useCallback, useMemo } from "react"

const userModel = {
  name: '',
  mail: '',
  birthdate: '',
  password: ''
}

const passwordOptions = {
  mode: 'password'
}

const FormExample = () => {

  const buttonOptions = useMemo(()=> ({
    text: 'Submit',
    type: 'default',
    useSubmitBehavior: true
  }),[])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    console.log(userModel);
  }, [])

  return (
    <>
      <h2 className={'content-block'}>Form</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          <form onSubmit={handleSubmit}>
            <Form formData={userModel}>
              <GroupItem colCount={3}>
                <SimpleItem dataField="name" />
                <SimpleItem dataField="mail"/>
                <SimpleItem dataField="birthdate" editorType="dxDateBox"/>
              </GroupItem>
              <GroupItem colCount={2}>
                <SimpleItem 
                  dataField="password" 
                  editorOptions={passwordOptions}
                  >
                  <RequiredRule message="Password is required" />
                </SimpleItem>
              </GroupItem>
              <ButtonItem buttonOptions={buttonOptions}/>
            </Form>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormExample