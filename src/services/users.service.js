class UsersService {
  #users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      password: 'mysecretpassword1',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
        country: 'USA' 
      },
      createdAt: '2023-05-06T08:12:34.567Z',
      tags: [
        'Sales',
        'Marketing'
      ]
    },
    {
      id: 2,
      firstName: 'Vitalii',
      lastName: 'Pidhornyi',
      email: 'vitaliipidhornyi@example.com',
      password: 'password123',
      age: 21,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
        country: 'USA'
      },
      createdAt: '2023-05-06T08:12:34.567Z',
      tags: [
        'Programming',
      ]
    }
  ];

  getUsers() {
    return this.#users;
  }

  getUserByEmail(email) {
    return this.#users.find((user) => user.email === email);
  }

  getUserById(id) {
    return this.#users.find((user) => user.id === +id);
  }

  addUser(dto) {
    const date = new Date();
    const newLength = this.#users.push(
      {
        id: date.getTime(),
        ...dto,
        createdAt: date
      }
    )
    return this.#users[newLength - 1];
  }

  updateUser(id, dto) {
    const userIndex = this.#users.findIndex((user) => user.id === +id);
    this.#users[userIndex] = {
      ...this.#users[userIndex],
      ...dto
    }
    return this.#users[userIndex];
  }

  deleteUserByEmail(email) {
    this.#users = this.#users.filter((user) => user.email !== email);
  }
}

export const usersService = new UsersService();
