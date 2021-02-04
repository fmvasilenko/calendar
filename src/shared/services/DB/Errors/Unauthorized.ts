class Unauthorized extends Error {
  constructor(message = 'User is not authorized.') {
    super(message);

    this.name = 'Unauthorized';
  }
}

export default Unauthorized;
