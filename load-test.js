import http from 'k6/http';
import {sleep} from'k6'

export const options ={
    stages: [
        {
            duration: '10s',
            target: 10
        }, 
        {
            duration: '30s',
            target: 10
        },
        {
            duration: '10s',
            target: 5
        }
    ]
    

}
export default function(){
    http.get('https://test.k6.io');
    sleep(1)
    http.get('https://test.k6.io/contacts.php')
    http.get('https://test.k6.io/news.php')
}