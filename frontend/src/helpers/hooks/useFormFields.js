import { useState } from 'react';

export const useFormFields = (initialState) => {
  const [fields, setValue] = useState(initialState);

  return [
    fields,
    (event) => {
      if (event.target.type === 'checkbox') {
        setValue({
          ...fields,
          [event.target.name]: event.target.checked,
        });
      } else {
        setValue({
          ...fields,
          [event.target.name]: event.target.value,
        });
      }
    },
  ];
};
