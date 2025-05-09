import { RiReactjsLine } from "react-icons/ri"
import { SiDjango, SiPython, SiBootstrap, SiShopify, SiMysql, SiSqlite, SiJavascript, SiAxios, SiRedux, SiHtml5, SiCss3, SiGit, SiGithub } from 'react-icons/si';


const Technologies = () => {
  return (
    <div className='pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex gap-4 flex-wrap">
        <div>
          <RiReactjsLine className="text-7xl" style={{ color: '#61DAFB' }} />
        </div>

        <div className="p-4">
          <SiDjango className="text-7xl text-green-700" />
        </div>

        <div className="p-4">
          <SiPython className="text-7xl" style={{ color: '#3776AB' }} />
        </div>

        <div className="p-4">
          <SiMysql className="text-7xl" style={{ color: '#4479A1' }} />
        </div>

        <div className="p-4">
          <SiSqlite className="text-7xl" style={{ color: '#003B57' }} title="SQLite" />
        </div>

        <div className="p-4">
          <SiJavascript className="text-7xl" style={{ color: '#F7DF1E' }} />
        </div>

        <div className="p-4">
          <SiShopify className="text-7xl" style={{ color: '#7AB55C' }} />
        </div>

        </div>

        <div className="flex gap-4 flex-wrap mt-4">

        <div className="p-4">
          <SiAxios className="text-7xl" style={{ color: '#5A29E4' }} />
        </div>

        <div className="p-4">
          <SiRedux className="text-7xl" style={{ color: '#764ABC' }} title="Redux" />
        </div>

        <div className="p-4">
          <SiBootstrap className="text-7xl" style={{ color: '#7952B3' }} />
        </div>

        <div className="p-4">
          <SiHtml5 className="text-7xl" style={{ color: '#E34F26' }} title="HTML5" />
        </div>

        <div className="p-4">
          <SiCss3 className="text-7xl" style={{ color: '#1572B6' }} />
        </div>

        <div className="p-4">
          <SiGit className="text-7xl" style={{ color: '#F05032' }} />
        </div>

        <div className="p-4 rounded ">
          <SiGithub className="text-7xl" style={{ color: '#ffffff'}} />
        </div>

        </div>

      </div>
    </div>
  )
}

export default Technologies