import React from 'react';
import { AppDrawer } from '../index'
import { configStories } from './config'

const BG_COLOR = 'linear-gradient(258deg, #83409e, #4c1e64)'
const LOGO = 'https://dfmukn6hiiik1.cloudfront.net/static/version1541005601/frontend/Central/default/th_TH/images/logo.svg'

const Title = () => (
  <a href="https://www.powerbuy.co.th/th/" title="Power Buy" target="_blank" rel="noopener noreferrer">
    <img src={LOGO} alt="Power Buy" width="165" height="44" />
  </a>
)

const stories = configStories(() => (
  <AppDrawer 
    bgColor={BG_COLOR} 
    title={<Title />} 
  />
),
  'App Drawer', 
  'String or React Element with docs about my component',
() => null)
