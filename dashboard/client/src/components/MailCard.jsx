import React, { Fragment } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardFooter } from 'reactstrap';
import { MailCardImage } from './MailCardImage';
import { MailCardInfo } from './MailCardInfo';
import moment from 'moment';

export const MailCard = ({ mailItem }) => {
  return (
    <div>
      <div className="card">
        <CardImg src={mailItem.imageUrl} />
        <hr />
        <CardBody>
          <CardTitle tag="h6">
              <strong>
                {mailItem.from}
              </strong>
            </CardTitle>
          <MailCardInfo mailItem={mailItem} />
        </CardBody>
        <CardFooter className="card-footer bg-white"><div className="timestamp text-muted">{moment(mailItem.timestamp).add(1, 'day').format("LL")}</div></CardFooter>
      </div>
    </div>
  )
}