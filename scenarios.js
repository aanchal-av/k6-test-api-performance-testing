import http from 'k6/http'
import {check} from 'k6'

export default function(){
    const res= http.get('https://test.k6.io')
console.log(res.status);
console.log(res.body);
check(true, {
    'true is true': (value) => value === true
});
// check(false, {
//     'true is true': (value) => value === true
// });
check(res,{
    'status is 200': (r)=> r.status===200,
    'page is startpage': (r)=> r.body.includes('Collection of simple web-pages suitable for load testing.')

})

}