import React from 'react'
import "./CuttingImgStyles.css"

const CuttingImg = () => {
  return (
    <div className='cutting-container'>
      <div className='cutting-table'>
        <h2 className='title-cutting-h2'>Péče o zvířata</h2>
        <h1 className="title-cutting-h1"> U sladké růže</h1>
        <table>
          <tr>
            <td>Stříhání: <span className='price'>Od 350 Kč</span></td>
          </tr>
          <tr>
            <td>Koupání: <span className='price'>Od 350 Kč</span></td>
          </tr>
          <tr>
            <td>Stříhání + koupání: <span className='price'>Od 350 Kč</span></td>
          </tr>
          <tr>
            <td>Rozčesávání: <span className='price'>Od 350 Kč</span></td>
          </tr>
          <tr>
            <td>Drápky: <span className='price'>Od 350 Kč</span></td>
          </tr>
          <tr> 
            <td>Žlásky: <span className='price'>Od 350 Kč</span></td>
          </tr>
          <tr>
            <td>Trimrování: <span className='price'>Od 350 Kč</span></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default CuttingImg