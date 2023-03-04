import { createPost } from "../api/posts/index.mjs";

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const formData = event.target;
      const title = formData.title.value;
      const description = formData.description.value;
      const endsAt = formData.endsAt.value;

      const convertTags = formData.tags.value;
      const convertMedia = formData.media.value;

      const tags = [];
      const media = [];

      tags.push (convertTags)
      media.push (convertMedia)
      
      const createData = {
        title: title,
        description: description,
        tags: tags,
        media: media,
        endsAt: endsAt
      }; 
      console.log(createData)
      // Send it to the API
      createPost(createData)
    })
  }
}