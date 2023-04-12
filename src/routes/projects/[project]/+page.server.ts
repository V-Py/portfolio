import projects from '$lib/projects';
import { error } from '@sveltejs/kit';

const map = {};
for (const item of projects) {
	const key = item.ref;
	map[key] = item;
}

export const load = function (req) {
	const { project } = req.params;
	if (map[project]) {
		return map[project];
	} else {
		throw error(404);
	}
};