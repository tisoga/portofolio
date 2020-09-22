import React, { useContext, useEffect, useRef } from 'react'
import { ModalContext } from '../../context'
import data from '../data'
import { useSpring, animated } from 'react-spring';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

function useOutsideAlerter(ref) {
    const { modal, setModal } = useContext(ModalContext)
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setModal({
                    ...modal,
                    'button': false,
                    'id': ''
                })
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const ScreenShot = () => {
    const { modal } = useContext(ModalContext)
    // const selectedData = data.find(x => x.id === modal.id)
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const initialModalAnimation = useSpring({
        opacity: 1,
        from: {
            opacity: 0
        }
    })
    // const buttonLayout = []
    // for (var i in selectedData.button) {
    //     if (selectedData.button[i]) {
    //         console.log(selectedData.button[i])
    //         if (i !== "Screen") {
    //             buttonLayout.push(
    //                 <a href={selectedData.button[i]} key={i} className="btn_demo border-2 inline-block w-20 py-1 px-1 mt-1 bg-white rounded text-center font-serif cursor-pointer mr-1">{i}</a>
    //             )
    //         }
    //         else {
    //             buttonLayout.push(
    //                 <a href={selectedData.button[i]} key={i} className="btn_ss border-2 inline-block w-30 py-1 px-1 mt-1 bg-white rounded text-center font-serif cursor-pointer mr-1">Screen Shot</a>
    //             )
    //         }
    //     }
    // }

    return (
        <div className='h-screen w-full fixed flex justify-center items-center bg-black bg-opacity-75 p-2 md:py-2 md:px-40'>
            <div className="rounded shadow-lg w-full ">
                <Carousel>
                    <div>
                        <img src="assets/2.jpeg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/3.jpeg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        </div >
    )
}

export default ScreenShot