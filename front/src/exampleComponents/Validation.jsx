import React, { useState, useCallback } from 'react';
import TextBox from 'devextreme-react/text-box';
import Validator, { RequiredRule, EmailRule } from 'devextreme-react/validator';
import ValidationGroup from 'devextreme-react/validation-group';
import Button from 'devextreme-react/button';
 
export default function App() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const validate = useCallback((params) => {
    const result = params.validationGroup.validate();
    
    if (result.isValid) {

      // Submit

      setEmail(null)
      setPassword(null)
      params.validationGroup.reset();
    }
  }, []);

  const handleEmailChange = useCallback((e) => {
      setEmail(e.value);
  }, []);
  
  const handlePasswordChange = useCallback((e) => {
      setPassword(e.value);
  }, []);

  return (
    <ValidationGroup>
      <h2>Validation</h2>
      <TextBox value={email} onValueChanged={handleEmailChange}>
        <Validator>
          <RequiredRule message="Email is required" />
          <EmailRule message="Email is invalid" />
        </Validator>
      </TextBox>

      <TextBox value={password} mode="password" onValueChanged={handlePasswordChange}>
        <Validator>
          <RequiredRule message="Password is required" />
        </Validator>
      </TextBox>
      <hr/>
      <Button onClick={validate} text="Submit" />
    </ValidationGroup>
  ); 
}