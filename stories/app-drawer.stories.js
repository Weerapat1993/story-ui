import React from 'react';
import { AppDrawer } from '../index'
import { configStories } from './config'

const BG_COLOR = 'linear-gradient(258deg, #83409e, #4c1e64)'
const LOGO = 'https://dfmukn6hiiik1.cloudfront.net/static/version1541005601/frontend/Central/default/th_TH/images/logo.svg'

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

const Title = () => (
  <a href="https://www.powerbuy.co.th/th/" title="Power Buy" target="_blank" rel="noopener noreferrer">
    <img src={LOGO} alt="Power Buy" width="165" height="44" />
  </a>
)

const stories = configStories(() => (
  <AppDrawer 
    bgColor={BG_COLOR} 
    title={<Title />}
    data={data}
    onClick={item => console.log(item)}
  />
),
  'App Drawer', 
  'String or React Element with docs about my component',
() => null)
