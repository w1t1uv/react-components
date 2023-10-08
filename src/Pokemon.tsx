import React from 'react';

interface IProps {
  name: string;
  height: number;
  isDefault: string;
  order: number;
  weight: number;
}

export class Pokemon extends React.Component<IProps, unknown> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <p className="property">Name : {this.props.name}</p>
        <p className="property">Height : {this.props.height}</p>
        <p className="property">Is Default : {this.props.isDefault}</p>
        <p className="property">Order : {this.props.order}</p>
        <p className="property">Weight : {this.props.weight}</p>
      </div>
    );
  }
}
