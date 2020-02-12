var PythonShell = require("python-shell");

const getTableData = (req, res, db) => {
  db.select("*")
    .from("testtable")
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: "false" });
      }
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const postTableData = (req, res, db) => {
  const {
    gender,
    married,
    dependents,
    education,
    self_employed,
    applicant_income,
    coapplicant_income,
    loan_amount,
    loan_amount_term,
    property_area,
    name
  } = req.body;
  dependents = 0;
  console.log(req.body.name);
  const added = new Date();
  db("testtable")
    .insert({
      gender: gender,
      married: married,
      dependents: dependents,
      education: education,
      self_employed: self_employed,
      applicant_income: applicant_income,
      coapplicant_income: coapplicant_income,
      loan_amount: loan_amount,
      loan_amount_term: loan_amount_term,
      property_area: property_area,
      name: name
    })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

// const putTableData = (req, res, db) => {
//   const { id, first, last, email, phone, location, hobby } = req.body;
//   db("testtable1")
//     .where({ id })
//     .update({ first, last, email, phone, location, hobby })
//     .returning("*")
//     .then(item => {
//       res.json(item);
//     })
//     .catch(err => res.status(400).json({ dbError: "db error" }));
// };

// const deleteTableData = (req, res, db) => {
//   const { id } = req.body;
//   db("testtable1")
//     .where({ id })
//     .del()
//     .then(() => {
//       res.json({ delete: "true" });
//     })
//     .catch(err => res.status(400).json({ dbError: "db error" }));
// };

module.exports = {
  getTableData,
  postTableData
  //   putTableData,
  //   deleteTableData
};
