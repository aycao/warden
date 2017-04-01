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

const makeCondation = (fieldName, cmp, val) => {
  return {[fieldName]: {[cmp]: val}};
};

class SimpleController{
  constructor(model){
    this.Model = model;
    this.sort = {};
  }

  findAll(req, res, next){
    /**
     * Filter backend (query param filter) supports:
     * key=value
     * key__eq=value
     * key__gt=value
     * key__gte=value
     * key__lt=value
     * key__lte=value
     * key__ne=value
     */
    const query = req.query;
    let conditionDict = {};
    Object.keys(query).forEach((key) => {
      if(!key.includes('__') || key.endsWith('__eq')){
        conditionDict[key] = conditionDict[key] || {};
        conditionDict[key]['$eq'] = query[key];
      }else if(key.endsWith('__gt') || key.endsWith('__gte') || key.endsWith('__lt') ||
          key.endsWith('__lte') || key.endsWith('__ne')){
        const cmp = key.replace(/.*__/, '$');
        const keyName = key.replace(/__(?=[^__]*$).*/, '');
        conditionDict[keyName] = conditionDict[keyName] || {};
        conditionDict[keyName][cmp] =  query[key];
      }
    });
    let and = [];
    Object.keys(conditionDict).forEach(fieldName => {
      let or = [];
      let diffCmpAnd = [];
      const field = conditionDict[fieldName];
      Object.keys(field).forEach(cmp => {
        if(Array.isArray(field[cmp])){
          field[cmp].forEach(val => {
            const cond = makeCondation(fieldName, cmp, val);
            or.push(cond);
          });
        }else{
          const cond = makeCondation(fieldName, cmp, field[cmp]);
          diffCmpAnd.push(cond);
        }
      });
      if(or.length){
        diffCmpAnd.push({$or: or});
      }
      if(diffCmpAnd.length){
        and.push({$and: diffCmpAnd});
      }
    });
    let findCond = {};
    if(and.length){
      findCond['$and'] = and;
    }
    console.log(findCond);
    return this.Model.find(findCond).sort(this.sort).exec()
        .then(docs => {
          res.json({cond: findCond, count: docs.length, docs});
        })
        .catch(err => {
          return next(err);
        });
    // return this.Model.find().select('_id').sort(this.sort).exec()
    //     .then(docs => {
    //       let arr = [];
    //       for(var i = 0, length = docs.length; i < length; i++){
    //         arr.push('"' + docs[i]["_id"] + '"');
    //       }
    //       res.send(arr.join(","));
    //     })
    //     .catch(err => {
    //       return next(err);
    //     });
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