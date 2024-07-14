import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import "./header.css";

const Header = () => {
  const ease = Power3.easeOut;
  const logo = useRef(null);
  const menu_item1 = useRef(null);
  const menu_item2 = useRef(null);
  const menu_item3 = useRef(null);
  
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.from(logo.current, { y: -50, opacity: 0, ease: ease, duration: 1 });
    timeline.from([menu_item1.current, menu_item2.current, menu_item3.current], {
      y: -50,
      opacity: 0,
      ease: ease,
      duration: 1,
      stagger: 0.5,
      onComplete: () => {
        // Use clearProps to remove inline styles set by GSAP
        gsap.set([logo.current, menu_item1.current, menu_item2.current, menu_item3.current], { clearProps: "all" });
      }
    });
  }, []);

  return (
    <>
      <div className="header">
        <div ref={logo} className="logo">
          Company
        </div>
        <div className="menu">
          <div ref={menu_item1} className="menu-item1">About</div>
          <div ref={menu_item2} className="menu-item2">Blogs</div>
          <div ref={menu_item3} className="menu-item3">Contact</div>
        </div>
      </div>
    </>
  );
}

export default Header;
