'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
	const router = useRouter();

	const goBack = () => {
		router.back();
	};

	return (
		<button
			className='px-4 py-2 text-white bg-indigo-600 rounded shadow hover:bg-indigo-500 transition-colors duration-300'
			onClick={goBack}
		>
			Go back
		</button>
	);
}
