import React, { Component } from 'react';

class ItemPage extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // error    Unused method or property "onClick" of class "ItemPage"     react/no-unused-class-component-methods
  onClick = () => {
    console.log('onClick', this);
  };

  handleData = () => {
    console.log('handleData', this);
  };

  render() {
    return <div>Item Page</div>;
  }
}

export default function IndexPage() {
  return (
    <div>
      <h1 className="page-index">Page index</h1>
      <ItemPage />
    </div>
  );
}
