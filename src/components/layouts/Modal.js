import React, { useContext, useEffect, useRef } from 'react'
import { ModalContext } from '../../context'
import data from '../data'
import { useSpring, animated } from 'react-spring';

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

const Modal = () => {
    const { modal, language } = useContext(ModalContext)
    const selectedData = data.find(x => x.id === modal.id)
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const initialModalAnimation = useSpring({
        opacity: 1,
        from: {
            opacity: 0
        }
    })

    const buttonLayout = []
    for (var i in selectedData.button) {
        if (selectedData.button[i]) {
            // if (i === "Mobile" || i === 'Web') {
            //     buttonLayout.push(
            //         <button key={i} onClick={() => switchVersion(selectedData.button[i])} className="btn_demo border-2 inline-block w-20 py-1 px-1 mt-1 bg-white rounded text-center font-serif cursor-pointer mr-1">{i}</button>
            //     )
            // }
            if (i === 'Private') {
                buttonLayout.push(
                    <button className="btn_private inline-block w-20 py-1 px-1 mt-1 bg-white bg-opacity-50 rounded text-center font-serif cursor-default mr-1">
                        Private
                    </button>
                )
            }
            else if (i !== "Screen") {
                buttonLayout.push(
                    <a href={selectedData.button[i]} key={i} className="btn_demo border-2 inline-block w-20 py-1 px-1 mt-1 bg-white rounded text-center font-serif cursor-pointer mr-1" target={'_blank'} rel={'noopener noreferrer'}>{i}</a>
                )
            }
            else {
                buttonLayout.push(
                    <a href={selectedData.button[i]} key={i} className="btn_ss border-2 inline-block w-30 py-1 px-1 mt-1 bg-white rounded text-center font-serif cursor-pointer mr-1" target={'_blank'} rel={'noopener noreferrer'}>Screen Shot</a>
                )
            }
        }
    }

    return (
        <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-75 p-4'>
            <animated.div className="bg-gray-700 rounded shadow-lg w-full md:w-1/2 lg:w-1/2 xl:w-1/3"
                ref={wrapperRef}
                style={initialModalAnimation}>
                <div className="px-4 py-2 modal_title">
                    <div className="project_title">
                        {language.value === 'Indonesia'
                            ? <h3 className="text-gray-400 font-serif">NAMA PROJECT :</h3>
                            : <h3 className="text-gray-400 font-serif">PROJECT NAME :</h3>
                        }
                        <h3 className="text-white font-serif text-2xl mt-1">
                            {language.value === "Indonesia" ? selectedData.name.id : selectedData.name.en}
                        </h3>
                    </div>
                    <div className="project_make ml-2 mt-1">
                        {selectedData.tags.map((tag) =>
                            <div key={tag} className="border-2 w-auto inline-block text-center px-2 py-1 border-black text-gray-400 rounded font-bold mt-2 mr-1">
                                {tag}
                            </div>
                        )}
                    </div>
                </div>
                <div className="px-4 py-2 modal_body">
                    {language.value === 'Indonesia'
                        ?
                        <div className="text-gray-400 font-serif body_title">
                            Tentang Project :
                        </div>
                        :
                        <div className="text-gray-400 font-serif body_title">
                            About Project :
                        </div>
                    }
                    <div className="body_about overflow-y-auto h-40 text-justify mt-4 text-gray-400 px-2">
                        <p className="whitespace-pre-line">
                            {language.value === 'Indonesia' ? selectedData.aboutProject.id : selectedData.aboutProject.en}
                        </p>
                    </div>
                </div>
                <div className="px-4 py-2 modal-footer">
                    <div className="footer_btn px-2 py-4">
                        {/* <a href="#" className="btn_demo border-2 inline-block w-20 py-1 px-1 mt-1 bg-white rounded text-center font-serif cursor-pointer mr-1">
                            Demo
                        </a>
                        <a href="#" className="btn_github border-2 inline-block w-20 py-1 px-1 mt-1 bg-white rounded text-center font-serif cursor-pointer mr-1">
                            Github
                    </a>
                        <a href="#" className="btn_ss border-2 inline-block w-30 py-1 px-1 mt-1 bg-white rounded text-center font-serif cursor-pointer mr-1">
                            Screen Shot
                    </a>
                        <a href="#" className="btn_private border-2 inline-block w-20 py-1 px-1 mt-1 bg-white rounded text-center font-serif cursor-pointer mr-1">
                            Private
                    </a>
                        <a href="#" className="btn_mobile border-2 inline-block w-20 py-1 px-1 mt-1 bg-white rounded text-center font-serif cursor-pointer mr-1">
                            Mobile
                    </a>
                        <a href="#" className="btn_web border-2 inline-block w-20 py-1 px-1 mt-1 bg-white rounded text-center font-serif cursor-pointer mr-1">
                            Web
                    </a>
                        <a href="#" className="btn_rest border-2 inline-block w-20 py-1 px-1 mt-1 bg-white rounded text-center font-serif cursor-pointer mr-1">
                            REST
                    </a> */}
                        {buttonLayout}
                    </div>
                </div>
            </animated.div>
        </div>
    )
}

export default Modal