import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardFooter } from 'reactstrap';
import { MailCardImage } from './MailCardImage';
import { MailCardInfo } from './MailCardInfo';

export const MailCard = ({ mailItem }) => {
  return (
    <div>
      <div className="card">
        <CardImg maxheight={"150px"} src={mailItem.imageUrl} />
        <CardBody>
          <CardTitle tag="h6">
              <strong>
                {mailItem.from}
              </strong>
            </CardTitle>
          <MailCardInfo mailItem={mailItem} />
        </CardBody>
        <CardFooter>{mailItem.timestamp}</CardFooter>
      </div>

    </div>
  )
}