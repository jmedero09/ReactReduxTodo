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






});