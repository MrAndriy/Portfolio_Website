import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { FiMessageSquare } from 'react-icons/fi';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');
	return (
		<nav>
			<a
				href='#'
				onClick={() => setActiveNav('#')}
				className={activeNav === '#' ? 'active' : ''}
			>
				<AiOutlineHome />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			>
				<AiOutlineUser />
			</a>
			<a
				href='#expirience'
				onClick={() => setActiveNav('#expirience')}
				className={activeNav === '#expirience' ? 'active' : ''}
			>
				<BiBook />
			</a>
			<a
				href='#services'
				onClick={() => setActiveNav('#services')}
				className={activeNav === '#services' ? 'active' : ''}
			>
				<RiServiceLine />
			</a>
			<a
				href='#contacts'
				onClick={() => setActiveNav('#contacts')}
				className={activeNav === '#contacts' ? 'active' : ''}
			>
				<FiMessageSquare />
			</a>
		</nav>
	);
};

export default Nav;
