(function() {
    'use strict';


    var   Class         = require('ee-class')
        , type          = require('ee-types')
        , log           = require('ee-log')
        , Base          = require('./Base')
        , Column        = require('./Column')
        ;






    module.exports = new Class({
        inhertis: Base


        // create a new table ?
        , isNew: false




        /**
         * Sets the migration up
         *
         */
        , init: function(tableName, isNew) {
            
            // new table?
            if (isNew) this.isNew = true;

            // our name
            this.name = tableName;

            // storage for modifiers that depend on this table
            this.modifiers = [];
        }


        









        /** 
         * create a new column
         *
         * @param {string} columnName name of the new column
         */
        , createColumn: function(columnName) {

            // create a new column
            let column = new Column(this.name, columnName, true);

            // add to storage
            this.modifiers.push(column);

            // return to the user
            return column;
        }











         /** 
         * get a column
         *
         * @param {string} columnName name of the column
         */
        , column: function(columnName) {

            // create a new column
            let column = new Column(this.name, columnName);

            // add to storage
            this.modifiers.push(column);

            // return to the user
            return column;
        }










        /**
         * get the instructions for this item
         */
        , getInstruction: function() {
            return {
                
            };
        }
    });
})();
