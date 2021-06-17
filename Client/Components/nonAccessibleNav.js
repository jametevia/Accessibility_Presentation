import React from 'react';

const nonAccessibleNav = (props) => {
  return (
    <div className={"nonAccessibleSelect"}>
      <label className="nonAccessibleJSLabel">&nbsp;<select className="nonAccessibleJS" onChange={props.imageChange}>
          <option value="SelectOne">Select One</option>
          <option value="javascript">javascript</option>
          <option value="css">css</option>
        </select></label>
      <select className="nonAccessibleExpress" onChange={props.imageChange}>
        <option value="SelectOne">Select One</option>
        <option value="express">express</option>
        <option value="react">react</option>
      </select>
    </div>
  )
}

export default nonAccessibleNav;