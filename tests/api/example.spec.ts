import {test,expect} from '../../fixtures/fixture'
import ApiHelper from '../../utils/ApiHelper'
import { data } from '../../test-data/post'
let id=data.id;

// test("get_request",async({request})=>{
//   const response=await request.get('/posts')
//   const body=await response.json();
//   //console.log(body);
//   await expect (response.status()).toBe(200);
//   await expect (body.length).toBeGreaterThan(0);
//   //await expect(body[0]).toHaveProperty('userId');
//   await expect(typeof body[0].userId).toBe('number');

//   for(const val of body){
//     await expect(val).toHaveProperty('userId');
//     await expect(val).toHaveProperty('id');
//     await expect (val).toHaveProperty('title');
//     await expect(val).toHaveProperty('body');
//   }

//   for(const val of body){
//     await expect(val).toMatchObject({
//     userId: 10,
//     id: 99,
//     title: 'temporibus sit alias delectus eligendi possimus magni',
//     body: 'quo deleniti praesentium dicta non quod\n' +
//       'aut est molestias\n' +
//       'molestias et officia quis nihil\n' +
//       'itaque dolorem quia'
//     })
//   }
  

  
// })

// test("post_request",async({request})=>{
//   const response=await request.post('/posts',{
//     data:{
//       title:"book1",
//       body:"this is aaryan book",
//       userId:69
//     }
//   })
//   const body=await response.json();
//   //id=body.id;
//   //console.log(body);
// })
// test("single_post",async({request})=>{
//   const response=await request.get(`/posts/${id}`)
//   const body=await response.json();
//   console.log(body);
// })
// test("put_request",async({request})=>{
//   const response=await request.put(`/posts/${id}`,{
//     data:{
//       id:100,
//       title:"this is new title",
//       body:"this is new body",
//       userId:99
//     },
//     headers:{
//       'Content-type':'application/json; charset=UTF-8'
//     }
//   })
//   const body=await response.json();
//   console.log(body);
// })
// test("patch_request",async({request})=>{
//   const response=await request.patch(`/posts/${id}`,{
//     data:{
//       title:"this is title 1"
//     },
//     headers:{
//       'Content-type':'application/json; charset=UTF-8'
//     }
//   })
//   const body=await response.json();
//   console.log(body);
// })
// test("delete_request",async({request})=>{
//   const response=await request.delete('/posts/1')
//   const body=await  response.json();
//   console.log(body);
// })

test("get_all_posts",async({request,fix1})=>{
  //const api=new ApiHelper(request);
  const body=await fix1.fetchallposts();
  //const body= await api.fetchonepost(1);
  console.log(await body);
  await expect(body.length).toBeGreaterThan(0);
  for(const val of body){
    await expect(val).toHaveProperty('userId');
    await expect(val).toHaveProperty('id');
    await expect(val).toHaveProperty('title'),
    await expect(val).toHaveProperty('body');
    await expect(typeof val.userId).toBe('number');
    await expect (typeof val.id).toBe('number');
    await expect(typeof val.title).toBe('string');
    await expect(typeof val.body).toBe('string')
  }
  await expect(body[0]).toMatchObject({
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  })
})
test("get_one_post",async({request,fix1})=>{
  //const api=new ApiHelper(request);
  const body=await fix1.fetchonepost(id);
  console.log(body);

})
test("create_post",async({request,fix1})=>{
  //const api=new ApiHelper(request);
  const body=await fix1.createpost('this is my book','this is body section',89);
  console.log(body);
})
test("update_post",async({request,fix1})=>{
  //const api=new ApiHelper(request);
  const body=await fix1.updatepost(id,'updated title','updated body',99);
  console.log(body);
})
test("patch_post",async({request})=>{
  const api=new ApiHelper(request);
  
  const body=await api.partialupdate(5, { title: "Only Title Updated" });
  console.log(body);

})


