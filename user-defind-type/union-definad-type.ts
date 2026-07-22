let userId: number | string | boolean;

userId = "faysal";
userId = 123;
userId = true;

function user(userId: number | string) {
  console.log(userId);
}
user(123);
user("123");
