import React from 'react';
import { Header1, Header2, Header3} from '../CSS/CustomStyles.js';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Header2>
      <Header3 date>SMARCH 32, 2018</Header3> 
      <Header1>Lambda Times</Header1>
      <Header3 temp>98°</Header3>
    </Header2>
  )
}

export default Header