import http from 'k6/http'
import {check} from 'k6'

export const options={
    cloud:{
        projectId: 3747329
    }
}

export default function(){
    let res= http.get('https://test-api.k6.io/public/crocodiles/')
          const crocodiles= res.json();
          console.log(res.json())

          console.log(crocodiles[0].id);
          
          
         const crocodileId= crocodiles[0].id;
         const crocodileName= crocodiles[0].name;

          res= http.get(`https://test-api.k6.io/public/crocodiles/${crocodileId}/`)
         
          console.log(res.headers);
          console.log(res.headers.Allow);
          console.log(res.headers['Content-Type']);
          
          
          console.log(res.json().name)
          

          check(res,{
    'status is 200': (r)=>r.status===200,
//     'crocodile is Bert':(r)=>r.body.includes('Bert')
    'crocodile name': (r)=> r.json().name=== crocodileName
 })
 
        }