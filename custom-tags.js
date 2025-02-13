import http from 'k6/http';
import { check } from 'k6';

export const options ={
    vus:1,
    duration: '10s',
    thresholds:{
        http_req_duration: ['p(95)<1000'],
        'http_req_duration{page:order}':['p(95)<1000'],
        'http_req_duration{status:200}':['p(95)<1000'],
        'http_req_duration{status:201}':['p(95)<1000'],
        checks:['rate>=0.99'],
        'checks{page:order}':['rate>=0.99']

    }
}
export default function(){
 http.get('https://run.mocky.io/v3/c208b0a6-dc10-436f-8926-c58e7ec1688a')
const res= http.get(
    'https://run.mocky.io/v3/4eeadf75-c151-483d-b07c-713d438e99f6?mocky-delay=200ms',
    {
          tags:{
            page: 'order'
          }
    }
)
check(res,{
    'status is 201':(r)=>r.status===201},{page:'order'});
}
