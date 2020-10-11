import axios from 'axios';
//import { response } from 'express';

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
    static insertInfoAgain(id,title,author,isbnnum,price,descript,photo ){
        return axios.put(`${url}${id}`,
           {   
            "title": title,   
            "author": author,
            "isbnnum": isbnnum,
            "price":price,
            "descript": descript,
            "photo": photo
               
           }      
       )

   }

    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}
export default InfoService;