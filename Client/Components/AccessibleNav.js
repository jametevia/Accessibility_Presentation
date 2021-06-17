import React from 'react';

const AccessibleNav = (props) => {
  return (
    <nav className={"AccessibleSelect"}>
      <label className="AccessibleJSLabel" htmlFor="AccessibleJS">javascript / css</label>
      <select aria-label="Select javascript or css" name="AccessibleJS" className="AccessibleJS" onChange={props.imageChange}>
          <option value="SelectOne">Select One</option>
          <option value="javascript">javascript</option>
          <option value="css">css</option>
      </select>
      <label className="AccessibleExpressLabel" htmlFor="AccessibleExpress">react / express</label>
      <select aria-label="Select express or react" name="AccessibleExpress" className="AccessibleExpress" onChange={props.imageChange}>
        <option value="SelectOne">Select One</option>
        <option value="express">express</option>
        <option value="react">react</option>
      </select>
    </nav>
  )
}

export default AccessibleNav;