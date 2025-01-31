import React, { Fragment } from 'react';
import BusinessIcon from '../../dist/images/business.svg';
import { MailCardRow } from './MailCardRow.jsx';

export const BusinessRecipient = ({businessRecipient}) => {
  return (
    <MailCardRow src={BusinessIcon} info={businessRecipient} />
  )
}