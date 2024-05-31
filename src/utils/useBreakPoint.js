import React, { useEffect, useState } from 'react'

const breakPoint = () => {
    const [widthSize,setWidthSize]=useState(0)

    useEffect(() => {

        const handleWidth = () => {
            setWidthSize(window.innerWidth)
        }

        window.addEventListener('resize',handleWidth)
        handleWidth();

        return () => window.removeEventListener('resize',handleWidth) 

    }, [])
    // console.log("width ---",widthSize);
    return widthSize
}

export default breakPoint

