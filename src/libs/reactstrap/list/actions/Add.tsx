import * as React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';
import Icon from '../../../../components/Icon';
interface IProps {
  showAddModal: () => void;
}

export default class Add extends Component<IProps, {}> {

  public static defaultProps: Partial<IProps> = {
    showAddModal: () => null,
  };

  /**
   * Render
   * @return {Dom} node
   */
  public render(): JSX.Element | null {
    const { showAddModal } = this.props;

    return (<Button onClick={(e) => showAddModal()}>
      <Icon icon="plus" label="Add" />
    </Button>);
  }
}

export {
  IProps,
};
