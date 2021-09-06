import React, { Fragment, useState } from 'react';
import StableLogo from '../../dist/images/stable-logo.svg';

export const Header = () => {
  return (
    <Fragment>
      <img src={StableLogo} width={"150px"} />
    </Fragment>
  )
}