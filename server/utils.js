const simpleModelView = (controller) => {
  let router = require('express').Router();
  router.route('/')
      .get((req, res) => {
        res.json(controller.findAll());
      })
      .post((req, res) => {
        res.json(controller.create(req.body));
      });
  router.route('/:id')
      .get((req, res) => {
        res.json(controller.findById(req.params.id));
      })
      .put((req, res) => {
        res.json(controller.update(req.params.id, req.body));
      })
      .delete((req, res) => {
        res.json(controller.delete(req.params.id));
      });

  return router;
};

class SimpleController{
  constructor(model){
    this.Model = model;
    this.findAll = this.findAll.bind(this);
  }

  findAll(){
    this.Model.find((err, all) => {
      if(!err){
        return all;
      }else{
        const msg = `Error findAll on model ${this.Model.modelName}` ;
        console.log(err);
        return {err, msg};
      }
    });
  }

  findById(id){
    this.Model.findById(id, (err, doc) => {
      if(!err){
        return doc;
      }else{
        const msg = `Error findById on model ${this.Model.modelName}`;
        console.log(err);
        return {err, id, msg};
      }
    })
  }

  create(obj){
    this.Model.create(obj, (err, doc) => {
      if(!err){
        return doc;
      }else{
        const msg = `Error create on model ${this.Model.modelName}`;
        console.log(err);
        return {err, doc: obj, msg};
      }
    })
  }

  update(id, obj) {
    this.Model.findByIdAndUpdate(id, obj, (err, doc) => {
      if(!err){
        return doc;
      }else{
        const msg = `Error update on model ${this.Model.modelName}`;
        console.log(err);
        return {err, doc: obj, msg};
      }
    });
  }

}

module.exports = {
  simpleModelView,
  SimpleController,
};