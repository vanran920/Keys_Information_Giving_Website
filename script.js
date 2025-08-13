const keys = document.getElementById('output')

window.addEventListener('keydown',(e) =>{ // Arrow Function
keys.innerHTML = `
<div class='color'>
<table>
  <tr>
    <th> Key </th>
    <th>    KeyCode </th>
    <th> Code </th>
  </tr>
  <tr>
    <td>${e.key === ' '? 'Space': e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
</div>                 
`
})