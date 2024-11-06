# this command will look into schema.prism file and push any changes to the database

npx prisma db push

# run this command to see the prisma models in the UI

http://localhost:5555/


# to test mutation in graphaql locally:
mutation{
userCreate(firstName: "leah",lastName:"mark", age:36, gender: "female", email:"leah.com", password: "12345", race:"other"){
  UserErrors {
    message
  }
  user {
    firstName
  }
}
}
