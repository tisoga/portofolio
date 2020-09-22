import React from 'react'
import data from '../data'
import { webImage, mobileImage, pythonIcon } from '../../assets/images'
import { useSpring, animated } from 'react-spring'

const ProjectScreen = ({ filter, setModal, idModal, language }) => {
    let locationAnimation = false
    const leftAnimation = useSpring({
        transform: 'translateX(0%)',
        from: {
            transform: 'translateX(-202%)',
        }
    })
    const rightAnimation = useSpring({
        transform: 'translateX(0%)',
        from: {
            transform: 'translateX(200%)',
        }
    })
    const Project = (props) => {
        let image = ''
        locationAnimation = !locationAnimation

        if (props.category === 'web') {
            image = webImage
        }
        else if (props.category === 'mobile') {
            image = mobileImage
        }
        else {
            image = pythonIcon
        }
        return (
            <animated.div className='bg-indigo-800 w-full md:w-1/3 mx-10 md:mx-30 mt-8 flex flex-col justify-center rounded shadow-outline border-white hover:bg-indigo-600 transition delay-100 duration-700 cursor-pointer'
                style={locationAnimation ? leftAnimation : rightAnimation}
                onClick={() => setModal({
                    ...idModal,
                    'button': true,
                    'id': props.id
                })}>
                <p className='text-center text-3xl text-white'>{language === 'Indonesia' ? props.name.id : props.name.en}</p>
                <img className='p-1 mt-5 ml-auto mr-auto' src={image} width={200} alt={'Category'}></img>
            </animated.div>
        )
    }

    return (
        <div className='flex flex-wrap h-full justify-center'>
            {data.filter((items) => items.category === filter || filter === 'all')
                .map(item => <Project key={item.id} id={item.id} name={item.name} category={item.category} />)}
        </div>
    )
}

export default ProjectScreen