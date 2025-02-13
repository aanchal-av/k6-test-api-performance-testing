import http from 'k6/http'
import {check} from 'k6'

export default function(){

    const body = JSON.stringify({
        username: 'test_'+Date.now(),
        password: 'test'
    })

    const params ={
        headers:{
            'content-Type': 'application/json'
        }
    }

  const res= http.post('https://test-api.k6.io/user/register/', body, params)
        
        console.log(res.json())
}