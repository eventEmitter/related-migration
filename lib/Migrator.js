(function() {
    'use strict';


    var   Class         = require('ee-class')
        , type          = require('ee-types')
        , log           = require('ee-log')
        , Table         = require('./Table')
        ;




    let classDefinition = {


        /**
         * Sets the migration up
         *
         */
        init: function() {
                
            // storage for tables
            this.tables = new Map();
        }


        









        /** 
         * create a new table
         *
         * @param {string} tableName tablename
         */
        , createTable: function(tableName) {

            if (this.tables.has(tableName)) throw new Error(`Cannot create the table ${tableName}, it was created already before!`);
            else {
                // create a new table
                let table = new Table(tableName, true);

                // add to storage so it can be modified later
                this.tables.set(tableName, table);

                // return to the user
                return table;
            }
        }











        /**
         * returns an table object for an exisintg table
         *
         * @param {string} tableName tablename
         */
        , table: function(tableName) {
            if (this.tables.has(tableName)) return this.tables.get(tableName);
            else {
                // existing table
                let table = new Table(tableName);

                // add to storage so it can be modified later
                this.tables.set(tableName, table);

                // return to the user
                return table;
            }
        }











        /**
         * creates a schema
         *
         * @param {string} schemaName
         */
        , createSchema: function(schemaName) {
            this.schema = schemaName;

            return this;
        }








        /**
         * creates a database
         *
         * @param {string} dbName 
         */
        , createDatabase: function(dbName) {
            this.database = dbName;

            return this;
        }
    };









    // return a class
    module.exports = new Class(classDefinition);
})();
