

import React from 'react'
import FirstPrice from './firstPrice';
import SecondPrice from './secondPrice';
import ThirdPrice from './thirdPrice';

function App() {
  return (
    <div >
<div>
  <p class='header'>
    Base plans 
  </p>
  <span>
    <p class="header1">
      Monthly
    </p>
    <svg class="header2"></svg>
    <p class="header3">
      Yearly
    </p>
  </span>

 </div>
<span>
  <FirstPrice ></FirstPrice>
  <SecondPrice></SecondPrice>
  <ThirdPrice></ThirdPrice>
</span>
    </div>
  );
}

export default App;
