import React from 'react';
import { CardSubtitle } from 'reactstrap';
import { ScanStatus } from './ScanStatus.jsx';
import { ShredStatus } from './ShredStatus.jsx';
import { ForwardStatus } from './ForwardStatus.jsx';
import { BusinessRecipient } from './BusinessRecipient.jsx';
import { IndividualRecipient } from './IndividualRecipient.jsx';
import ForwardIcon from '../../dist/images/forward.svg';
import ProcessingIcon from '../../dist/images/processing.svg';


export const MailCardInfo = ({mailItem}) => {
  return(
    <div>
      <CardSubtitle className="mb-2 text-muted">
        {mailItem.businessRecipient && <BusinessRecipient businessRecipient={mailItem.businessRecipient} />}
        {mailItem.individualRecipient && <IndividualRecipient recipient={mailItem.individualRecipient} />}
        {mailItem.scan && <ScanStatus status={mailItem.scan.status} />}
        {mailItem.shred && <ShredStatus status={mailItem.shred.status} />}
        {mailItem.forward && <ForwardStatus status={mailItem.forward.status} />}
      </CardSubtitle>
    </div>
  )
}