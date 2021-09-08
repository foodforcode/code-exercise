import React, { Fragment, useState } from 'react';
import StableLogo from '../../dist/images/stable-logo.svg';

export const Header = () => {
  return (
    <div className="header" >
      <img src={StableLogo} width={"150px"} className="header-img" />
      <hr />
    </div>
  )
}