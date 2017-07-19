import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Xiebin from './Xb'
import Butto from 'react-bootstrap/lib/Button';
// or
import { Button } from 'react-bootstrap';
import './App.css';

const buttonsInstance = (
  <ButtonToolbar>
    {/* 标准按钮 */}
    <Button>Default</Button>

    {/* 提供重要视觉感知及标识重要操作的按钮 */}
    <Button bsStyle="primary">Primary</Button>

    {/* 指示成功或正面操作按钮 */}
    <Button bsStyle="success">Success</Button>

    {/* 提供上下文帮助的提示信息按钮 */}
    <Button bsStyle="info">Info</Button>

    {/* 提醒操作需要小心使用 */}
    <Button bsStyle="warning">Warning</Button>

    {/* 提醒操作可能会导致危险或造成负面影响 */}
    <Button bsStyle="danger">Danger</Button>

    {/* 像一个链接但有按钮的操作行为 */}
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>
);

class App extends Component {
  render() {
    return (
      <div className="App">
      <buttonsInstance></buttonsInstance>
      <Button type="primary">Button</Button>
      <Xiebin />
      </div>
    );
  }
}

export default App;
