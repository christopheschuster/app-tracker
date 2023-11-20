/* sophisticated_code.js */

// This code is a complex implementation of a messaging system with user authentication and authorization.

// Data structure to store user information
class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

// Data structure to store message information
class Message {
  constructor(id, senderId, receiverId, content) {
    this.id = id;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.content = content;
  }
}

// Sample users
const users = [
  new User(1, "admin", "password"),
  new User(2, "user1", "pass123"),
  new User(3, "user2", "testpass"),
];

// Sample messages
const messages = [
  new Message(1, 1, 2, "Hello user1"),
  new Message(2, 2, 1, "Hi admin"),
  new Message(3, 1, 3, "This is a test message"),
  new Message(4, 3, 1, "Got it!"),
];

// Authenticates a user given their username and password
function authenticateUser(username, password) {
  const user = users.find((user) => user.username === username && user.password === password);
  return user ? user.id : null;
}

// Retrieves all messages sent or received by a user
function getMessagesByUserId(userId) {
  const userMessages = messages.filter((message) => message.senderId === userId || message.receiverId === userId);
  return userMessages;
}

// Sends a message from a user to another user
function sendMessage(senderId, receiverId, content) {
  const newMessageId = messages.length + 1;
  const newMessage = new Message(newMessageId, senderId, receiverId, content);
  messages.push(newMessage);
}

// Example usage

const loggedInUserId = authenticateUser("admin", "password");
if (loggedInUserId) {
  console.log("User authenticated. ID:", loggedInUserId);
  console.log("Messages:", getMessagesByUserId(loggedInUserId));

  sendMessage(loggedInUserId, 2, "New message from admin!");
} else {
  console.log("Invalid credentials. Authentication failed.");
} 

// This code provides a foundation for building a more sophisticated messaging system with additional features like server integration, message threading, and more.