import Link from 'next/link';
import Navbar from '.././components/Navbar';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center  p-24'>
			<h1 className='mb-12'>Welcome!</h1>
			<h1 className='mb-12'>
				You can find all users here !{' '}
				<Link
					className='block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4'
					href='/users'
				>
					Users
				</Link>
			</h1>
		</main>
	);
}
