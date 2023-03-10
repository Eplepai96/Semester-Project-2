import { renderPostTemplates } from "../templates/post.mjs";

export function setupSearch(listings) {
  if (!window.location.href.includes("/listings")) {
    window.location.href = "/listings";
  }

  const searchForm = document.querySelector("form#search");
  const listingsContainer = document.querySelector("#post");

  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();

      listingsContainer.innerHTML = "";

      const form = event.target;
      const searchTerm = form.term.value;
      const term = searchTerm.toLowerCase();

      const filteredListings = listings.filter(function (listing) {
        const title = listing.title.toLowerCase();
        const body = listing.body.toLowerCase();
        const tagsMatch = Boolean(
          listing.tags
            .map((tag) => tag.toLowerCase())
            .filter((tag) => tag.includes(term))
        );

        return title.includes(term) || body.includes(term) || tagsMatch;
      });

      setTimeout(() => {
        renderPostTemplates(filteredListings, listingsContainer);
      }, 2000);
    });
  }
}