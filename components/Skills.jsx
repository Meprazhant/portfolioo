import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from "framer-motion"

function Skills() {
    const ref = useRef(null)
    var refPic = useRef(null)
    const isView = useInView(ref)
    const isViewPic = useInView(refPic)
    const control = useAnimation()
    var piccontrol = useAnimation()
    useEffect(() => {
        if (isView) {
            control.start("visible")
        } else {
            control.start("hidden")
        }
    }, [isView])
    useEffect(() => {
        if (isViewPic) {
            piccontrol.start("visible")
        } else {
            piccontrol.start("hidden")
        }
    }, [isViewPic])

    const boxVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    }
    const reboxVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    }
    return (
        <div className='skills' id='skills'>
            <div className="flex justify-center items-center">
                <h1 className='text-5xl font-bold'>My Skills</h1>
            </div>

            <section class="relative pt-16 bg-blueGray-50">
                <div class="container mx-auto">
                    <div class="flex flex-wrap items-center">
                        <motion.div ref={refPic}
                            initial="hidden" animate={piccontrol} variants={boxVariants}
                            class="sm:w-10/12 md:w-8/12 lg:w-6/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                            <div class="relative flex flex-col min-w-0 break-words bg-info-200 w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                                <img alt="..." src="https://i.ibb.co/r38WZ4j/kaaf.jpg" class="w-full align-middle rounded-t-lg" />
                                <blockquote class="relative p-8 mb-4">
                                    {/* <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
                                        <polygon points="-30,95 583,95 583,65" class="text-pink-500 fill-current"></polygon>
                                    </svg> */}
                                    <h4 class="text-xl font-bold">
                                        My Skills and Experience
                                    </h4>
                                    <p class="text-md font-light mt-2">
                                        Here are some skills that I am good at. I am a fast learner and I am always learning new things.
                                    </p>
                                </blockquote>
                            </div>
                        </motion.div>

                        <div class="w-full md:w-6/12 px-4">
                            <div class="flex flex-wrap">
                                <div class="w-full md:w-6/12 px-4">
                                    <div class="relative flex flex-col mt-4">
                                        <motion.div animate={control} variants={reboxVariants} ref={ref} class="px-4 py-5 flex-auto">
                                            <div class="text-blueGray-500 p-1 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <img className='w-full h-full' src="https://th.bing.com/th/id/R.744f96b18fb3ef81b05512d78b679e25?rik=0FPv63kO3AKlmQ&pid=ImgRaw&r=0" alt="" />

                                            </div>
                                            <h6 class="text-xl mb-1 font-semibold">NEXT JS</h6>
                                            <p class="mb-4 text-blueGray-500">
                                                I have been working On Nextjs for 1 year. I have made many projects using Nextjs. I have also made an e-commerce for a company using Nextjs.
                                            </p>
                                        </motion.div>
                                    </div>
                                    <div class="relative flex flex-col min-w-0">
                                        <motion.div animate={control} variants={reboxVariants} ref={ref} class="px-4 py-5 flex-auto">
                                            <div class="text-blueGray-500 p-1 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <img className='w-full h-full' src="https://raw.githubusercontent.com/shahzaibkhalid/mern-app-generator/master/static/logo.png" alt="" />
                                            </div>
                                            <h6 class="text-xl mb-1 font-semibold">
                                                MERN Stack
                                            </h6>
                                            <p class="mb-4 text-blueGray-500">
                                                I have worked on MERN stack for some of my projects.
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                                <div class="w-full md:w-6/12 px-4">
                                    <div class="relative flex flex-col min-w-0 mt-4">
                                        <motion.div animate={control} variants={reboxVariants} ref={ref} class="px-4 py-5 flex-auto">
                                            <div class="text-blueGray-500 p-1 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <img src="https://th.bing.com/th/id/R.b81c0382fdfc29bc4a6603c1846f0acf?rik=AUACzJrX%2f0VCdA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fphp%2fphp_PNG35.png&ehk=SDq0mYWBBsWE3A6HnxdvAQErErsuHxmn50YjvmaL83Q%3d&risl=&pid=ImgRaw&r=0" />

                                            </div>
                                            <h6 class="text-xl mb-1 font-semibold">PHP</h6>
                                            <p class="mb-4 text-blueGray-500">
                                                I do know how to use PHP but I am not an expert in it. Also I have not used PHP in a while, I prefer using Nodejs rather then PHP.
                                            </p>
                                        </motion.div>
                                    </div>
                                    <div class="relative flex flex-col min-w-0">
                                        <motion.div animate={control} variants={reboxVariants} ref={ref} class="px-4 py-5 flex-auto">
                                            <div class="text-blueGray-500 p-1 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <img src="https://cdn.icon-icons.com/icons2/2429/PNG/512/figma_logo_icon_147289.png" />

                                            </div>
                                            <h6 class="text-xl mb-1 font-semibold">FIGMA</h6>
                                            <p class="mb-4 text-blueGray-500">
                                                I also uses Figma for designing my projects. I have some knowledge about UI/UX designs using Figma.
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="relative bg-blueGray-50 pt-8 pb-6 mt-2">
                    <div class="container mx-auto px-4">
                        <div class="flex flex-wrap items-center md:justify-between justify-center">
                            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                                <div class="text-sm text-blueGray-500 font-semibold py-1">
                                    Not only this, I have also worked on many other technologies like React, Redux, Tailwind CSS, Bootstrap, Material UI, Ant Design, Express, MongoDB, MySQL, PostgreSQL, Firebase, Heroku, Netlify, Vercel, Git, Github, etc.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>

        </div>
    )
}

export default Skills