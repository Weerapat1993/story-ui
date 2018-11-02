import React from 'react';
import { Layout } from '../components';

const data = [
  {
    key: 1,
    link: '/about',
    text: 'ทีวี / บันเทิงภายในบ้าน',
  },
  {
    key: 2,
    link: '/about',
    text: 'เครื่องใช้ไฟฟ้าภายในบ้าน',
  },
  {
    key: 3,
    link: '/about',
    text: 'แอร์ / เครื่องฟอกอากาศ',
  },
  {
    key: 4,
    link: '/about',
    text: 'เครื่องใช้ไฟ้ฟ้าขนาดเล็ก',
  },
  {
    key: 5,
    link: '/about',
    text: 'มือถือ / แทบเล็ต',
  },
  {
    key: 6,
    link: '/about',
    text: 'กล้อง',
  },
  {
    key: 7,
    link: '/about',
    text: 'คอมพิวเตอร์ / ออฟฟิศ',
  },
  {
    key: 8,
    link: '/about',
    text: 'แกตเจ็ด & สมาร์ทเทคโนโลยี',
  },
];


const Home = () => (
  <Layout menus={data}>
    Home
  </Layout>
);

export default Home;

