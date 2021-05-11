// import React, { useState, useEffect } from 'react'
// import axios from 'axios';

// // function getAll() {
// //     const requestOptions = { method: 'GET', headers: authHeader() };
// //     return fetch(`http://localhost:62942/api/Token`, requestOptions).then(handleResponse);
// // }

// const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJJbnZlbnRvcnlBcGlTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiJkMzMwZDcyMC0zOTJmLTQyOGQtYTRkYi1hYTA2NjcwOTU2ZDMiLCJpYXQiOiI1LzkvMjAyMSAxMTo1MDo1MiBBTSIsIklkIjoiMSIsIlVzZXJOYW1lIjoiQWRtaW4iLCJQYXNzd29yZCI6IkFkbWluQDEyMyIsImV4cCI6MTYyMDU2MjI1MiwiaXNzIjoiSW52ZW50b3J5QXBpQXV0aGVudGljYXRpb25zZXJ2ZXIiLCJhdWQiOiJJbnZlbnRvcnlBcGlTZXJ2aWNlUG9zdG1hbkNsaWVudCJ9.k8bAECHzS3nrhVBsfsmr-l6qjD_YabrjVnsB5S4kFm0';


// function ApiCall() {

//     const [posts, setposts] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:62943/api/Employe', {
//             headers: {
//                 'Authorization': `Bearer ${access_token}`,
//                 "Access-Control-Allow-Origin": "*",
//                 "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//             }
//         }).then(res => {
//             console.log(res);
//             // setposts(res.data);
//         })
//             .catch(error => {
//                 console.log(error)
//             })
//     }, [])
//     return (
//         <div>
//             <ul>
//                 {
//                     posts.map(post => (<li key={post.Id}> {post.Name} </li>))
//                 }
//             </ul>
//         </div>
//     )
// }

// export default ApiCall
