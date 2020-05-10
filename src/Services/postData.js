export function PostData(type, userData) {
    let BaseURL = 'https://staging-core-optimy.com/api/v1/';

    return new Promise((resolve, reject) =>{
    
         
        fetch(BaseURL+type, {
            method: 'POST',
            headers:{
                'authorization':'r0MrA268ORAobX53qkoaohaA7g9ek3JJ',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}