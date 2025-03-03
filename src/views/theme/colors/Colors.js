import React, { useEffect, useState, useRef } from 'react'
import { rgbToHex } from '@coreui/utils'

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const tableRef = useRef(null)

  useEffect(() => {
    if (tableRef.current) {
      const el = tableRef.current.parentNode.firstChild
      const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
      setColor(varColor)
    }
  }, [])

  return (
    <table className="table w-100" ref={tableRef}>
      <tbody>
        <tr>
          <td className="text-secondary">HEX:</td>
          <td className="fw-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-secondary">RGB:</td>
          <td className="fw-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-2 mb-4">
      <div 
        className={`theme-color w-75 rounded mb-3 ${className}`} 
        style={{ paddingTop: '75%' }}
      />
      {children}
      <ThemeView />
    </div>
  )
}

const Colors = () => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        Theme colors
        <a href="https://coreui.io/docs/utilities/colors/" 
           className="float-end" 
           target="_blank" 
           rel="noreferrer">
          Documentation
        </a>
      </div>
      <div className="card-body">
        <div className="row">
          <ThemeColor className="bg-primary">
            <h6>Brand Primary Color</h6>
          </ThemeColor>
          <ThemeColor className="bg-secondary">
            <h6>Brand Secondary Color</h6>
          </ThemeColor>
          <ThemeColor className="bg-success">
            <h6>Brand Success Color</h6>
          </ThemeColor>
          <ThemeColor className="bg-danger">
            <h6>Brand Danger Color</h6>
          </ThemeColor>
          <ThemeColor className="bg-warning">
            <h6>Brand Warning Color</h6>
          </ThemeColor>
          <ThemeColor className="bg-info">
            <h6>Brand Info Color</h6>
          </ThemeColor>
          <ThemeColor className="bg-light">
            <h6>Brand Light Color</h6>
          </ThemeColor>
          <ThemeColor className="bg-dark">
            <h6>Brand Dark Color</h6>
          </ThemeColor>
        </div>
      </div>
    </div>
  )
}

export default Colors