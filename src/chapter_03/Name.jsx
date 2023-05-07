function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'HaNeul',
    lastName: 'Kim'
};

const element = (
  <h1>
        Hello, {formatUser(user)}
  </h1>  
);

ReactDOM.render(
    element,
    document.getElementById('root')
);