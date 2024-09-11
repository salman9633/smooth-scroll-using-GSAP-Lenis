"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import { useWindowSize } from '@studio-freight/hamo'
const ParallaxComponent = ({
    children,
    speed = 1,
    className,
    id = "parallax",
}) => {
    const trigger = useRef()
    const target = useRef()
    const timeline = useRef()

    const { width: windowWidth } = useWindowSize()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const y = windowWidth * speed * 0.1;
        const setY=gsap.quickSetter(target.current, "y", "px");

        timeline.current = gsap.timeline({
            scrollTrigger: {
                id: id,
                trigger: trigger.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                onUpdate: (e) => {
                    setY(e.progress * y);
                },
            }
        })
        return ()=>{
            timeline?.current?.kill()
        }
    }, [id,speed,windowWidth])
    return (
        <div ref={trigger} className={`m-3 ${className}`}>
            <div ref={target}>
                {children}
            </div>
        </div>
    )
}

export default ParallaxComponent