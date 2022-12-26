
const Course=require('../models/Course');
const {mutipleMongooseToObject}=require('../../util/mongose');


class SiteController{
    //GET/  ->Home
    index(req,res,next){
        Course.find({})
            .then(courses=>{
                res.render('home',{
                    courses:mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    // /search (theo tên sản phẩm)
    search(req,res,next){
        const k = req.body.key;
       
        const co = Course.find({$or:[{name: k},{slug: k }]} )
        .then(co=>{       
            res.render('search',{ courses:mutipleMongooseToObject(co) });
            })
        .catch(next);
      //  res.render('search');
    }

    

   
    

}

module.exports=new SiteController;