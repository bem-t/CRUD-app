import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import {CircularProgress} from '@mui/material'
import styled from 'styled-components';
import Users from './components/users';

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  gap: 20px;
`;

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
    return (
      <SpinnerWrapper>
        <CircularProgress>Loading...</CircularProgress>
       </SpinnerWrapper>
    )
  }
  return (
    <div className="App">
      <Users users={users}/>
    </div>
  )
}