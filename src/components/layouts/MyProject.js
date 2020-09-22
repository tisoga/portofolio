import React, { useState, useContext, useEffect } from 'react';
import ProjectScreen from './ProjectScreen';
import { ModalContext } from '../../context';
import { useSpring, animated } from 'react-spring';

const MyProject = () => {
    const [btnClicked, setClicked] = useState('all');
    const { modal, setModal, language } = useContext(ModalContext);
    const initialTitleAnimation = useSpring({
        transform: 'translateX(0%)',
        from: {
            transform: 'translateX(10%)',
        }
    })
    const initialDescAnimation = useSpring({
        transform: 'translateX(0%)',
        from: {
            transform: 'translateX(-10%)',
        }
    })
    const initialButtonAnimation = useSpring({
        config: { tension: 50 },
        opacity: 1,
        from: {
            opacity: 0,
        }
    })
    useEffect(() => {
        document.title = 'My Project'
    }, [])
    return (
        <div className='flex flex-col items-stretch mb-5'>
            {language.value === 'Indonesia'
                ?
                <div>
                    <h1 className='font-serif text-5xl text-white text-center underline '
                        style={initialTitleAnimation}>PORTOFOLIO</h1>
                    <p className='font-serif text-xl text-teal-300 text-center px-5 md:text-3xl'
                        style={initialDescAnimation}>Ini Adalah Beberapa Project Yang Pernah Saya Buat:</p>
                    <animated.div className='flex justify-around flex-wrap' style={initialButtonAnimation}>
                        <button className={'inline-block bg-dark border-4 w-64 mt-2 py-1 text-white text-2xl hover:bg-teal-400 rounded ' + (btnClicked === 'all' && 'btnSelected')}
                            onClick={() => setClicked('all')}>Semua Project</button>
                    </animated.div>
                </div>
                :
                <div>
                    <h1 className='font-serif text-5xl text-white text-center underline '
                        style={initialTitleAnimation}>PORTFOLIO</h1>
                    <p className='font-serif text-xl text-teal-300 text-center px-5 md:text-3xl'
                        style={initialDescAnimation}>These Are Some Project I've Made:</p>
                    <animated.div className='flex justify-around flex-wrap' style={initialButtonAnimation}>
                        <button className={'inline-block bg-dark border-4 w-64 mt-2 py-1 text-white text-2xl hover:bg-teal-400 rounded ' + (btnClicked === 'all' && 'btnSelected')}
                            onClick={() => setClicked('all')}>All Project</button>
                    </animated.div>
                </div>
            }
            <animated.div className='flex justify-around flex-wrap' style={initialButtonAnimation}>
                <button className={'inline-block bg-dark border-4 w-40 mt-2 py-1 text-white text-2xl hover:bg-teal-400 rounded ' + (btnClicked === 'python' && 'btnSelected')}
                    onClick={() => setClicked('python')}>Python</button>
                <button className={'inline-block bg-dark border-4 w-40 mt-2 py-1 text-white text-2xl hover:bg-teal-400 rounded ' + (btnClicked === 'web' && 'btnSelected')}
                    onClick={() => setClicked('web')}>Web</button>
                <button className={'inline-block bg-dark border-4 w-40 mt-2 py-1 text-white text-2xl hover:bg-teal-400 rounded ' + (btnClicked === 'mobile' && 'btnSelected')}
                    onClick={() => setClicked('mobile')}>Mobile</button>
            </animated.div>
            <ProjectScreen filter={btnClicked} setModal={setModal} idModal={modal} language={language.value}/>
        </div>
    )
}

export default MyProject