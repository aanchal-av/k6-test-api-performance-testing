import http from 'k6/http';
import exec from 'k6/execution';
import {check,group,sleep} from 'k6'

export const options ={
    // vus:10,
    // duration: '10s',
    thresholds:{
       
        http_req_duration: ['p(95)<1000'],
        'group_duration{group:::Main Page}':['p(95)<2000'],
        'group_duration{group:::Main Page::Assets}':['p(95)<500']
        
    }
}
export default function(){

group('Main Page', function() {

  let res = http.get('https://test.k6.io' + (exec.scenario.iterationInTest===1? 'foo':''));
    check(res,{'status is 200': (r)=> r.status===200})
 
    group('Assets', function(){

    http.get('https://test.k6.io/static/css/site.css?mocky-delay=100ms')
     http.get('https://test.k6.io/static/js/prisms.js?mocky-delay=100ms')
   });
});
group('News Page', function (){

     http.get('https://test.k6.io/news.php?mocky-delay=100ms')
  });
}