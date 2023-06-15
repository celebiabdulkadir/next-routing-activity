import Link from 'next/link';
import Navbar from '.././components/Navbar';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24'>
			<div className='flex flex-col justify-center items-center align-center'>
				{' '}
				<h1 className='mb-12 text-2xl'>Welcome!</h1>
				<h1 className='mb-12 text-lg'>You can find all users here !</h1>
				<Link
					className='block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4 text-xl hover:scale-105 '
					href='/users'
				>
					Users
				</Link>
			</div>
		</main>
	);
}
