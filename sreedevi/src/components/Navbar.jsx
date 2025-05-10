import logo from '../assets/sreedeviLogo.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} alt="Logo" className='mx-2' width={250} height={198} />
            </a>
        </div>

        <div className="m-8 flex items-center justify-center gap-7 text-4xl">
            <a href="https://www.linkedin.com/in/v-s-sreedevi-66558535b"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'>
                    <FaLinkedin />
            </a>

            <a href="https://github.com/Sreedevi0602"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'>
                    <FaGithub />
            </a>

        </div>
        

    </nav>
  )
}

export default Navbar