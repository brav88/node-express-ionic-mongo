const path = require('path');
const express = require('express');
const router = express.Router();
const Task = require('../model/task');
const Expense = require('../model/expense');

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/views/expenses.html'));
});

router.get('/expenses', function (req, res) {
    res.sendFile(path.join(__dirname+'/views/expenses.html'));
});

router.get('/events', function (req, res) {
    res.sendFile(path.join(__dirname+'/views/events.html'));
});

router.get('/location', function (req, res) {
    res.sendFile(path.join(__dirname+'/views/location.html'));
});

router.get('/friends', function (req, res) {
    res.sendFile(path.join(__dirname+'/views/friends.html'));
});

router.post('/addexpense', async (req, res, next) => {
    const expense = new Expense(req.body);
    await expense.save();
    res.redirect('/');
});

router.get('/getexpenses', async (req, res, next) => {
    const expense = await Expense.find();
    res.json(expense);
});

module.exports = router;
