import getAllUsers from '../../lib/getAllUsers';
import Link from 'next/link';
import BackButton from '@/components/BackButton';

export default async function UserPage() {
	const usersData = getAllUsers();
	const users = await usersData;

	return (
		<main className='flex min-h-screen flex-col justify-start gap-12 p-24 w-full'>
			<span>
				<BackButton />
			</span>
			<h1 className='text-center text-3xl '>USERS</h1>
			<div className='flex flex-wrap gap-4'>
				{users?.map((user, index) => (
					<div
						key={user.id}
						className='w-64  border border-gray-200 shadow-lg rounded overflow-hidden hover:drop-shadow-lg hover:scale-105 transition-all duration-500 ease-in-out'
					>
						<h1 className='text-left'>
							<Link className='block py-2 px-3 ' href={`/user/${user.id}`}>
								<p>Name : {user.name}</p>
								<p>UserName : {user.username}</p>
								<p>Email: {user.email}</p>
								<p>Phone : {user.phone}</p>
								<p>Website : {user.website}</p>
								<p>Company : {user.company.name}</p>
								<p>Address : {user.address.street}</p>
								<p>City : {user.address.city}</p>
								<p>ZipCode : {user.address.zipcode}</p>
								<p>Lat : {user.address.geo.lat}</p>
								<p>Lng : {user.address.geo.lng}</p>
							</Link>
						</h1>
					</div>
				))}
			</div>
		</main>
	);
}
