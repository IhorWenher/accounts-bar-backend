Welcome to ACCOUNTS-BAR-BACKEND!

Use next routes:

GET 'https://accounts-bar-backend.herokuapp.com/accounts';
result: [{},{},{}...]

POST 'https://accounts-bar-backend.herokuapp.com/accounts'
body:
{
"company":"Nvidia",
"gameName:"Lara Croft",
"sum": 1234,
"currency": "Euro"
}
result: {\_id: d34232345edafffaas, payment: false,...}

PATCH 'https://accounts-bar-backend.herokuapp.com/accounts/d34232345edafffaas'
body: {"payment":"true"}
result: {\_id: d34232345edafffaas, payment: true,...}
