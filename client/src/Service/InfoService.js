import axios from 'axios';

const url = 'api/info/';

class InfoService {
    static getInfo(){
        console.log(url)
                axios.get(url)
                .then(res => (this.info = res.data))
                return this.info
        
    }

    static insertInfo(username, email, password){
       

         axios.post(url,
            {
                "userName": username,
                "email": email,
                "password": password
                
            }
            
        )

    }

    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}
export default InfoService;