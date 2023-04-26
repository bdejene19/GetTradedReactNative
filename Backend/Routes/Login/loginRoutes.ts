const express = require('express');
const router = express().Router();
const Users = require('../../../Models/User')
router.get('/login', async (req, res) => {
    try {
        let user = await Users.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!user) {
            return res.json({err: 'User not found'})
        } 

        if (user.password !== req.body.password) {
             return res.status(404).json({err: 'User not found'})
        }

        res.status(200).json(user)

    } catch(e) {
        return res.json(e);
    }   
});


module.exports = router;