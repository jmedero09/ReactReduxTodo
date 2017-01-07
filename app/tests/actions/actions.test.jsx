import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
var actions = require('actions');//have to refrence by calling action.nameofactiongenerator
 //we are going to have one mock store for every test that we need to use it in
var createMockStore = configureMockStore([thunk]);

import firebase, {firebaseRef} from 'app/firebase/';




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
      todo:{
        id:'123abc',
        text:'I need a break',
        completed:false,
        createdAt:0
      }
    }
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);

  });
  it('should create todo and dispatch ADD_TODO',(done)=>{
    var store = createMockStore({});
    var todoText = 'my todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(()=>{
      var actions = store.getActions();
      expect(actions[0]).toInclude({
        type:'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text:todoText
      });
      //if you leave done off after the sucess  the test will not know when to stop
      done();
    }).catch(done);
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

  it('shuold generate update Todo action',()=>{
    var action = {
      type:'UPDATE_TODO',
      id:'9',
      updates:{completed:false}
    }
    var res = actions.updateTodo(action.id,action.updates);
    expect(res).toEqual(action);
  });

  describe('Test with firebase todos',()=>{
    var testTodoRef;

    beforeEach((done)=>{
      testTodoRef = firebaseRef.child('todos').push();

      testTodoRef.set({

        text:'something todo',

        completed:false,

        createdAt:23453453

      }).then(()=>{

        done();

      })

    });
    afterEach((done)=>{

      testTodoRef.remove().then(()=>{
        done();
      });

    });

    it('should toggle todo and dispatch UPDATE_TODO actions',(done)=>{

      var store = createMockStore({});

      var action = actions.startToggleTodo(testTodoRef.key, true);


      store.dispatch(action).then(()=>{

        var mockActions = store.getActions();

        expect(mockActions[0]).toInclude({

          type:'UPDATE_TODO',

          id:testTodoRef.key,

        });

        expect(mockActions[0].updates).toInclude({

          completed:true

        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();

      },done);

    });
  });
});


















