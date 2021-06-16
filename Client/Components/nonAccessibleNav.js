import React from 'react';

const nonAccessibleNav = (props) => {
  return (
    <div className={"nonAccessibleSelect"}>
      <select className="nonAccessibleJS">
        <option value="javascript">javascript</option>
        <option value="css">css</option>
      </select>
      <select className="nonAccessibleExpress">
        <option value="express">express</option>
        <option value="react">react</option>
      </select>
    </div>
  )
}

export default nonAccessibleNav;