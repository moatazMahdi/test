import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class WiebView extends Component {
  render() {
    return (
      <WebView
        source={{ uri: item.url }}
        style={{ marginTop: 20 }}
      /> 
    );
  }
}