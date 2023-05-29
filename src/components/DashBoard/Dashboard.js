// import React, { Component } from 'react';
 
// class Dashboard extends Component {
//   render() {
//     return <div>
//       <h4>Dashboard</h4>
//       <p>This is Dashboard page.</p>
//     </div>
//   }
// }
 
// export default Dashboard;


import React from 'react';
import { getUser, removeUserSession } from '../../Utils/Common';
 
function Dashboard(props) {
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
 
  return (
    <div>
      Welcome {user.name}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;