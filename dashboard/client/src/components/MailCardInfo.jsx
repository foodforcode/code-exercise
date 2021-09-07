import React from 'react';
import { CardSubtitle } from 'reactstrap';
import { BusinessRecipient } from './BusinessRecipient';
import ForwardIcon from '../../dist/images/forward.svg';
import RecipientIcon from '../../dist/images/recipient.svg';
import ProcessingIcon from '../../dist/images/processing.svg';
import ShredIcon from '../../dist/images/shred.svg';
import ScanIcon from '../../dist/images/scan.svg';

export const MailCardInfo = ({mailItem}) => {
  return(
    <div>
      <CardSubtitle className="mb-2 text-muted">
        {mailItem.businessRecipient ? <BusinessRecipient businessRecipient={mailItem.businessRecipient}/> : (null)}
        </CardSubtitle>
      <CardSubtitle className="mb-2 text-muted">
        <img src={RecipientIcon} className="infoIcon" />{mailItem.individualRecipient}
      </CardSubtitle>
    </div>
  )
}