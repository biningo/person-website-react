import axiox, {AxiosRequestConfig} from 'axios'


export default function request(option: AxiosRequestConfig): Promise<any> {
    return new Promise(((resolve, reject) => {
        const instance = axiox.create({
            baseURL: 'http://localhost:8080',
            timeout: 60 * 60
        });

        instance(option).then(resp => {
            resolve(resp)
        }).catch(error => {
            reject(error)
        })
    }));
}