import { useEffect, useState } from "react";
import "./App.css";
import UsersTable from "./components/UsersTable";

function App() {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/get-all-users")
      .then((response) => response.json())
      
      .then((userInformation) => {
        setUserInfo(userInformation);
      });
  }, []);

  return (
    <div className="App">
      <button className="button-3">Add new User</button>
      {userInfo && <UsersTable userInformation={userInfo}></UsersTable>}
      
    </div>
  );
}

export default App;
