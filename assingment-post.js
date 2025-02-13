import http from 'k6/http'
import {check} from 'k6'

export default function(){

    const body=JSON.stringify({ 
        username: 'test_1739381053987',
        password: 'test'
    })

    const params= {
        headers: {
            'Content-Type': 'application/json' 
        }
    }

   const res= http.post('https://test-api.k6.io/auth/token/login/',body,params)
     console.log(res.json().access);
     
}