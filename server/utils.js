const createSimpleModelApiRoute = (controller) => {
  let router = require('express').Router();
  router.route('/')
      .get((req, res, next) => {
        controller.findAll().exec()
            .then(docs => {
              res.json(docs);
            })
            .catch(err => {
              return next(err);
            });
      })
      .post((req, res, next) => {
        controller.create(req.body)
            .then(doc => {
              res.status(201).json(doc);
            })
            .catch(err => {
              return next(err);
            });
      });
  router.route('/:id')
      .get((req, res, next) => {
        controller.findById(req.params.id).exec()
            .then(doc => {
              res.json(doc);
            })
            .catch(err => {
              return next(err);
            });
      })
      .put((req, res, next) => {
        controller.update(req.params.id, req.body).exec()
            .then(doc => {
              res.json(doc);
            })
            .catch(err => {
              return next(err);
            });
      })
      .delete((req, res, next) => {
        controller.delete(req.params.id).exec()
            .then(() => {
              res.json({});
            })
            .catch(err => {
              return next(err);
            });
      });

  return router;
};

class SimpleController{
  constructor(model){
    this.Model = model;
  }

  findAll(){
    return this.Model.find();
  }

  findById(id){
    return this.Model.findById(id);
  }

  create(obj){
    return this.Model.create(obj);
  }

  update(id, obj) {
    return this.Model.findByIdAndUpdate(id, obj);
  }

  delete(id) {
    return this.Model.findByIdAndRemove(id);
  }
}

const simpleErrorHandler = (err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err,
  });
};

module.exports = {
  simpleErrorHandler,
  createSimpleModelApiRoute,
  SimpleController,
};