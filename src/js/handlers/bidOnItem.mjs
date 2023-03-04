import { bidOnPost } from "../api/posts/bid.mjs";

export async function setBidListener() {
  const button = document.querySelector("#bidForm");
  
  if (button) {
    button.addEventListener("submit", (event) => {
      event.preventDefault()
      const bidInput = document.querySelector("#bidInput")
      const amount = bidInput.innerText
      
      console.log(amount)
      // Send it to the API
      bidOnPost(amount)
    })
  }
}