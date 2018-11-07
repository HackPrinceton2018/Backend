var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        lecture(id: Int!): Lecture
        notes(transcript: String): [Lecture]
    },
    type Lecture {
        id: Int
        transcript: String
    }
`);

var lectures = [
  {
    id: 1,
    transcript: "This is lecture one blah blah blah"
  },
  {
    id: 2,
    transcript:"This is lecture two blah bla"
  },
  {
    id: 3,
    transcript: "This is lecture three blah blah blah"
  }
]

var getLectureNumber = function(args){
  var id = args.id;
  return lectures.filter(lecture => {
      return lecture.id == id;
  })[0];
}

var getNotes = function(args){
  var notes = args.transcript;
  return lectures.filter(notes => {
      return notes.transcript == notes;
  })[1];
}

var root = {
    lecture : getLectureNumber,
    notes: getNotes
};

var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
