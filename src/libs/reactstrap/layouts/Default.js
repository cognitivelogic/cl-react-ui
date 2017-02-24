// @flow
import React from 'react';
import {Alert, Form} from 'reactstrap';
import {FormLayout} from '../../../types';

export default ({form, fields, actions, errors, onSubmit}: FormLayout) => {

    let alert = null,
      allFields = Object.keys(fields).map(n => fields[n]);

    if (errors.message) {
      alert = (<Alert color="danger">
                    <p>{errors.message}</p>
                </Alert>);
    }
    return (<Form onSubmit={onSubmit}>
              <h2>{form.title}</h2>
              {alert}
              {allFields}
              {actions}
          </Form>);

}
