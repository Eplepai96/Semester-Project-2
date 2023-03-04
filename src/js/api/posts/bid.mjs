import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs"

const posts = "/listings";
const action = "/bids"
const method = "post"




export async function bidOnPost(postData) {
    const queryString = document.location.search;

    const params = new URLSearchParams(queryString);

    const postID = params.get("id");
    const bidURL = API_SOCIAL_URL + posts + postID + action;
    
    const response = await authFetch(bidURL, {
      method,
      body: JSON.stringify(postData)
    })
  
    return await response.json();
  }