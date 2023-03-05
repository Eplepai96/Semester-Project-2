import { getProfile, getProfilePosts } from "../api/profiles/index.mjs";
import { renderPostTemplates } from "../templates/post.mjs";

export async function setDisplayProfileListener() {

  const profilePostsContainer = document.querySelector("#profilePostsContainer")
  const emailContainer = document.querySelector("#emailContainer")
  const nameContainer = document.querySelector("#nameContainer")
  const avatarContainer = document.querySelector("#avatarContainer")
  const creditsContainer = document.querySelector("#creditsContainer")

    const profile = await getProfile();

    name.value = profile.name;
    // email.value = profile.email;
    avatar.value = profile.avatar;
    credits.value = profile.credits;

    nameContainer.innerText = profile.name;
    // emailContainer.innerText = profile.email;
    avatarContainer.innerText = profile.avatar;
    creditsContainer.innerText = profile.credits;

    const profilePosts = await getProfilePosts();

    renderPostTemplates(profilePosts, profilePostsContainer)
}