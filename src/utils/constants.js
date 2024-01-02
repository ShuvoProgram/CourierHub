import React from 'react';
import {
  FaHome,
  FaProductHunt,
  FaShoppingCart,
  FaUserTie,
} from 'react-icons/fa';

export const LinkItems = [
    { name: 'Home', url: '/', icon: <FaHome /> },
    { name: 'Products', url: '/products', icon: <FaProductHunt /> },
    { name: 'Orders', url: '/orders', icon: <FaShoppingCart /> },
    { name: 'Admins', url: '/admins', icon: <FaUserTie /> },
  ];