import React from 'react';

const nonAccessibleNav = (props) => {
  return (
    <div>
      <select className={"nonAccessibleSelect"}>
        <option value="javascript">javascript</option>
        <option value="css">css</option>
      </select>
    </div>
  )
}

export default nonAccessibleNav;