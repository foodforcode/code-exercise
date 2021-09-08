import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

export const MailCardRow = ({ info, src }) => {
  return (
    <Row className="card-row">
      <Col xs="2">
        <img src={src} alt="" className="card-row-icon" />
      </Col>
      <Col className="card-row-col">
        <div className="text-muted card-row-col">{info}</div>
      </Col>
    </Row>
  )
}