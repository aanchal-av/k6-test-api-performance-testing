import http from 'k6/http'
import {check} from 'k6'

export default function(){

    let body=JSON.stringify({ 
        username: 'test_1739381053987',
        password: 'test'
    })

    const params= {
        headers: {
            'Content-Type': 'application/json' 
        }
    }
    let res= http.post('https://test-api.k6.io/auth/token/login/',body,params)
    const accessToken=  res.json().access;
    console.log(accessToken)


      http.get(
            'https://test-api.k6.io/my/crocodiles/',
            {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            }
        );

  res= http.post('https://test-api.k6.io/my/crocodiles/',
    JSON.stringify({
        name: 'test',
        sex: 'F',
        date_of_birth: '2000-10-10'
    }
),
    {
      headers:{
          Authorization: 'Bearer ' + accessToken,
          'Content-Type': 'application/json' 
      }
     }
  )

     const newCrocodileId= res.json().id 

      http.get(`https://test-api.k6.io/my/crocodiles/${newCrocodileId}/`,
      {
        headers:{
            Authorization: 'Bearer ' + accessToken,

         }
      })

    res =  http.put(`https://test-api.k6.io/my/crocodiles/${newCrocodileId}/`,
    JSON.stringify({
        name: 'test1',
        sex: 'F',
        date_of_birth: '2000-10-10'
    }
),
    {
      headers:{
          Authorization: 'Bearer ' + accessToken,
          'Content-Type': 'application/json' 
      }
     }
  )
  
  res =  http.patch(`https://test-api.k6.io/my/crocodiles/${newCrocodileId}/`,
    JSON.stringify({
        name: 'test2',
    }
),
    {
      headers:{
          Authorization: 'Bearer ' + accessToken,
          'Content-Type': 'application/json' 
      }
     }
  )

  res =  http.del(`https://test-api.k6.io/my/crocodiles/${newCrocodileId}/`,
    null,
    {
      headers:{
          Authorization: 'Bearer ' + accessToken,
          'Content-Type': 'application/json' 
      }
     }
  )
}
