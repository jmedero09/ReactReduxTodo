var expect = require('expect');
var reducers = require('reducers');

//we are using df to make sure that out functions are pure functions
//and that they are not updating or mutating our state
var df = require('deep-freeze-strict');
describe('Reducers',()=>{
	describe('searchTextReducer',()=>{
		it('should set searchText',()=>{
			var action ={
				type:'SET_SEARCH_TEXT',
				searchText:'Dog'
			}
			// action that we created above is what we pass into the reducer
			var res = reducers.searchTextReducer(df(''),df(action));
			expect(res).toEqual(action.searchText);
		});
	});
	describe('showCompletedReducer',()=>{
		it('should set toggle',()=>{
			var action ={
				type:'TOGGLE_SHOW_COMPLETED',
			}
			// action that we created above is what we pass into the reducer
			var res = reducers.showCompletedReducer(df(false),df(action));
			expect(res).toEqual(true);
		});
	});
	describe('todosReducer',()=>{

		it('should add new todo',()=>{
			var action = {
				type:'ADD_TODO',
				text:'catch these hands'
			}
			var res = reducers.todosReducer(df([]),df(action));

			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
		});
	});

	it('should toggle todos',()=>{
		var todos = [{
			id:'123',
			text:'someting',
			completed:true,
			createdAt:123,
			completedAt:125
		}];
		var action = {
			type:'TOGGLE_TODO',
			id:'123',
		};
		var res = reducers.todosReducer(df(todos),df(action));

		expect(res[0].completed).toEqual(false);
		expect(res[0].completedAt).toEqual(undefined);
	});

	it('should add existing todos',()=>{
	    var todos = [{
	      id:'111',
	      text:'anything',
	      completed:false,
	      completedAt:undefined,
	      createdAt:33000
	    }];
	    var action = {
	      type:'ADD_TODOS',
	      todos:todos
	    };
	    var res = reducers.todosReducer(df([]),df(action));

	    	expect(res.length).toEqual(1);
	    	expect(res[0]).toEqual(todos[0]);

	});
});