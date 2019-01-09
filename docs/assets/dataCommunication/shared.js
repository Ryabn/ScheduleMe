/**
 * @author Ryan Yang
 */

const ID_SIZE = 10;
const httpRelayLink  = 'https://httprelay.io/link/';
const httpRelayMCast = 'https://httprelay.io/mcast/';

let data = {
    'plan': []
}
/**
 * For testing purposes - to be used with host.html/client.html
 * @param {*} data 
 */
function display(data){
    console.log(data);
    document.getElementById('output').innerHTML = `${JSON.stringify(data)}`;
}
function postReq( link, message, callback ) {
    console.log(link, message);
    fetch(link, {
        method: 'POST',
        body: JSON.stringify(message)
    }).then(resp => {
        callback(resp.json())
    }).catch(resp =>{
        console.log(resp);
    });
}
function getReq( link, callback ) {
    console.log(link);
    fetch(link).then(resp => {
        callback(resp.json());
    })
}