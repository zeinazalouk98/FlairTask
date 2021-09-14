import React from 'react'
import './pricing.css';
import image from './images/Icon.png'

export default function firstPrice() {
    return (
        <div>
            <div style={{marginLeft:'-21vw'}}>
 <svg class="circle"></svg>

<div class="box">
  <p class="text1">Essential</p>
  <p class="text2">Understand the true pulse of your <br/>organization with regular Check-ins and  <br/>
  guided 1-on-1s, and show meaningful  <br/>
   appreciation when it matters most using 
   <br/>High Fives.</p>

   <span>
     <p class="text3">8€ </p>
     <svg class="text4"></svg>
     <p class="text5">
     per month <br/>
     per employee
     </p>
     </span>
     <hr class="line">
</hr>


<div>
<table class="table1">
  <tr>
    <td> <img src={image} class="pic" ></img>
 
</td>
<td>
<p class="text7" >Core HR</p>
</td>
  </tr>
  <tr>
    <td> <img src={image} class="pic" ></img>
 
</td>
<td>
<p class="text7" >Payroll</p>
</td>
  </tr>
  <tr>
    <td> <img src={image} class="pic" ></img>
 
</td>
<td>
<p class="text7" >Recruiting</p>
</td>
  </tr>
  <tr>
    <td> <img src={image} class="pic" ></img>
 
</td>
<td>
<p class="text7" >Employee HUB</p>
</td>
  </tr>
</table>
</div>
<button>Select Plan</button>
</div>

 </div>
        </div>
    )
}
