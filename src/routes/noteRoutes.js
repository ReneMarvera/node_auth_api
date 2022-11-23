const express       = require('express');
const noteRouter    = express.Router();

noteRouter.get('/',(req,res)=>
{
    res.send('get all');
});

noteRouter.get('/:id',(req,res)=>
{
    const { id } = req.params;
    res.send('get by id '+id);
});

noteRouter.post('/',(req,res)=>
{
    res.send('create');
});

noteRouter.put('/:id',(req,res)=>
{
    const { id } = req.params;
    res.send('update by id ? '+id+', set params');
});

noteRouter.delete('/:id',(req,res)=>
{
    const { id } = req.params;
    res.send('delete by id ?'+id);
});

module.exports = noteRouter;