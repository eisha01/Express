const Course = [
  { id: 1, name: 'asd1' },
  { id: 2, name: 'asd2' },
  { id: 3, name: 'asd3' },
];
export default {
  createCourse: (req, res) => {
    try {
      const { body } = req;
      const obj = {
        id: body.id,
        name: body.name,
      };
      Course.push(obj);
      return res.status(201).json(obj);
    } catch (err) {
      return res.satus(500).json({ error: err.message });
    }
  },
  getCours: (req, res) => {
    return res.status(200).json({ totalCourse: Course.length, Course });
  },
  updateCourse: (req, res) => {
    let data = Course.filter((element, index) => {
      if (element.id == req.body.id) {
        return (Course[index] = { id: req.body.id, name: req.body.name });
      }
    });
    return res.send(Course);
  },
  deleteCourse: (req, res) => {
    let arr = Course.splice((element, index) => {
      if (element.id == req.body.id) {
        return (Course[index] = (index, 1));
      }
    });

    return res.send(Course);
  },

  // const course = (req, res) => {
  //   res.json({ message: 'hellow world' });
  // };

  // let data = [{ id: 1, name: 'course1' }];

  // const post = (req, res) => {
  //   data.push(req.body);
  //   res.send(data);
  // };

  // const put = (req, res) => {
  //   data.name = req.body.name;
  //   res.send(req.body);
  // };

  // const del = (req, res) => {
  //   const index = data.indexOf(data);
  //   data.splice(index, 1);
  //   res.send(data);
  // };

  // export default
};
