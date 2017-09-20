const obj = {
  statusCode: 301,
  headers: {
    Location: "test.html",
  },
  body: "token"
}
console.log(obj);

const lamdba = { statusCode: 201 };

const test = Object.assign({}, lamdba);
//console.log(lamdba);
//console.log(test);


const handler = (url) => {
  let response = { statusCode: 301};
  let header = { header: {location: url}};
  return url ? Object.assign({}, response, { header: {location: url}}) : "hoge";
};

const result = handler("test!");
console.log(result);


