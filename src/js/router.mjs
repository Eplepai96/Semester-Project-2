import * as listeners from "./handlers/index.mjs";



export default function router() {
  const path = location.pathname;
  
  switch (path) {
    case '/index.html':
      listeners.setDisplayListingsListener()
      return;
    case '/listings/':
      listeners.setDisplayListingsListener()
      return;
    case '/listings/listing/':
      listeners.setDisplayListingListener()
      listeners.setBidListener()
      return;
    case '/profile/login/':
      listeners.setLoginFormListener();
      return;
    case '/profile/register/':
      listeners.setRegisterFormListener()
      return;
    case '/listing/create/':
      listeners.setCreatePostFormListener()
      return;
    // case '/listing/edit/':
    //   listeners.setUpdatePostListener()
    //   return;
    case '/profile':
      listeners.setLogoutListener()
      listeners.setDisplayProfileListener()
      return;
    case '/profile/edit/':
      listeners.setUpdateProfileListener()
      return;
  }
}