class UserDto {
  constructor(username, hashedPassword) {
    this.username = username;
    this.password = hashedPassword;
    this.isAdmin = false; // Set isAdmin to false by default
  }
};

module.exports = UserDto;
