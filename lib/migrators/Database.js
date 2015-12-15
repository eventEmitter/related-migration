(function() {
    'use strict';


    var   Class         = require('ee-class')
        , type          = require('ee-types')
        , log           = require('ee-log')
        , Base          = require('./Base')
        ;




    module.exports = new Class({
        inherits: Base


        

        

        /**
         * set up the migrator
         */
        , init: function(table, column, type) {
            this.table = table;
            this.column = column;
            this.type = type;
        }
        






        /**
         * render the modification
         */
        , render: function() {
            return {
                  mode: 'alter'
                , column: this.column
                , table: this.table
                , kind: 'type'
                , value: this.type
            };
        }
    });
})();
