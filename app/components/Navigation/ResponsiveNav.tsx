
"use client";

import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => setShowNav(true);
  const closeNav = () => setShowNav(false);

  return (
    <>
      <Nav openNav={openNav} />
      <MobileNav showNav={showNav} closeNav={closeNav} />
    </>
  );
};

export default ResponsiveNav;

