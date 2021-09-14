import React from 'react'
import './pricing.css';
import image2 from './images/Icon2.png'
import image from './images/Icon.png'
import group from './images/Group.png'

export default function thirdPrice() {
    return (
        <div>
            <div style={{marginLeft:'7vw'}}>
 

<div class="box3">
  <p class="text1">Performance</p>
  <p class="text2">Understand the true pulse of your <br/>organization with regular Check-ins and  <br/>
  guided 1-on-1s, and show meaningful  <br/>
   appreciation when it matters most using 
   <br/>High Fives.</p>

   <span>
     <p class="text3">20€  </p> 
     <svg class="line2"></svg>
     <p class="t1">
     per month <br/>
     per employee
     </p>
     </span>
     <hr class="line">
</hr>


<div>
<table>
  <tr>
 
<td>
<p class="text9" >Core HR</p>
</td>
<td> <img src={image2} class="pic3" ></img>
 
 </td>
  </tr>
  <tr>
  <tr>
  <img src={group} class="blue" />
  </tr>
     
  
  <td>
  <p class="text10" >Compensation management</p>
  </td>
  <td> <img src={image2} class="pic4" ></img>
 
 </td>
    </tr>
</table>
</div>
<button class="button1">Select Plan</button>
</div>

 </div>
</div>
    )
}
