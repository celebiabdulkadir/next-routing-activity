import getUser from '../../../lib/getUser';

import Link from 'next/link';
import getUserPosts from '../../../lib/getUserPosts';
import UserPosts from '../../../components/UserPosts';

export default async function UserPage({ params }) {
	if (!params || !params.id) {
		return <div>Error: Missing user ID</div>;
	}
	const userPosts = getUserPosts(params?.id);
	const posts = await userPosts;
	const userData = getUser(params?.id);
	const user = await userData;
	console.log(user);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<UserPosts user={user} posts={posts} />
		</main>
	);
}
