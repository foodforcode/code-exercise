import React from 'react';
import { MailCardRow } from './MailCardRow.jsx';
import RecipientIcon from '../../dist/images/recipient.svg';

export const IndividualRecipient = ({ recipient }) => {
  return (
    <MailCardRow src={RecipientIcon} info={recipient} />
  )
}