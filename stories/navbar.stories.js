import React, { Fragment } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { text, boolean } from '@storybook/addon-knobs';
import { Navbar } from '../index'
import { configStories } from './config'

const data = [
  {
    key: 1,
    link: '/home',
    text: 'ทีวี / บันเทิงภายในบ้าน'
  },
  {
    key: 2,
    link: '/home',
    text: 'เครื่องใช้ไฟฟ้าภายในบ้าน'
  },
  {
    key: 3,
    link: '/home',
    text: 'แอร์ / เครื่องฟอกอากาศ'
  },
  {
    key: 4,
    link: '/home',
    text: 'เครื่องใช้ไฟ้ฟ้าขนาดเล็ก'
  },
  {
    key: 5,
    link: '/home',
    text: 'มือถือ / แทบเล็ต'
  },
  {
    key: 6,
    link: '/home',
    text: 'กล้อง'
  },
  {
    key: 7,
    link: '/home',
    text: 'คอมพิวเตอร์ / ออฟฟิศ'
  },
  {
    key: 8,
    link: '/home',
    text: 'แกตเจ็ด & สมาร์ทเทคโนโลยี',
    
  },
]

const stories = configStories(() => (
  <Router>
    <Navbar
      bgColor={text('Navbar Color', '#4e1f66')}
      color={text('Text Color', 'white')}
      isUnderline={boolean('is Underline', false)}
      isLine={boolean('is Line', false)}
      lineColor={text('Line Color', '#bebebe')}
    >
      {
        data.slice(0, 2).map((item) => (
          <Navbar.Item key={item.key} to={item.link}>{item.text}</Navbar.Item>
        ))
      }
    </Navbar>
  </Router>
),
  'Navbar', 
  'String or React Element with docs about my component',
() => (
  <Router>
    <Fragment>
      <Navbar bgColor='#4e1f66'>
        {
          data.map((item) => (
            <Navbar.Item key={item.key} to={item.link}>{item.text}</Navbar.Item>
          ))
        }
      </Navbar>
      <Navbar 
        bgColor='#eaeaea'
        color='#333'
        isUnderline
        isLine
        lineColor='#bebebe'
      >
        {
          data.slice(0, 3).map((item) => (
            <Navbar.Item
              key={item.key} to={item.link}
            >
              {item.text}
            </Navbar.Item>
          ))
        }
      </Navbar>
    </Fragment>
  </Router>
))
