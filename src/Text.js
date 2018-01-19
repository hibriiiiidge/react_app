import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
    //初期化している propsがあればそれを使う的な感じ？ そこまで意識しなくても良い
    // props 別のコンポーネントから渡ってくるもの
    this.state = {
      showText: true,
    };

    setInterval(() => {
      this.setState({ 
        showText: !this.state.showText,
      });
    }, 1000);
  }

  render() {
    const text = this.state.showText ? this.props.text : '';
    return (
      <div>
        <span style={{ color: "red" }}>
          {text}
        </span>
      </div>
    );
  }
}

export default Text;

//ここが呼ばれると再読み込みが走る
// 変わらないものは props App.jsから呼ばれているもの
