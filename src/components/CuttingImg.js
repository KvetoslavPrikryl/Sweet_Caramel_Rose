import React from 'react'
import "./CuttingImgStyles.css"

const CuttingImg = () => {
  return (
    <div className='cutting-container'>
      <div className='cutting-table'>
        <h1 className='title-cutting'>Stříhání</h1>
        <table>
          <tr>
            <td>Stříhání:</td>
            <td>300 Kč</td>
          </tr>
          <tr>
            <td>Koupání:</td>
            <td>100 Kč</td>
          </tr>
          <tr>
            <td>Stříhání + koupání:</td>
            <td>350 Kč</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default CuttingImg