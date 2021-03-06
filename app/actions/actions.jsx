import firebase,{firebaseRef, githubProvider} from 'app/firebase/index';
import moment from 'moment';
export var setSearchText = (searchText)=>{
	return{
		type:'SET_SEARCH_TEXT',
		searchText:searchText
	};
};

export var addTodo = (todo)=>{
	return{
		type:'ADD_TODO',
		todo:todo
	}
}
export var startAddTodo=(text)=>{
	return(dispatch,getState)=>{
		var todo = {

			text:text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null				
		}
		//Todos refrences the todos passed in add todos
		var todoRef = firebaseRef.child('todos').push(todo);

		return todoRef.then(()=>{
			dispatch(addTodo({
				...todo,
				id:todoRef.key
			}));
		});
	}
}
export var addTodos = (todos)=>{
	return {
		type:'ADD_TODOS',
		todos:todos
	}
}
export var startAddTodos = ()=>{
	return (dispatch,getState)=>{
		var todosRef = firebaseRef.child('todos');

		return todosRef.once('value').then((snapshot)=>{
			var todos = snapshot.val() || {};
			var parsedTodos = [];

			Object.keys(todos).forEach((todoId)=>{
				parsedTodos.push({
					id:todoId,
					...todos[todoId]
				});
			});
			dispatch(addTodos(parsedTodos)); 
		});
	}	
}

export var toggleShowCompleted = ()=>{
	return{
		type:'TOGGLE_SHOW_COMPLETED'
	}
}



export var updateTodo = (id,updates)=>{
	return {
		type:'UPDATE_TODO',
		id:id,
		updates:updates
	}
}

export var startToggleTodo = (id,completed)=>{
	return (dispatch,getState)=>{
		var todoRef = firebaseRef.child('todos/'+id);
		var updates = {
			completed:completed,
			completedAt:completed ? moment().unix(): null
		}
		return todoRef.update(updates).then(()=>{
			dispatch(updateTodo(id,updates));
		})
	}
}

export var startLogin = ()=>{
	return(dispatch,getState)=>{
		return firebase.auth().signInWithPopup(githubProvider).then((result)=>{
			console.log('auth worked', result);
		},(error)=>{
			console.log('unable to Auth', error);
		});
	}
}

export var startLogout = ()=>{
	return(dispatch,getState)=>{
		return firebase.auth().signOut().then(()=>{
			console.log('logged out');
		});
	}
}














