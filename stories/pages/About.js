import React from 'react';
import { Layout } from '../components';

const data = [
  {
    key: 1,
    link: '/',
    text: 'ทีวี / บันเทิงภายในบ้าน',
  },
  {
    key: 2,
    link: '/',
    text: 'เครื่องใช้ไฟฟ้าภายในบ้าน',
  },
  {
    key: 3,
    link: '/',
    text: 'แอร์ / เครื่องฟอกอากาศ',
  },
  {
    key: 4,
    link: '/',
    text: 'เครื่องใช้ไฟ้ฟ้าขนาดเล็ก',
  },
  {
    key: 5,
    link: '/',
    text: 'มือถือ / แทบเล็ต',
  },
  {
    key: 6,
    link: '/',
    text: 'กล้อง',
  },
  {
    key: 7,
    link: '/',
    text: 'คอมพิวเตอร์ / ออฟฟิศ',
  },
  {
    key: 8,
    link: '/',
    text: 'แกตเจ็ด & สมาร์ทเทคโนโลยี',
  },
];

const About = () => (
  <Layout menus={data}>
    About
  </Layout>
);

export default About;

