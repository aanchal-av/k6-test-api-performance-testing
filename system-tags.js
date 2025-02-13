import http from 'k6/http';
import {sleep} from'k6'

export const options ={
    // vus:10,
    // duration: '10s',
    thresholds:{
        http_req_duration: ['p(95)<1000'],
        'http_req_duration{status:200}':['p(95)<1000'],
        'http_req_duration{status:201}':['p(95)<1000']
    }
}
export default function(){
 http.get('https://run.mocky.io/v3/c208b0a6-dc10-436f-8926-c58e7ec1688a')
 http.get('https://run.mocky.io/v3/4eeadf75-c151-483d-b07c-713d438e99f6?mocky-delay=100ms')
}