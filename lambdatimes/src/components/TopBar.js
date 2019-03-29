import React from 'react';
import { Div, DivContainer1, DivContainer2, DivContainer3, DivContainer4, DivContainer5} from '../CSS/CustomStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <Div>
      <DivContainer1>
        <DivContainer2>
          <DivContainer5>TOPICS</DivContainer5><DivContainer5>SEARCH</DivContainer5>
        </DivContainer2>
        <DivContainer3>
          <DivContainer5>GENERAL</DivContainer5><DivContainer5>BROWNBAG</DivContainer5><DivContainer5>RANDOM</DivContainer5><DivContainer5>MUSIC</DivContainer5><DivContainer5>ANNOUNCEMENTS</DivContainer5>
        </DivContainer3>
        <DivContainer4>
          <DivContainer5>LOG IN</DivContainer5>
        </DivContainer4>
      </DivContainer1>
    </Div>
  )
}

export default TopBar;