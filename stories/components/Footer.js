import React from 'react';
import styled from 'styled-components';
import { Row, Col, FooterLarge, FooterSmall } from '../../index';
import { text } from '@storybook/addon-knobs';

// Constants
const COPYRIGHT = '© 2017 Power Buy , Power Buy is the trading name of Power Buy Company Limited, a registered company of Thailand with a company number of 0105539004352 Power Buy, Power Buy Thailand and the Power Buy logo are trademarks of Power Buy Company Limited.'

const TextHeader = styled.span`
  font-size: 18px;
  color: #4c1a65;
  font-weight: bold;
`;
const TextDesc = styled.span`
  font-size: 10px;
  color: #4c1a65;
`;
const CustomRow = styled(Row)`
  border-top: ${props => props.isBorder ? 1 : 0}px solid #d8d8d8;
  padding: 10px;
  @media (min-width: 991px) {
    padding: 30px;
  }
`;

const Footer = () => (
  <FooterLarge>
    <CustomRow responsive>
      <Col>
        <Row responsive>
          <Col align='right' padding='10px'>
            <TextHeader>ให้เราช่วย?</TextHeader>
          </Col>
          <Col>
            <TextDesc>
              ทีมงานของเราพร้อมตอบทุกคำถามของคุณ ศูนย์บริการลูกค้าของเราเปิดให้บริการตั้งแต่ 8.00 น. ถึง 22.00 น.
            </TextDesc>
          </Col>
          <Col />
        </Row>
      </Col>
      <Col>
        Text
      </Col>
    </CustomRow>
    <CustomRow responsive isBorder>
      <Col>
        Text
      </Col>
      <Col>
        <Row>
          <Col padding='10px'>
            <TextHeader>รับข่าวสารและโปรโมชั่น?</TextHeader>
          </Col>
        </Row>
        <Row>
          <Col>
            <TextDesc>เพียงกรอกอีเมล ก็รับข่าวสารและโปรโมชั่นสุดพิเศษได้ง่ายๆ</TextDesc>
          </Col>
        </Row>
      </Col>
    </CustomRow>
    <FooterSmall>{text('Copyright', COPYRIGHT)}</FooterSmall>
  </FooterLarge>
);

export default Footer;
