import React from 'react';
import { useState } from 'react';

// We're calling a function that returns our useState values
const UserHooks = () => {

    //declaring user as a state Variable and stUser as the setter function with the inital value of Object
  const[user, setUser] = useState({})

  //
  return {user, setUser}
}

export default UserHooks;
