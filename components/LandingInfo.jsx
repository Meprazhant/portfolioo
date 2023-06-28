import React from 'react'
import { motion } from 'framer-motion'

function LandingInfo() {
    return (
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: 1
                }
            },
        }} className='sm:w-3/5 w-full p-5 sm:p-2'>
            <h2 className='text sm:text-5xl text-3xl font-bold'>Hello, I am <span className='text text-warning'>Prashant.</span></h2>
            <p className='text sm:text-xl text-xl py-5'>
                a BCA student at Mechi Multiple Campus in Bhadrapur, and I come from Kachankawal Jhapa. Apart from my studies, I am a freelance full stack web developer specializing in Next.js, MERN stack, and Node.js. With proficiency in tools like Figma and Photoshop, I bring creativity to my projects. My passion for web development and diverse skill set make me a versatile professional sought after in the industry.
            </p>
        </motion.div>
    )
}

export default LandingInfo