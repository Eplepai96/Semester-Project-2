export function postsTemplate (data) {
    const post = document.createElement("div");
    post.classList.add("post");

    const link = document.createElement("a")
    link.setAttribute('href', `/listings/listing/?id=${data.id}`)
    link.innerText = 'View listing'
    link.classList.add("btn")
    link.classList.add("btn-primary")
    link.classList.add("w-100")
    link.classList.add("text-danger")
    link.classList.add("my-2")
    
    
    
    post.style.maxWidth = "300px"
    
    post.style.flex = "flexbox"
    post.style.border = "1px rgb(200, 200, 200) solid";
    post.style.borderRadius = "3px"
    post.style.margin = "10px"
    post.style.boxShadow = "2px 3px rgb(235, 235, 235)"
    post.style.borderBottom = "1px solid light"
    
    const tags = data.tags;

    
    if (data.title) {
      const title = document.createElement ("p")
      post.innerText = data.title;
      title.style.fontWeight = "bold";
      title.style.borderBottom = "1px solid rgb(200, 200, 200)"
      title.classList.add("text-center")
      post.append(title)
    }
    if (data.media) {
        const img = document.createElement ("img");
        img.src = data.media;
        img.alt = `image from ${data.title}`
        img.style.width = "100%"
        img.style.height = "200px"
        img.style.objectFit = "cover"
        post.append(img)
    }   else if (!data.madia){
        const img = document.createElement ("img");
        img.src = "/images.img/heather-ford-5gkYsrH_ebY-unsplash.jpg"
        img.innerText = img.src
        img.alt = `image from ${img.src}`
        img.style.width = "100%"
        img.style.height = "200px"
        img.style.objectFit = "cover"
        post.append(img)
    }

    if (data._count.bids) {
      const amount = data._count.bids;
      post.append (amount)
    }
    if (data.endsAt) {
        const timeStamp = data.endsAt;
        post.append(timeStamp)
    }
    post.append(link)
    
    console.log(data)
    return post;
}




export function postTemplate (data){
  const post = document.createElement("div");
  const descriptionContainer = document.createElement("container")
  if (data.title) {
    const title = document.createElement ("h1")
    title.innerText = data.title;
    title.style.fontWeight = "bold";
    descriptionContainer.append(title)
  }
  if (data.media) {
      const img = document.createElement ("img");
      img.src = data.media;
      img.alt = `image from ${data.title}`
      img.style.height = "350px"
      img.style.objectFit = "cover"
      img.classList.add("col-12")
      img.classList.add("col-md-6")
      post.append(img)
  }   
  if (data.description) {
    const descriptionHeader = document.createElement("h2")
    descriptionHeader.innerText = "Description:"
    descriptionHeader.classList.add ("h2")
    const description = document.createElement("p");
    description.innerText = data.description;
    
    // description.classList.add("p-1")
    descriptionContainer.append(descriptionHeader, description)
    
  } 
  else if(!data.description) {
    const description = document.createElement("p");
    const descriptionHeader = document.createElement("h2")
    descriptionHeader.innerText = "Description:"
    descriptionHeader.classList.add ("h2")
    description.innerText = "This post has no description";
    descriptionContainer.append(descriptionHeader, description)
  }

  
  if (data.endsAt) {
      const time = document.createElement ("p")
      const endsHeader = document.createElement ("h3")
      const timeContainer = document.createElement ("container")
      endsHeader.innerText = "Ends:"
      time.src = data.endsAt;
      let timeStamp = new Date(time.src).toISOString().split('T')[0]
      endsHeader.classList.add ("mt-5")
      timeContainer.style.cssFloat = ("right")
      time.innerText = timeStamp;
      descriptionContainer.append(endsHeader, time)
      
  }  

  const bidForm = document.createElement("form")
  bidForm.setAttribute("id", "bidForm")
  const bidInput = document.createElement("input")
  bidInput.setAttribute("id", "bidInput")
  // bidInput.setAttribute('href', `/listings/listing/?id=${data.id}/bids`)
  const bidButton = document.createElement("button")
  bidButton.setAttribute("id", "bidButton")
  bidButton.classList.add ("btn")
  bidButton.classList.add ("btn-primary")
  bidButton.classList.add ("text-danger")
  bidButton.classList.add ("m-1")
  bidButton.innerText = "Place bid"
  const bidHeader = document.createElement("h4")
  bidHeader.innerText = "Bid on Item"
  bidHeader.classList.add ("mt-5")
  bidForm.append(bidHeader, bidInput, bidButton)
  descriptionContainer.append(bidForm)
  // if (data.bids[0]?.amount) {
  //   const amount = document.createElement ("p")
  //   amount.innerText = data.bids[0]?.amount
  //   post.append(amount)
  // }
  descriptionContainer.style.cssFloat = ("right")
  descriptionContainer.classList.add ("col-md-5")
  descriptionContainer.classList.add ("col-12")
  post.append(descriptionContainer)
  
  return post;
}


export function renderPostTemplate (data, parent) {
    parent.append (postTemplate(data))
}

export function renderPostTemplates (dataList, parent) {
    parent.append(...dataList.map(postsTemplate))
};