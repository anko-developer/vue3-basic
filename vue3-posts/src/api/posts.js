import { posts } from './index';

function getPosts(params) {
	return posts.get('/', { params });
}

function getPostById(id) {
	return posts.get(`/${id}`);
}

function createPost(data) {
	return posts.post('', data);
}

function updatePost(id, data) {
	return posts.put(`/${id}`, data);
}

function deletePost(id) {
	return posts.delete(`/${id}`);
}

export { getPosts, getPostById, createPost, updatePost, deletePost };
