import React from 'react';
import { MailCardRow } from './MailCardRow.jsx';
import ScanIcon from '../../dist/images/scan.svg';
import ProcessingIcon from '../../dist/images/processing.svg';

export const ScanStatus = ({ status }) => {
  return (
    <div>
      {status === 'completed' ? (
        <MailCardRow
          info={'Scanned'}
          src={ScanIcon} />
        ) : (
        <MailCardRow
          info={'Scan processing'}
          src={ProcessingIcon}
        />
      )}
    </div>
  )
}