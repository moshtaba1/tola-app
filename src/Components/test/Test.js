// import React, { Component } from 'react';
// import { Table } from 'react-bootstrap'

// export default class test extends Component {

//     constructor(){
//         super()

//         this.state ={
//             users:[]
//         }
//     }


//     componentDidMount () {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     users: data
//                 })
//             })
//     }


//     render() {
//         return (
//           <>
//             <Table striped bordered hover variant="dark">
//               <thead>
//                 <tr>
//                   <th>Id</th>
//                   <th>Name</th>
//                   <th>Username</th>
//                   <th>Email</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.users.map(user => (
//                   <tr key={user.id}>
//                     <td>{user.id}</td>
//                     <td>{user.name}</td>
//                     <td>{user.username}</td>
//                     <td>{user.email}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </>
//         );
//       }
      
// }
