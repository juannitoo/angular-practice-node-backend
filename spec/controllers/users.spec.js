const userCtrl = require("../../controllers/users")
const User = require('../../models/user')
const http = require('http');

const users = [{
  // _id: "oeihfzeoi",
  name: "xaxa",
  username: "xaxa",
  email: "jeanbalangue@hotmail.fr",
  phone: "1111111111",
  address: "1111111111",
  company: "1111111111",
  website: "1111111111",
  userId: "xaxa",
}]

const getUsersOptions = {
  hostname: 'localhost',
  port: 3000,
  path: '/users',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}

const postUsersOptions = {
  hostname: 'localhost',
  port: 3000,
  path: '/users',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body : users[0]
};

describe('getUsers() should work :)', () => {
  it('should return an array of users and status code', (done) => {
    let req = http.request(getUsersOptions, (res) => {
      res.on('data', (elements) => {
        data = JSON.parse(elements)
        if (Object.keys(data).length > 0){
          expect(new User({...data[0]})).toBeTruthy()
          expect(new User({...data[0]})).toBeInstanceOf(User)
          expect(res.statusCode).toBe(200)
        } else {
          expect(res.statusCode).toBe(401)
        }
      })
      done() // permet d'attendre que la promise soit resolue avant d'expecter
    })
    req.end() // permet de lancer la requete ...
  })
})


describe('posttUsers() should work :)', () => {
  it('should return 200 status code', (done) => {
    let req = http.request(postUsersOptions, (res) => {
      res.on('data', (elements) => {
        data = JSON.parse(elements)
          expect(res.statusCode).toBe(200)
        })
      })
      done() 
      req.end()
  })
})