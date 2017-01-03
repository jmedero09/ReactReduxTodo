var expect = require('expect');
var actions = require('actions');//have to refrence by calling action.nameofactiongenerator

describe('Actions',()=>{
  it('should generate search text action',()=>{
    var action = {
      type:'SET_SEARCH_TEXT',
      searchText:'some search text'
    };
    //The argument getting passed to the searchTextAction 
    //generator is some search text which is define above 
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);

  });
  it('should generate add todo action',()=>{
    var action = {
      type:'ADD_TODO',
      text:'thing to do'
    }
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);

  });

  it('it should generate add todos action object',()=>{
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
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('shuold generate toggleshowcompleted action',()=>{
    var action = {
      type:'TOGGLE_SHOW_COMPLETED'
    }

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('shuold generate toggleTodo action',()=>{
    var action = {
      type:'TOGGLE_TODO',
      id:'9'
    }
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});


















