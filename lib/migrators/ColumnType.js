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

        // the type name
        , typeName: ''



        /**
         * set up the migrator
         */
        , init: function(tableName, columnName, typeName) {
            this.tableName = tableName;
            this.columnName = columnName;
            this.typeName = typeName;
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
