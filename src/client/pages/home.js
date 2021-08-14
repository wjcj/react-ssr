import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import TodoList from '../componments/todoList';
import { TODOS_TYPE_ADD, TODOS_TYPE_REMOVE, TODOS_TYPE_TOGGLE } from '../store/types';
import { getTodos } from '../store/actions';

const Home = ({ todos, getInitialProps, ...props }) => {
  useEffect(() => {
    if (todos.length) return;
    getInitialProps();
  }, []);

  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="react ssr demo: todolist" />
      </Helmet>
      <h1>Home</h1>
      <TodoList data={todos} {...props} />
    </div>
  );
}

Home.loadData = async store => store.dispatch(getTodos());

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = dispatch => {
  return {
    getInitialProps: () => dispatch(getTodos()),
    addTodo: todo => dispatch({ type: TODOS_TYPE_ADD, playlod: todo }),
    toggleTodo: id => dispatch({ type: TODOS_TYPE_TOGGLE, playlod: id }),
    removeTodo: id => dispatch({ type: TODOS_TYPE_REMOVE, playlod: id }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
