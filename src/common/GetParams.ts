import * as H from 'history';
function GetParams(location:H.Location):Map<string,string> {
    let params = new Map();
    let path = decodeURI(location.pathname+location.search);
    let paths = path.split('?');
    if(paths.length<2){
        return params;
    }
    paths[1].split('&').map(key => {
        return key.split('=')
    }).forEach(([k, v]) => params.set(k, v));
    return params;
}

export default GetParams;