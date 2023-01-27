<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Anko</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<router-link class="nav-link" active-class="active" to="/"
								>Home</router-link
							>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" active-class="active" to="/about"
								>About</router-link
							>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" active-class="active" to="/posts"
								>게시글</router-link
							>
						</li>
					</ul>
					<div class="d-flex" role="search">
						<button @click="goPage" class="btn btn-outline-light" type="button">
							글쓰기
						</button>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goPage = () => {
	// router.push('/posts/create');
	router.push({
		name: 'PostCreate',
	});
};
</script>

<style lang="scss" scoped></style>
