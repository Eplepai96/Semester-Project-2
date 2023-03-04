import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs"

const action = "/listings";

export async function getPosts() {
  const updatePostURL = `${API_SOCIAL_URL}${action}`;
  
  const response = await authFetch(updatePostURL)

  return await response.json();
}

export async function getPost(id) {
  
  const queryString = document.location.search;

  const params = new URLSearchParams(queryString);

  const postID = params.get("id");

  const getPostURL = `${API_SOCIAL_URL}${action}/${postID}`;
  
  const response = await authFetch(getPostURL)

  return await response.json();
}