import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import "./content.css";

const Content = () => {
  const leftRef = useRef(null);
  const textRef = useRef(null);
  const pRef = useRef(null);
  const buttonRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ ease: Power3.easeOut });

    timeline.from(leftRef.current, { x: -100, opacity: 0, duration: 1 });
    timeline.from(textRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.5");
    timeline.from(pRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.5");
    timeline.from(buttonRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.5");
    timeline.from([img1Ref.current, img2Ref.current, img3Ref.current], {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.3
    }, "-=0.5");

    timeline.add(() => {
      // Use clearProps to remove inline styles set by GSAP
      gsap.set([leftRef.current, textRef.current, pRef.current, buttonRef.current, img1Ref.current, img2Ref.current, img3Ref.current], { clearProps: "all" });
    });

  }, []);

  return (
    <>
      <div className="content">
        <div className="left" ref={leftRef}>
          <h1 className='text' ref={textRef}>
            <div>Hardworks beats talent.</div>
            <div>When talent doesn't work hard.</div>
          </h1>
          <p ref={pRef}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quam dolorum dignissimos nisi corporis odit delectus assumenda. Reprehenderit, voluptatum iusto?</p>
          <button ref={buttonRef}>
            Explore
          </button>
        </div>
        <div className="right">
          <div className="img1" ref={img1Ref}></div>
          <div className="img2" ref={img2Ref}></div>
          <div className="img3" ref={img3Ref}></div>
        </div>
      </div>
    </>
  );
}

export default Content;
