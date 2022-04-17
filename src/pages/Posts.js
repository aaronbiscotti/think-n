import React, { useState, useEffect } from 'react'
import {db} from '../firebase'
import { collection, getDocs } from "firebase/firestore";
import AddQuestions from "./AddQuestions"
import Post from '../components/Post';

const Posts = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }

    getUsers();
  }, []);
  return (
    <div>
      {users.map((user) => {
        return (
          <Post name={user.name} time={user.time} field={user.field} title={user.title} likes={user.likes} dislikes={user.dislikes} />
        )
      })}
    </div>
  );
}

export default Posts