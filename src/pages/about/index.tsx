import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const About = () => {
    const router = useRouter()

    if (typeof window == "undefined") {
        console.log("Application is on server side12");
    } else {
        console.log("Application is on client side12");
    }

  return (
    <div>
      <h3>About Page</h3>
    </div>
  )
}

export default About
