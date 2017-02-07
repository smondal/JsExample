import expect from 'expect'
import deepFreeze from 'deep-freeze'
import {createStore} from 'redux'

const todos = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				Object.assign({}, state, {
					id: action.id,
					text: action.text,
					completed: false
				})
			];
		case 'TOGGLE_TODO':
			return state.map(todo => {
				if (todo.id !== action.id){
					return todo
				}
				return Object.assign({}, todo, {completed: !todo.completed})
			})
		default: 
			return state
	}
}

const testAddTodo = () => {
	const stateBefore = [];
	const action = {
		type: "ADD_TODO",
		id: 0,
		text: "Learn Flux"
	};
	const stateAfter =[{
		id: 0,
		text: 'Learn Flux',
		completed: false
	}];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(todos(stateBefore, action)).toEqual(stateAfter);
}

const testToggleTodo = () =>{
	const stateBefore = [
		{
			id: 0,
			text: 'Learn Flux',
			completed: false
		},
		{
			id: 1,
			text: 'Go Shopping',
			completed: false
		}
	];

	const action = {
		type : 'TOGGLE_TODO',
		id: 1
	}

	const stateAfter = [
		{
			id: 0,
			text: 'Learn Flux',
			completed: false
		},
		{
			id: 1,
			text: 'Go Shopping',
			completed: true
		}
	]

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(todos(stateBefore, action)).toEqual(stateAfter);

}

testAddTodo();
testToggleTodo();

console.log('All test Passed');

var store = createStore(todos)

console.log("initial state")
console.log(store.getState())
console.log("---------------------")


console.log("Dispatching Add todo state")
store.dispatch({
  	type: "ADD_TODO",
		id: 0,
		text: "Learn Flux"})
console.log("Current  state")
console.log(store.getState())
console.log("---------------------")

console.log("Dispatching Add todo state")
store.dispatch({
  	type: "ADD_TODO",
		id: 0,
		text: "Learn Flux"})
console.log("Current  state")
console.log(store.getState())
console.log("---------------------")