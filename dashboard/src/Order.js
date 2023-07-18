import React from 'react'

function Orders() {
  return (
    <>
    <div className='p-5 bg-light'>
      <div className='bg-white rounded p-4'>
      <table class="table caption-top">
  <caption class="text-black fs-4">Orders</caption>
  <thead>
    <tr>
      <th scope="col">S. No.</th>
      <th scope="col">Name of Product</th>
      <th scope="col">Order Value (INR)</th>
      <th scope="col">Pincode</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Football</td>
      <td>500</td>
      <td>123456</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Football Jerseys</td>
      <td>1000</td>
      <td>789012</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Tshirts</td>
      <td>750</td>
      <td>345678</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Goalkeeper Gloves</td>
      <td>400</td>
      <td>901234</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Shin Guards</td>
      <td>600</td>
      <td>567890</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Football Boots</td>
      <td>1200</td>
      <td>234567</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Football Pump</td>
      <td>400</td>
      <td>890123</td>
    </tr>
  </tbody>
</table>


    </div>
      </div>
    </>
  )
}

export default Orders