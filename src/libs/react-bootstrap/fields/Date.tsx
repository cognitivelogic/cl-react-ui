/// <reference path="../interfaces.d.ts" />
import * as React from 'react';
import {FormControl} from 'react-bootstrap';

export default ({value, name, onChange, field}: IFormField) => {
  const {placeholder} = field;
  return <FormControl
            type="date"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(name, e.target.value)}
        />;
};
