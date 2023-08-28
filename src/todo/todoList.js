import React from "react";

class TodoList extends React.Component{
 
    render(){ 
        
// Display todo items in lists within <ul> tag by applying javascript map() method on this.props.items
        return(
            <ul className="list-group list-group-flush">
            {
                this.props.items.map((value, index)=>{
               return (
               <React.Fragment key={index}>
               <li className="list-group-item bg-light d-flex justify-content-between">{value}
               
               {/* create a delete button with an attribute onClick={()=>{this.props.deleteTodo(index)}} */}

               <button className="btn text-danger badge" onClick={()=>{this.props.deleteTodo(index)}}>X</button>
               </li>     
               </React.Fragment>
               )
                })
               }
            </ul> 
            );
    }
}
export default TodoList;