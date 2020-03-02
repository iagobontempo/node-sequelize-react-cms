const { authSecret } = require('../../.env');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const { Strategy, ExtractJwt } = passportJwt; // ExtractJwt já pega automaticamente o authorization no header pra aplicação

const User = require('../models/User.js');

module.exports = app => {
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    };

    const strategy = new Strategy(params, (payload, done) => {
        User.findByPk(payload.id)
            .then(user => done(null, user ? { ...payload } : false))
            .catch(err => done(err, false))
    });

    passport.use(strategy)

    return {
        authenticate: () => passport.authenticate('jwt', { session: false })
    }
}