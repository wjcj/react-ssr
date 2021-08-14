import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { getUser } from '../store/actions';

const User = ({ user, getInitialProps, ...props }) => {
  useEffect(() => {
    if (user) return;
    getInitialProps();
  }, []);

  return (
    <div className="user">
      <Helmet>
        <title>User</title>
        <meta name="description" content="react ssr demo: user" />
      </Helmet>
      <h1>Hi, { user && user.name } </h1>
    </div>
  );
}

User.loadData = async store => store.dispatch(getUser());

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = dispatch => {
  return {
    getInitialProps: () => dispatch(getUser()),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
