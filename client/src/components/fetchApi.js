import { axiosWithAuth } from '../utils/axiosWithAuth'

export function fetchApi(){
    return axiosWithAuth().get('/api/colors')
    .then(res =>{
        console.log(res.data)
        return res.data
    })
    .catch(err => console.log(err))
}