import config from '../config'
const BASE_URL = `http://localhost:8080/api`  

function apiDelete(noteId) {

  const URL = `${BASE_URL}/notes/${noteId}`;
  const options = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "BEARER abcde"
    }
  };
  fetch(URL, options)
}

function apiPost(data){

  if(data.type === 'folders') {  
    
    const itemName = {name: data.datum.name};
    const jsonName = JSON.stringify(itemName)
    console.log(jsonName)
    const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': config.API_KEY,
          },
          body: jsonName
      };
    return fetch(`${BASE_URL}/folders`, options); 

  } else {

  const itemBody = {name: data.datum.name, content:data.datum.content, folder_id:data.datum.folderId}
  const jsonBody = JSON.stringify(itemBody)
  const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': config.API_KEY,
        },
        body: jsonBody
    };
    return fetch(`${BASE_URL}/notes`, options); 
  }
}


export default {
  apiPost: apiPost,
  apiDelete: apiDelete
}