const cheeses = require('../data/cheeses');
/**
 * @module Cheeses
 */

module.exports = {
    /**
     * getAll
     * Returnere et JSON obj med alle oste
     * @returns {Object}
     */
    'getAll': () => cheeses,

    /**
     * getOne
     * Returere et JSON obj med èn ost
     * @param {string} varenr - varenummeret på en ost
     * @returns {Object}
     */
    'getOne': (varenr) => {
        let currentCheese = null;
        cheeses.forEach((cheese) => {
            if (cheese.varenr == varenr) {
                currentCheese = JSON.stringify(cheese);
            }
        });
        if (currentCheese != null) {
            return currentCheese;
        } else {
            return {
                "code": "ResourceNotFound",
                "message": "cheeses/" + varenr + " does not exist"
            };
        }
    }
};