console.log("Call:");
let employee1 = {
  firstName: "shahbaz",
  lastName: "Ramzan",
};

let employee2 = {
  firstName: "Asim",
  lastName: "Mehmood",
};

let employee3 = {
  firstName: "nusratullah",
  lastName: "khan",
};

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + " " + greeting2
  );
}

invite.call(employee1, "hello", "how are you?");
invite.call(employee2, "hello", "How are you?");
invite.call(employee3, "hello", "how are you");

console.log("Apply:");
let emp1 = {
  firstName: "shahbaz",
  lastName: "ramzan",
};
let emp2 = {
  firstName: "Asim ",
  lastName: "Mehmood",
};

function invite2(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + " " + greeting2
  );
}

invite2.apply(emp1, ["hello", "How are you?"]);
invite2.apply(emp2, ["helo", "where are you?"]);

console.log("Bind:");
let em1 = {
  firstName: "shahbaz",
  lastName: "ramzan",
};
let em2 = {
  firstName: "Asim ",
  lastName: "Mehmood",
};

function invite3(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + " " + greeting2
  );
}

let emInvite1 = invite3.bind(em1);
let emInvite2 = invite3.bind(em2);
emInvite1("hello", "how are you");
emInvite2("hello", "how are you");
