import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../helpers';
import { Tooltip } from 'react-tooltip'

const CustomButton = ({ type, title, customStyles, handleClick, tip="" }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
      data-tooltip-id={title+"-tip"}
      data-tooltip-content={tip}
      data-tooltip-place="top"
    >
      {title}
      {tip!==""?(      <Tooltip id={title+"-tip"} />):(      <span/>)}

    </button>
  )
}

export default CustomButton