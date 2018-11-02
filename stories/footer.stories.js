import React from 'react';
import { text } from '@storybook/addon-knobs';
import styled from 'styled-components'
import { FooterSmall, FooterLarge, Row, Col } from '../index'
import { configStories } from './config'

const TextHeader = styled.span`
  font-size: 18px;
  color: #4c1a65;
  font-weight: bold;
`

const TextDesc = styled.span`
  font-size: 10px;
  color: #4c1a65;
`

const CustomRow = styled(Row)`
  padding: 10px;
  @media (min-width: 991px) {
    padding: 30px;
  }
`

// Constants
const COPYRIGHT = '© 2017 Power Buy , Power Buy is the trading name of Power Buy Company Limited, a registered company of Thailand with a company number of 0105539004352 Power Buy, Power Buy Thailand and the Power Buy logo are trademarks of Power Buy Company Limited.'

const stories = configStories(() => (
  <FooterSmall>{text('Copyright', COPYRIGHT)}</FooterSmall>
),
  'Footer', 
  'String or React Element with docs about my component',
() => (
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
    <Row>

    </Row>
    <FooterSmall>{text('Copyright', COPYRIGHT)}</FooterSmall>
  </FooterLarge>
))
