import axios from 'axios';

const url = 'api/info/';

class InfoService {
    static getInfo(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(info => ({
                        ...info,
                        createdAt: new Date(info.createdAt)
                    }))
                );
            }catch(err){
                reject(err);
            }
        })
    }

    static insertInfo(username, email, password){
        return axios.post(url, {
            username,
            email,
            password
        })

    }

    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}
export default InfoService;