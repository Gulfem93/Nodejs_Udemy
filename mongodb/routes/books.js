var express = require('express');
var router = express.Router();

const Book = require('../Models/book'); 

/* GET users listing. */
router.get('/new', function(req, res, next) 
{
    const book = new Book({
        title: 'Deneme',
        published: false,
        num: 105
    });
    book.save((err, data)=>
    {
        res.json(data);
    });
});

router.get('/search', (req, res)=>
{
    Book.find({}, (err, data)=>
    {
        res.json(data);
    });
});

router.get('/delete', (req, res)=>
{
    Book.remove({title:'Deneme'}, (err, data)=>
    {
        res.json(data);
    });
});
router.get('/sort', (req, res)=>
{
    Book.find({}, (err, data)=>
    {
        res.json(data);
    }).sort({'num': 1});
})

router.get('/LimitAndSkip', (req, res)=>
{
    Book.find({}, (err, data)=>
    {
        res.json(data);
    }).skip(2).limit(2);
})

router.get('/aggregate/match', (req, res)=>
{
    Book.aggregate([
        {
            $match: {
                published: true
            }
        }
    ], (err, data)=> {res.json(data)});
})
router.get('/aggregate/group', (req, res)=>
{
    Book.aggregate([
        /**
          {
            $match: 
            {
                published: false
            }
        },
         */
       
        {
            $group:
            {
                _id: "$category",
                adet: {$sum: 1}
            }
        },
        {
            $project:
            {
                title: 1,
                category: true
            }
        }
    ], (err, data)=> {res.json(data)});
});

router.get('/aggregate/project', (req, res)=>
{
    Book.aggregate([
        {
            $project:
            {
                title: 1,
                category: true
            }
        }
    ], (err, data)=> {res.json(data)});
});

router.get('/aggregate/sort', (req, res)=>
{
    Book.aggregate([
        {
            $sort: {title: 1}
        }
    ], (err, data)=> {res.json(data)});
});

router.get('/aggregate/LimitAndSkip', (req, res)=>
{
    Book.aggregate([
        {
            $skip: 2
        },
        {
            $limit: 2
        }
    ], (err, data)=> {res.json(data)});
});

router.get('/exist', (req, res)=>
{
    Book.find({
        category: {$exists:false}
    }, (err, data)=>
    {
        res.json(data);
    });
});
module.exports = router;