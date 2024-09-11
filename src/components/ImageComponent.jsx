"use client"
import Image from 'next/image'
import React from 'react'
import ParallaxComponent from './ParallaxComponent'
import { useLenis } from '@studio-freight/react-lenis'

const ImageComponent = () => {
  const lenis = useLenis()
  return (
    <>
      <button onClick={() => lenis.scrollTo('#last-img', { lerp: 0.01 })} className='text-xl font-semibold bg-slate-700 px-7 my-3 rounded-2xl hover:bg-slate-400 hover:text-slate-700 transition duration-300 ease-in-out'>Click To Go Bottom </button>

      <Image src={'https://picsum.photos/600/500?grayscale'} alt='Img' width={600} height={500} />
      <ParallaxComponent className={"self-end"} speed={1}>
        <Image src={'https://picsum.photos/600/300?random=9'} alt='Img' width={600} height={300} />
      </ParallaxComponent>
      <ParallaxComponent className={"self-start"} speed={1}>
        <Image src={'https://picsum.photos/600/400?grayscale=15'} alt='Img' width={600} height={400} />
      </ParallaxComponent>
      <ParallaxComponent className={"self-center"} speed={2}>
        <Image src={'https://picsum.photos/600/400?random'} alt='Img' width={600} height={400} />

      </ParallaxComponent>
      <ParallaxComponent className={"self-start overflow-hidden"} speed={-5}>

        <Image src={'https://picsum.photos/600/400?random=15'} alt='Img' width={600} height={400} />
      </ParallaxComponent>
      <ParallaxComponent className={"self-end"} speed={1}>

        <Image src={'https://picsum.photos/600/400?random=6'} alt='Img' width={600} height={400} />
      </ParallaxComponent>
      <ParallaxComponent className={"self-start overflow-hidden"} speed={2}>

        <Image src={'https://picsum.photos/600/400?random=7'} alt='Img' width={600} height={400} />
      </ParallaxComponent>
      <ParallaxComponent className={"self-end overflow-hidden"} speed={2}>

        <Image src={'https://picsum.photos/600/400?random=8'} alt='Img' width={600} height={400} />
      </ParallaxComponent>

      <ParallaxComponent className={"self-start overflow-clip"} speed={1}>
        <Image src={'https://picsum.photos/600/400?random=99'} alt='Img' width={600} height={400} />
      </ParallaxComponent>

      <ParallaxComponent className={"self-center overflow-hidden"} speed={-1} >
        <Image className='cursor-move grayscale hover:scale-125 hover:grayscale-0 transition duration-300 ease-in-out' src={'https://picsum.photos/600/400?random=1'} alt='Img' width={600} height={400} id='last-img'/>
      </ParallaxComponent>
    </>
  )
}

export default ImageComponent