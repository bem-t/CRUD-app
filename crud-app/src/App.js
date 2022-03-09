import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(
          'https://user-list-seytech.herokuapp.com/users'
        );
        console.log(data)
        setUser(data)
      } catch (error) {
        console.log(error)
      }
    };

    fetchData()
  },[]);

  if(users.length === 0){
    return <p>Loading...</p>
  }
  return (
    <div className="App">
      {
        users.map(({gender, _id}) => {
          return(
          <p key={_id}>{gender}</p>
          )
        })
      }
    </div>
  )
}