import axios from 'axios';

function getPosts(params) {
	return axios.get('http://localhost:5000/posts', { params });
}

function getPostById(id) {
	return axios.get(`http://localhost:5000/posts/${id}`);
}

function createPost(data) {
	return axios.post('http://localhost:5000/posts', data);
}

function updatePost(id, data) {
	return axios.put(`http://localhost:5000/posts/${id}`, data);
}

function deletePost(id) {
	return axios.delete(`http://localhost:5000/posts/${id}`);
}

export { getPosts, getPostById, createPost, updatePost, deletePost };
