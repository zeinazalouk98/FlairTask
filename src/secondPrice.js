import React from 'react'
import './pricing.css';
import image2 from './images/Union.png'
import image from './images/Icon2.png'

export default function secondPrice() {
    return (
        <div>
            <div style={{marginLeft:'7vw'}}>
 

<div class="box2">
  <p class="text1">Growth</p>
  <p class="text2">Understand the true pulse of your <br/>organization with regular Check-ins and  <br/>
  guided 1-on-1s, and show meaningful  <br/>
   appreciation when it matters most using 
   <br/>High Fives.</p>

   <span>
     <p class="text3">14€ </p>
     <svg class="line2"></svg>
     <p class="t1">
     per month <br/>
     per employee
     </p>
     </span>
     <hr class="line">
</hr>


<div>
<table class="table1">
  <tr>
 
<td>
<p class="text7" >Core HR</p>
</td>
<td> <img src={image} class="pic2" ></img>
 
 </td>
  </tr>
  <tr>
   
<td>
<p class="text7" >Payroll</p>
</td>
<td> <img src={image} class="pic2" ></img>
 
 </td>
  </tr>
  <tr>
 
<td>
<p class="text7" >Recruiting</p>
</td>
<td> <img src={image} class="pic2" ></img>
 
 </td>
  </tr>
  <tr>
  
<td>
<p class="text7" >Employee HUB</p>
</td>
<td> <img src={image} class="pic2" ></img>
 
 </td>
  </tr>
  <tr>
      <img class="plus" src={image2}></img>
  </tr>
  <tr>
  
  <td>
  <p class="text6" >Performance management</p>
  </td>
  <td> <img src={image} class="pic2" ></img>
   
   </td>
    </tr>
    <tr>
  
  <td>
  <p class="text6" >Shift planning</p>
  </td>
  <td> <img src={image} class="pic2" ></img>
   
   </td>
    </tr>
</table>
</div>
<button>Select Plan</button>
</div>

 </div>
 <svg class="circle2"></svg>
        </div>
    )
}
