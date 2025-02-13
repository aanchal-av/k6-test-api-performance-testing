import http from 'k6/http'
import {check} from 'k6'
import {SharedArray} from 'k6/data'
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

const userercredentials = new SharedArray('users with credentials', function(){
    return JSON.parse(open('./users.json')).users
})

export default function(){

    /** the below code is register to website using the credentials in user.json file */
//     userercredentials.forEach((item)=>{
//  const credentials = 
//    {
//         username: item.username,
//         password: item.password
//     }


//   let res= http.post(
//     'https://test-api.k6.io/user/register/', 
//     JSON.stringify(credentials),  
//     { 
//   headers:{
//     'content-Type': 'application/json'
//   }
// })
   
//     check(res,{
//         'status is 201': (r)=> r.status===201
//     })
// })

const randomCredential= randomItem(userercredentials)

let res= http.post('https://test-api.k6.io/auth/token/login/', 
    JSON.stringify(
        {
        username: randomCredential.username,
        password: randomCredential.password
    }
),
    {
        headers:{
            'content-Type': 'application/json'
          }
    }

)

check(res,{
    'status is 200': (r)=> r.status===200,
    'has access token': (r)=> r.json() !==undefined
})
}