import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      Logo
    </Link>
    <div className='header-items'>
      <Link className='header-item' to='/about'>About</Link>
      <Link className='header-item' to='/myshelf'>myVivlio Shelf</Link>
      <Link className='header-item' to='/login'>Login</Link>
    </div>
  </div>
)
