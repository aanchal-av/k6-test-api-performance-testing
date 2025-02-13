import http from 'k6/http';
import {sleep} from'k6'
import exec from 'k6/execution';
import {check} from 'k6'

export const options ={
    vus:10,
    duration: '10s',
    thresholds:{
        http_reqs:['count>1'],
        http_reqs:['rate>1'],
        vus: ['value>9'],
        http_req_duration: ['p(95)>100'],
        checks: ['rate>=0.98']
    }
}
export default function(){
  const res = http.get('https://test.k6.io' + (exec.scenario.iterationInTest===1? 'foo':''));
    check(res,{
      'status is 200': (r)=> r.status===200
      
    })
 
}