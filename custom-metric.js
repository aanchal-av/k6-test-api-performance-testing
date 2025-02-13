import http from 'k6/http';
import {sleep} from'k6'
import exec from 'k6/execution';
import {check} from 'k6';
import {Counter,Trend} from 'k6/metrics'

export const options ={
    vus:10,
    duration: '10s',
    thresholds:{
        http_reqs:['count>1'],
        http_reqs:['rate>1'],
        vus: ['value>9'],
        http_req_duration: ['p(95)>100'],
        checks: ['rate>=0.98'],
        my_counter: ['count>0'],
        response_time_news_page
:['p(95)>100']    }
}
let myCounter= new Counter('my_counter')
let newsPageResponseTrend = new Trend('response_time_news_page')
export default function(){
 
  let res = http.get('https://test.k6.io');
  myCounter.add((1))
  
    res= http.get('https://test.k6.io/news.php');
    newsPageResponseTrend.add(res.timings.duration)
 
}