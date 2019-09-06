# DigitalPresent Test API

REST API THAT DOES THE FOLLOWING (everything should be json): 
 
- user registration
- user login (JWT)
- - user should have username and password and role
- /posts/ lists posts with name and content
- /post/{id} access one single post
- /post/{id}/edit checks if the user is admin via JWT and if he's an admin he can edit the post using the following query
```
 {
     name: "Something"
     content: "Some content lorem ipsum"
 }
```