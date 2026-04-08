import {APIRequestContext} from '@playwright/test'

export default class ApiHelper{
    readonly request:APIRequestContext
    constructor(request:APIRequestContext){
        this.request=request
    }

    async fetchallposts(){
      const response=await this.request.get('/posts');
      const body=response.json();
      return body;
    }

    async fetchonepost(id:number){
        const response=await this.request.get(`/posts/${id}`);
        const body=response.json();
        return body;
    }
    async createpost(title:string,body:string,userId:number){
        const response=await this.request.post('/posts',{
            data:{
                title:title,
                body:body,
                userId:userId,
            },headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const body1=await response.json();
        return body1;
    }

    async updatepost(id:number,title:string,body:string,userId:number){
        const response=await this.request.put(`/posts/${id}`,{
            data:{
                id:id,
                title:title,
                body:body,
                userId:userId
            },
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const body1=await response.json();
        return body1;

    }

    async partialupdate(id: number, data: { title?: string; body?: string }) {
        const response = await this.request.patch(`/posts/${id}`, {
            data: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const body1 = await response.json();
        return body1;
    }


}