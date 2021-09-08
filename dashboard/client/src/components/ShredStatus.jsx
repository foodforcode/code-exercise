import React, { Fragment } from 'react';
import ShredIcon from '../../dist/images/shred.svg';
import ProcessingIcon from '../../dist/images/processing.svg';
import { MailCardRow } from './MailCardRow';

export const ShredStatus = ({ status }) => {
  return (
    <div>
      {status === 'completed' ? <MailCardRow info={'Shredded'} src={ShredIcon} /> : <MailCardRow info={'Shred processing'} src={ProcessingIcon} />}
    </div>
  )
}