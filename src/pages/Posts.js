import AddQuestions from "./AddQuestions"
import Post from '../components/Post';
import {useState, useEffect} from 'react'
import {db} from '../firebase'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Posts = () => {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <div>
      {users.map((user) => {
        return (
          <Post question={user.question} description={user.description} />
        )
      })}
    </div>
  );
}

export default Posts