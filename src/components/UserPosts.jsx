import BackButton from '@/components/BackButton';

export default function UserPosts({ user, posts }) {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<span className='self-start'>
				<BackButton />
			</span>

			<h1 className='text-3xl mb-4  '>
				{' '}
				{user.name} {user.surname}
			</h1>
			<h2 className='text-2xl mb-12'>Posts</h2>
			<div className='flex flex-wrap gap-4'>
				{posts.map((post, index) => (
					<div key={post.id}>
						<div className='bg-indigo-500  hover:drop-shadow-lg hover:scale-105 transition-all duration-500 ease-in-out   rounded p-2 w-72 h-72   '>
							<h1 className='text-left mb-4'> {post.title}</h1>

							<p>{post.body}</p>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
