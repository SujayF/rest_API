export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the database!`);
  }

  export const getUser = (req, res) => {
    console.log(req.params);
  
    const { id } = req.params;
  
    const foundUser = users.find((user) => user.id === id);
  
    res.send(foundUser);
  }
  
  export const  deleteUser = (req, res) => {
    const { id } = req.params;
  
    users = users.filter((user) => user.id !== id);
  
    res.send(`User with the id${id} is deleted`);
  }

  export const updateUser = (req, res) => {
    const { id } = req.params;
  
    const { firstName, lastName, age } = req.body;
  
    const user = users.find((user) => user.id === id);
  
    if (firstName) {
      user.firstName = firstName;
    }
  
    if (lastName) {
      user.lastName = lastName;
    }
  
    if (age) {
      user.age = age;
    }
    res.send(`User with ${id} is updated`);

  }