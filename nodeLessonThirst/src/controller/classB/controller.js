const listAllStudents = [
  {
    name: "abc",
    age: 12,
    avatar: 'url',
    class: { id: 20 },
    averageScore: 20,
    subjects: {
      name: 'math',
      teacher: 'a'
    }
  },
  {
    name: "xyz",
    age: 12,
    avatar: 'url',
    class: { id: 20 },
    averageScore: 20,
    subjects: {
      name: 'english',
      teacher: 'b'
    }
  },
  {
    name: "lol",
    age: 12,
    avatar: 'url',
    class: { id: 20 },
    averageScore: 20,
    subjects: {
      name: 'physician',
      teacher: 'c'
    }
  }
];
const dataStudentCheck = [{
  // {
  //   name: "sssas",
  //   className: "a",
  //   subject: [],
  //   core: 222,
  //   absent: false,
  // }
}];
module.exports = {
  getClassBs: (req, res, next) => {
    try {
      return res.json({ messenger: 'get all success', data: listAllStudents })
    } catch (error) {
      next(error);
    }
  },
  addStudentCheck: (req, res, next) => {
    try {
      dataStudentCheck.push(req.body)
      return res.json({ messenger: 'get all success', data: dataStudentCheck })
    } catch (error) {
      next(error);
    }
  },
  addNewStudent: (req, res, next) => {
    try {
      listAllStudents.push(req.body)
      return res.json({ messenger: 'get all success', data: listAllStudents })
    } catch (error) {
      next(error);
    }
  }
}