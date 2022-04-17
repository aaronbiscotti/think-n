// import React from 'react'
// import ReactDOM from 'react-dom'

// import "./styles.scss";
// const TagsInput = props => {
// const [tags, setTags] = React.useState(["NodeJs", "MongoDb"]);
//     const removeTags = indexToRemove => {
//    setTags(tags.filter((_, index) => index != indexToRemove));
// };
//     const addTags = event => {
//     if(event.target.value != "") {
//  setTags([... tags, event.target.value]);
//  props.selected([... tags, event.target.value]);
//  events.target.value = "";
//      }
    
//  };    
// return (
//      <ul>
//   {tags.map((tag, index) => 
//     (<li key={index}>   
//      <span>{tag}</span>
//      <i
//      oneClick() = {() => removeTags(index)}
//      >
//         close
//          </i>
//       </li>
//       ))}
//     </ul> 
//     <input 
//     type="text" 
//     placeholder="press enter to add tags" 
//     onKeyUp={ e => e.key == "Enter" ? addTags(e) : null}
//     />
// );
// };
// function flair(){
//     const selected = tags => console.log(tags);
// <TagsInput selected = {selected}/>
//   );
// }