import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    },
    this.addCount = this.addCount.bind(this);
    // イベントハンドラ bindしないと addCount は使えない
    // メソッドを追加する時はbindするのが決まり(ルール)
    // this の中に addCount bind するイメージ
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

 render() {
   return (
      <button onClick={this.addCount}>
        buttonCount:{this.state.count}
      </button>
   );
 }
}

export default Button;
