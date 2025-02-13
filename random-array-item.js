import http from 'k6/http'
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
export default function(){

 let res = http.get('https://test-api.k6.io/public/crocodiles/')
  const crocodiles= res.json()
   const crocodilesId= crocodiles.map(item=> item.id)
  const crocodileId= randomItem(crocodilesId)

console.log(crocodileId);
res = http.get(`https://test-api.k6.io/public/crocodiles/${crocodileId}`)


}
