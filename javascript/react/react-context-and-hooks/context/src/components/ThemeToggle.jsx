import {
  // Component,
  useContext,
} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// OLD CLASS COMPONENT VERSION
// export default class ThemeToggle extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { theme } = this.context;
//   }
// }

// USECONTEXT INSIDE FUNCTIONAL COMPONENTS
export const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);
  return <button onClick={theme}>Theme toggle</button>;
};
