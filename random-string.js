import http from 'k6/http'
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
export const options={
    vus: 2,
    duration: '10s'
}

export default function(){

    const credentials = 
    JSON.stringify({
        username: 'test_'+randomString(4),
        password: 'test'
    })


  const res= http.post(
    'https://test-api.k6.io/user/register/', 
    credentials,  
    { 
  headers:{
    'content-Type': 'application/json'
  }
})
        
        console.log(res.json())

        check(res,{
            'status is 201': (r)=> r.status===201
        })
}