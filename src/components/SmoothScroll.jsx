"use client"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function SmoothScroll({ children }) {
    const lenis = useLenis(({ scroll }) => {

    })

    return (
        <ReactLenis root options={{ lerp: 0.1, }}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll