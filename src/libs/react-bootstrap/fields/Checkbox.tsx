/// <reference path="../../../interfaces.d.ts" />
import * as React from 'react';
import {Checkbox} from 'react-bootstrap';

export default ({value, name, onChange, field}: IFormField) => {
  const checked = (value === true || value === '1' || value === 'true');
  const {label} = field;

  return (<Checkbox
            checked={checked}
            value={value}
            onChange={(e) => onChange(name, e.target.checked)}>
              {label} {value}
          </Checkbox>);
};
