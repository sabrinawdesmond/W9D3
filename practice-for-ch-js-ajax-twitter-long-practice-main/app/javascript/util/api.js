// export const followUser()

const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    "X-CSRF-Token": csrfToken,
    // Your code here
    ...options.headers
  };
  // "X-CSRF-Token": "csrfToken"
  return await fetch(url, options);
}

export function followUser(id) {
  return customFetch(`/users/${id}/follow`, {method: "POST"})
  .then (res=>{
    if (res.ok){
      return res.json()
    }else{
      throw res 
    }
  })
}

export function unfollowUser(id) {
  return customFetch(`/users/${id}/follow`, {method: "DELETE"})
  .then (res=>{
    if (res.ok){
      return res.json()
    }else{
      throw res 
    }
  })
}

