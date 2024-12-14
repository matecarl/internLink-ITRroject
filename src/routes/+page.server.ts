import { db } from '$lib/server/db';

export const load = async () => {
	const users = await db.query.user.findMany();

	console.log(users);

	return {
		users
	};
}