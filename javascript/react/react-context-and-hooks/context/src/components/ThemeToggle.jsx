import { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { theme } = this.context;
    return <button onClick={theme}>Theme toggle</button>;
  }
}
