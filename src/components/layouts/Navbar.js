import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ModalContext } from "../../context";
const Navbar = () => {
	const { language, setLanguage } = useContext(ModalContext)
	const [menu, setMenu] = useState({
		main: false,
		language: false
	})
	const changelanguage = (id) => {
		if (id === 'IDN') {
			setLanguage({
				...language,
				'value': 'Indonesia',
				'btn': false
			})
			setMenu({
				...menu, 'language': false
			})
		}
		else {
			setLanguage({
				...language,
				'value': 'English',
				'btn': false
			})
			setMenu({
				...menu, 'language': false
			})
		}
	}
	return (
		<>
			<nav className="flex-row md:flex items-center bg-indigo-600 py-4 px-1 justify-end">
				<div className="block md:hidden">
					<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-white hover:text-white hover:bg-white hover:text-indigo-900"
						onClick={() => setMenu({ ...menu, 'main':!menu.main })}>
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
					</button>
				</div>
				<div className='md:hidden'>
					{menu.main &&
						<div>
							<NavLink
								to='/home'
								activeClassName='navbarSelected underline'
								className='block p-3 hover:text-red-400 hover:underline text-2xl text-purple-100  md:block'>Home
							</NavLink>
							<NavLink
								to='/project'
								activeClassName='navbarSelected underline'
								className='block p-3 hover:text-red-400 hover:underline text-2xl text-purple-100 md:block'>My Project
							</NavLink>
							<div className="block p-3 hover:text-red-400 hover:underline text-2xl text-purple-100 md:block cursor-pointer"
								onClick={() => setMenu({ ...menu, 'language': !menu.language })}>{language.value}</div>
							{menu.language &&
								<>
									<div className="block p-2 text-black text-2xl hover:bg-purple-400 hover:text-white cursor-pointer bg-white"
										onClick={() => changelanguage('IDN')}>Indonesia</div>
									<div className="block p-2 text-black text-2xl hover:bg-purple-400 hover:text-white cursor-pointer bg-white"
										onClick={() => changelanguage('ENG')}>English</div>
								</>
							}
						</div>
					}
				</div>
				<div className="inline-block p-3 text-purple-100 hover:text-indigo-600 hover:bg-white text-2xl mr-auto border-white border-4 w-40 text-center invisible hidden md:block">{language.value}</div>
				<NavLink
					to='/home'
					activeClassName='navbarSelected underline'
					className='inline-block p-3 hover:text-red-400 hover:underline text-2xl text-purple-100 hidden md:block'>Home
					</NavLink>
				<NavLink
					to='/project'
					activeClassName='navbarSelected underline'
					className='inline-block p-3 hover:text-red-400 hover:underline text-2xl text-purple-100 text-center hidden md:block'>My Project
					</NavLink>
				<div className="inline-block p-3 text-purple-100 hover:text-indigo-600 hover:bg-white text-2xl ml-auto border-white border-4 w-40 text-center cursor-pointer hidden md:block"
					onClick={() => setLanguage({ ...language, 'btn': !language.btn })}>{language.value}</div>
				<div className={'bg-white w-64 right-0 rounded absolute mr-auto mt-48 ' + (!language.btn && 'hidden')}>
					<div className="block p-2 text-black text-2xl hover:bg-purple-400 hover:text-white rounded cursor-pointer"
						onClick={() => changelanguage('IDN')}>Indonesia</div>
					<div className="block p-2 text-black text-2xl hover:bg-purple-400 hover:text-white rounded cursor-pointer"
						onClick={() => changelanguage('ENG')}>English</div>
				</div>
			</nav>

		</>
	);
};



export default Navbar;
