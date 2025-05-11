import { RiReactjsLine } from "react-icons/ri"
import { SiDjango, SiPython, SiBootstrap, SiShopify, SiMysql, SiSqlite, SiJavascript, SiAxios, SiRedux, SiHtml5, SiCss3, SiGit, SiGithub } from 'react-icons/si';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10 ],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 1.5 }}
      className='my-20 text-center text-5xl'>Technologies</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex gap-4 flex-wrap">
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}>
          <RiReactjsLine className="text-7xl" style={{ color: '#61DAFB' }} />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4">
          <SiDjango className="text-7xl text-green-700" />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4">
          <SiPython className="text-7xl" style={{ color: '#3776AB' }} />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4">
          <SiMysql className="text-7xl" style={{ color: '#4479A1' }} />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4">
          <SiSqlite className="text-7xl" style={{ color: '#003B57' }} title="SQLite" />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4">
          <SiJavascript className="text-7xl" style={{ color: '#F7DF1E' }} />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(5.5)}
          className="p-4">
          <SiShopify className="text-7xl" style={{ color: '#7AB55C' }} />
        </motion.div>

        </motion.div>

        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex gap-4 flex-wrap mt-4">

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(5.5)}
          className="p-4">
          <SiAxios className="text-7xl" style={{ color: '#5A29E4' }} />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4">
          <SiRedux className="text-7xl" style={{ color: '#764ABC' }} title="Redux" />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4">
          <SiBootstrap className="text-7xl" style={{ color: '#7952B3' }} />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4">
          <SiHtml5 className="text-7xl" style={{ color: '#E34F26' }} title="HTML5" />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4">
          <SiCss3 className="text-7xl" style={{ color: '#1572B6' }} />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4">
          <SiGit className="text-7xl" style={{ color: '#F05032' }} />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4 rounded ">
          <SiGithub className="text-7xl" style={{ color: '#ffffff'}} />
        </motion.div>

        </motion.div>

        

      </div>
    </div>
  )
}

export default Technologies