import React from 'react';
import { CardSubtitle } from 'reactstrap';
import { BusinessRecipient } from './BusinessRecipient';
import { IndividualRecipient } from './IndividualRecipient';
import { ShredStatus } from './ShredStatus';
import { ScanStatus } from './ScanStatus';
import { ForwardStatus } from './ForwardStatus';
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