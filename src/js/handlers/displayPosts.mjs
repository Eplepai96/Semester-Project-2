import { getPosts } from "../api/posts/read.mjs";
import { renderPostTemplates } from "../templates/post.mjs";


export async function setDisplayListingsListener() {
    const posts = await getPosts();
    const postContainer = document.querySelector('#post');
    renderPostTemplates(posts, postContainer);
}

