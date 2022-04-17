// PAGE
import Flair from '../components/Flairs'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {db} from '../firebase'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function AddQuestions(){
  const [newName, setNewName] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [newDescription, setNewDescription] = useState(0);

  const usersCollectionRef = collection(db, "users");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'users'), {
        name: newName,
        description: newDescription,
        question: newQuestion,
      })
    } catch (err) {
      alert(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="App">
      <div class="bg-white h-50 p-5 rounded-lg ">
        <input
          type="text"
          placeholder="type an interesting title"
          class="border-2 mt-5 w-full px-2 py-1"
          onChange={(e) => {
            setNewQuestion(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="type your question "
          class="border-2 w-full mt-5 px-2 py-1"
          onChange={(e) => {
            setNewDescription(e.target.value);
          }}
        ></input>

        <button className="p-1 text-[#fff] mt-2 bg-[#0051ED] rounded">
          Post
        </button>
      </div>
    </form>
  );
}
export default AddQuestions; 