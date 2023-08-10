import React, { useRef, useCallback } from 'react';
import Button from 'devextreme-react/button';
import TextBox from 'devextreme-react/text-box';
 
export default function UseRefUse() {
  const textBoxRef = useRef(null);
  const focusTextBox = useCallback(() => {
    textBoxRef.current.instance.focus();
  }, []);

  return (
    <div>
      <h2>UseRef</h2>
      <TextBox ref={textBoxRef}/>
      <Button text="Focus TextBox" onClick={focusTextBox} />
    </div>
  );
}