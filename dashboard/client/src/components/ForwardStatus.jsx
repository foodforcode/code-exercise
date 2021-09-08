import React from 'react';
import { MailCardRow } from './MailCardRow';
import ForwardIcon from '../../dist/images/forward.svg';
import ProcessingIcon from '../../dist/images/processing.svg';

export const ForwardStatus = ({ status }) => {
  return (
    <div>
      {status === 'completed' ? <MailCardRow info={'Forwarded'} src={ForwardIcon} /> : <MailCardRow info={'Forward processing'} src={ProcessingIcon} />}
    </div>
  )
}