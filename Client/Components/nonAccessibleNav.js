import React from 'react';

const nonAccessibleNav = (props) => {
  return (
    <div>
      <select>
        <option value="javascript">javascript</option>
        <option value="css">css</option>
      </select>
      <select>
        <option value="express">express</option>
        <option value="react">react</option>
      </select>
    </div>
  )
}

export default nonAccessibleNav;