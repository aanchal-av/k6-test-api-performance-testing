import http from 'k6/http'
import {check} from 'k6'

export default function(){
    console.log(__ENV.BASE_URL)

  http.get(`${__ENV.BASE_URL}/my/crocodiles/`) 

     

  
}
