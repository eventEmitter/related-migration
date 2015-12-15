(function() {
    'use strict';


    var   Class         = require('ee-class')
        , type          = require('ee-types')
        , log           = require('ee-log')
        , Base          = require('./Base')
        ;




    module.exports = new Class({
        inherits: Base


        // apply to table
        , tableName: ''

        // apply to column
        , columnName: ''

        // referencedTable
        , referencedTable: null

        // drop the reference ?
        , drop: false



        /**
         * set up the migrator
         */
        , init: function(tableName, columnName, referencedTable, drop) {
            this.tableName = tableName;
            this.columnName = columnName;
            this.referencedTable = referencedTable;
            this.drop = !!drop;
        }
        




        

        /**
         * render the modification
         */
        , render: function() {
            return {
                  mode: 'alter'
                , columnName: this.columnName
                , typeName: this.typeName
                , kind: 'type'
                , value: this.typeName
            };
        }
    });
})();
