import users from "./users.js";

// Завдання 1

const getUserNames = users.map(user => user["name"]);

console.log("Users names:>>>", getUserNames);

// Завдання 2

function getUsersWithEyeColor(users, color) {
    return users.filter(user => user["eyeColor"] === color)
}

console.log("Users by eye color :>>>", getUsersWithEyeColor(users, 'green'))

// Завдання 3

const getUsersWithGender = (users, gender) => {
    return users.filter(user => user["gender"] === gender)
};

console.log("Users by gender:>>>", getUsersWithGender(users, 'female'));

// Завдання 4

const getInactiveUsers = (users) => {
    return users.filter(user => !user["isActive"])
}

console.log("Inactive users :>>>", getInactiveUsers(users));

// Завдання 5

const getUserWithEmail = (users, email) => {
    return users.find(user => user["email"] === email)
};

console.log("User by email :>>>", getUserWithEmail(users, 'elmahead@omatom.com'));

// Завдання 6

const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user["age"] >= min && user["age"] <= max)
};

console.log("Users by age :>>>", getUsersWithAge(users, 35, 1000000));