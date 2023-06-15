'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function useOutsideClick(ref, callback) {
	const handleClick = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	});
}

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const node = useRef();
	useOutsideClick(node, () => {
		if (isOpen) setIsOpen(false);
	});

	return (
		<nav
			ref={node}
			className='flex items-center justify-between flex-wrap bg-indigo-500 p-6 fixed top-0  w-full z-10 left-0 '
		>
			<div className='flex items-center flex-shrink-0 text-white mr-6'>
				<span className='font-semibold text-xl tracking-tight'>Next.js</span>
			</div>
			<div className='block lg:hidden'>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-white hover:border-white'
				>
					<svg
						className='fill-current h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<title>Menu</title>
						<path d='M0 0h20v20H0z' fill='none' />
						<path d='M0 4h20v1H0zm0 6h20v1H0zm0 6h20v1H0z' />
					</svg>
				</button>
			</div>
			<div
				className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
					isOpen ? '' : 'hidden'
				}`}
			>
				<div className='text-sm lg:flex-grow'></div>
				<div>
					<Link
						className='block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4'
						href='/'
					>
						Home
					</Link>
					<Link
						className='block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4'
						href='/users'
					>
						Users
					</Link>
				</div>
			</div>
		</nav>
	);
}
