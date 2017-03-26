const createSimpleModelApiRoute = (controller) => {
  let router = require('express').Router();
  router.route('/')
      .get((req, res, next) => {
        controller.findAll(req, res, next);
      })
      .post((req, res, next) => {
        controller.create(req, res, next);
      });
  router.route('/:id')
      .get((req, res, next) => {
        controller.findById(req, res, next);
      })
      .put((req, res, next) => {
        controller.update(req, res, next);
      })
      .delete((req, res, next) => {
        controller.delete(req, res, next);
      });

  return router;
};

class SimpleController{
  constructor(model){
    this.Model = model;
  }

  findAll(req, res, next){
    const query = req.query; // TODO: filter by query (filterBackend)
    return this.Model.find().exec()
        .then(docs => {
          res.json({count: docs.length, docs});
          // let arr = [];
          // for(var i = 0, length = docs.length; i < length; i++){
          //   arr.push('"' + docs[i]["_id"] + '"');
          // }
          // res.send(arr.join(","));
        })
        .catch(err => {
          return next(err);
        });
  }

  findById(req, res, next){
    const id = req.params.id;
    return this.Model.findById(id).exec()
        .then(doc => {
          res.json(doc);
        })
        .catch(err => {
          return next(err);
        });
  }

  create(req, res, next){
    const obj = req.body;
    return this.Model.create(obj)
        .then(doc => {
          res.status(201).json(doc);
        })
        .catch(err => {
          return next(err);
        });
  }

  update(req, res, next) {
    const id = req.params.id;
    const obj = req.body;
    return this.Model.findByIdAndUpdate(id, obj).exec()
        .then(doc => {
          res.json(doc);
        })
        .catch(err => {
          return next(err);
        });
  }

  delete(req, res, next) {
    const id = req.params.id;
    return this.Model.findByIdAndRemove(id).exec()
        .then(() => {
          res.json({});
        })
        .catch(err => {
          return next(err);
        });
  }
}

const apiErrorHandler = (err, req, res, next) => {
  if(err){
    res.status(err.status || 500);
    res.json(err);
    next(err);
  }
};

const simpleErrorHandler = (err, req, res, next) => {
  console.log(err);
  try{
    res.status(500);
    res.render('error', { error: err });
  }catch(err){

  }
};

const createIntegerValidate = (fieldName) => {
  return {
    validator: v => {
      return Number.isInteger(v);
    },
    message: `${fieldName} must be an integer`,
  }
};

module.exports = {
  SimpleController,
  apiErrorHandler,
  simpleErrorHandler,
  createSimpleModelApiRoute,
  createIntegerValidate,
};