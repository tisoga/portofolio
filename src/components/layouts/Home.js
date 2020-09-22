import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import { gitHubIcon } from '../../assets/images';
import { ModalContext } from '../../context';
const Home = (props) => {
    const { language } = useContext(ModalContext)
    const initialAnimation = useSpring({
        transform: 'translateX(0%)',
        from: {
            transform: 'translateX(-100%)',
        }
    })
    // console.log(location.search)
    useEffect(() => {
        document.title = 'Home'
    }, [])
    return (
        <div className='flex flex-col items-stretch mb-10'>
            {language.value === 'Indonesia'
                ?
                <animated.div className='flex flex-col justify-center items-center mt-20' style={initialAnimation}>
                    <h1 className='font-serif text-6xl text-white text-center cursor-default'>Hai, Saya Ryan Afrizal.</h1>
                    <div className='flex flex-wrap justify-center'>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Saya</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Adalah</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Seorang</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Programmer,</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Yang</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Berasal</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Dari</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Bandung,</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Indonesia.</p>
                    </div>
                    <div className='flex flex-wrap justify-center mt-2'>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Terima</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Kasih,</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Telah</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Melihat</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Portofolio</p>
                        <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Saya.</p>
                    </div>
                    <NavLink
                        to='/project'
                        className='text-4xl text-white bg-transparent border-white border-4 p-4 md:mt-10 rounded-lg hover:text-indigo-900 hover:bg-white'>
                        Lihat Project
                </NavLink>
                </animated.div>
                :
                <animated.div className='flex flex-col justify-center items-center mt-20' style={initialAnimation}>
                    <div>
                        <h1 className='font-serif text-6xl text-white text-center cursor-default'>Hello, My Name is Ryan Afrizal.</h1>
                        <div className='flex flex-wrap justify-center'>
                            <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>I'm</p>
                            <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>a</p>
                            <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Programmer,</p>
                            <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>From</p>
                            <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Bandung,</p>
                            <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Indonesia.</p>
                        </div>
                        <div className='flex flex-wrap justify-center mt-2'>
                            <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Thank</p>
                            <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>You,</p>
                            <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>For</p>
                            <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Viewing</p>
                            <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>My</p>
                            <p className='font-serif text-4xl text-teal-300 text-center transition delay-75 duration-1000 hover:text-white mr-2 cursor-default'>Portfolio</p>
                        </div>
                    </div>
                    <NavLink
                        to='/project'
                        className='text-4xl text-white bg-transparent border-white border-4 p-4 md:mt-10 rounded-lg hover:text-indigo-900 hover:bg-white'>
                        View Project
                </NavLink>
                </animated.div>
            }
            <animated.div className='flex mt-4 justify-center' style={initialAnimation}>
                <a href={'https://github.com/tisoga'} target={'_blank'} rel={'noopener noreferrer'}>
                    <img className='cursor-pointer' src={gitHubIcon} width={80} alt='Github Logo' />
                </a>
            </animated.div>
        </div>
    )
}

export default Home