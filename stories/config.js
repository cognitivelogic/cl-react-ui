import React from 'react';
import { Button } from 'reactstrap';
import { fields } from '../src';
import { validations } from '../src';
import { List, listActions } from '../src';

const Claim = ({ selected }) => {
  return <Button onClick={(e) => console.log('selected', selected)}>Claim </Button>;
};

/* tslint:disable:object-literal-sort-keys */
const config = {
  view: 'example',
  lib: 'reactstrap',
  primary_key: 'custom_id',

  list: {
    columns: {
      custom_id: {
        id: 'heading-id',
        label: 'ID',
      },
      edit: {
        id: 'edit',
        label: 'Edit',
        render: (props) => <Button onClick={(e) => {
          props.rowClick(e, false, props.row);
        }
        }>Edit </Button>,
      },
      label: {
        id: 'heading-name',
        label: 'Name',
      },
      select: {
        id: 'select',
        label: 'Select',
      },
      claimed: {
        class: 'text-center',
        id: 'heading-claimed',
        label: 'Claimed',
      },
    },
    filters: {
      select: {
        type: 'select',
      },
    },
    searchall: {
      label: 'Search',
      like: [
        'id', 'label',
      ],
    },

  },

  messages: {
    emptyData: 'No data found',
  },
  form: {
    title: (row) => row.id === '' ? 'Add a record' : 'Edit record',
    actions: {
      submit: {
        id: 'signup-action-submit',
        type: 'submit',
        label: (row) => row.id === '' ? 'Create record' : 'Save record',
        color: 'primary',
      },
      clear: {
        id: 'clear',
        type: 'button',
        label: 'clear',
        style: {
          float: 'left',
        },
        action: (form) => {
          console.log('this gives access to the form', form);
          form.reset();
        },
      },
    },
    fields: {
      custom_id: {
        id: 'activation-id',
        label: 'ID',
        type: 'text',
        value: '',
      },
      select: {
        id: 'select',
        size: 'sm',
        label: 'select',
        type: 'select',
        options: [
          { value: '1', label: 'one' },
          { value: '2', label: 'two' },
        ],
      },
      label: {
        id: 'name',
        size: 'sm',
        label: 'Name',
        type: 'text',
        help: 'A descriptive name for the drone',
        validate: {
          promises: [{
            rule: validations.required,
          }],
          msg: (value, data) => 'Name required',
        },
      },
      customer: {
        id: 'customer',
        label: 'Customer',
        type: 'lookup',
        value: '2',
        default: (row, field) => {
          console.log(row, field);
          return '3';
        },
        options: {
          store: (row, props) => [
            { id: '1', name: 'customer 1' },
            { id: '2', name: 'customer 2' },
            { id: '3', name: 'customer 3' },
          ],
          key: 'id',
          label: 'name',
          optionFitler: (row) => true,
        },
      },
      sector: {
        id: 'sector',
        value: Date.now(),
        label: 'Sector',
        type: 'Text',
      },
      radiolist: {
        id: 'radio-list',

        label: 'Radio list',
        type: 'radiolist',
        default: 'two',
        options: [{
          value: 'One',
          one: 'One',
        }, {
          value: 'Two',
          two: 'Two',
        }],
      },
      upload: {
        id: 'upload',
        type: 'upload',

        label: 'Upload',
        placeholder: 'Drag files here',
      },
      activation: {
        id: 'activation',

        label: 'Claim',
        type: 'text',
        value: 'ABCD',
        placeholder: 'Claim code',
        help: 'This will be given to the client allowing them to claim their records',
      },

      claimed: {
        id: 'claimed',
        label: 'Claimed',
        type: 'checkbox',
        value: false,
        help: '',
        vaidationState: '',
        access: {
          new: () => true,
        },
      },
      claimedDate: {
        id: 'claimedDate',

        label: 'Claimed date',
        type: 'date',
        access: {
          new: () => true,
        },
      },
      registered: {
        id: 'registered',

        label: 'Registered',
        type: 'checkbox',
        value: false,
        help: '',
        vaidationState: '',
        access: {
          new: () => true,
        },
      },
      registeredDate: {
        id: 'registeredDate',
        label: 'Registered date',
        type: 'date',
        access: {
          new: () => true,
        },
      },

      description: {
        id: 'description',
        label: 'Description',
        type: 'textarea',
        access: {
          new: () => true,
          edit: () => true,
        },
      },
      rangearray: {
        id: 'range-array',
        label: 'Range Array',
        type: 'grid',
        columns: [
          {
            label: 'Min', type: fields.reactstrap.Text,
          },
          {
            label: 'Category',
            type: fields.reactstrap.Lookup,
            options: {
              store: async (row, props) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve([
                      { id: 1, name: 'cat 1' },
                      { id: 2, name: 'cat 2' },
                      { id: 3, name: 'cat 3' },
                    ]);
                  }, 2000);
                });
              },

              key: 'id',
              label: 'name',
            },
          },
          {
            label: 'Sub category',
            type: fields.reactstrap.Lookup,
            options: {
              key: 'id',
              label: 'name',
              observe: [1],
              store: async (row, props) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    if (row[1] === '1') {
                      resolve([
                        { id: 1, name: 'subcat 1' },
                      ]);
                    }
                    resolve([
                      { id: 1, name: 'subcat 1' },
                      { id: 2, name: 'subcat 2' },
                      { id: 3, name: 'subcat 3' },
                    ]);
                  }, 2000);
                });
              },
            },
          },
        ],
      },
      signupname: {
        id: 'signup-name',
        label: 'Name',
        type: 'text',
        value: '',
        placeholder: 'Name',
        validate: {
          promises: [{
            rule: validations.required,
          }],
          msg: (value, data) => 'Name required',
        },
      },
    },
  },
};

export default config;
