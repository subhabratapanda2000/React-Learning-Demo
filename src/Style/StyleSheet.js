import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    let style= props.primary ? 'primary' : ' '
  return (
    <div className={`${style} font-xl`}><h1>StyleSheet</h1></div>
  )
}

export default StyleSheet