import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from "framer-motion"


function ProjectCard({ project }) {
    var [description, setdescription] = React.useState(project.description)
    function trimdesc() {
        var desc = project.description
        setdescription(desc.substring(0, 300) + "...")
    }
    useEffect(() => {
        trimdesc()
    }, [])
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
    const ref = useRef(null)
    const isView = useInView(ref)
    const control = useAnimation()
    useEffect(() => {
        if (isView) {
            control.start("visible")
        } else {
            control.start("hidden")
        }
    }, [isView])

    return (
        <motion.div initial="hidden" whileHover={{ scale: 1.1 }} ref={ref} animate={control} variants={boxVariants} class=" rounded-md bg-gray-800 shadow-lg h-full">
            <div class="md:flex overflow-y-hidden px-4 leading-none sm:max-w-4xl max-w-xl">
                <div class="flex md:h-80 h-40 p-5  items-center justify-center ">
                    <img
                        src={project.image}
                        alt="pic"
                        class="md:h-auto h-full  rounded-md object-contain  shadow-2xl border-4 border-gray-300 shadow-lg"
                    />
                </div>

                <div class="px-5 flex-col text-gray-300">

                    <p class="pt-4 text-2xl font-bold">{project.name}</p>
                    <hr class="hr-text" data-content="" />
                    <div class="text-md flex justify-between px-4 my-2">
                        <span class="font-bold">{(project.client) ? "Paid Work | " : ""}{project.status}</span>
                        <span class="font-bold"></span>
                    </div>
                    <p class="hidden md:block px-4 my-4 text-sm text-left">{description} </p>

                    <p class="flex text-md px-4 my-2">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-200 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline px-4 py-2 rounded-md">Visit</a>
                    </p>

                    <div class="text-xs py-5 flex flex-wrap">
                        {project.tech.map((tag, index) => (
                            <span key={index} class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">{tag}</span>
                        ))}
                    </div>
                </div>


            </div>
        </motion.div >
    )
}

export default ProjectCard