(function() {
    'use strict';


    var   Class         = require('ee-class')
        , type          = require('ee-types')
        , log           = require('ee-log')
        , Base          = require('./Base')
        , Nullable      = require('./Nullable')
        , ColumnType    = require('./ColumnType')
        , Reference     = require('./Reference')
        ;





    let types = [
          'serial'
        , 'int'
        , 'int8'
        , 'int16'
        , 'int32'
        , 'int64'
        , 'float'
        , 'float64'
        , 'float32'
        , 'integer'
        , 'bigint'
        , 'tinyInt'
        , 'smallInt'
        , 'numeric'
        , 'real'
        , 'bigSerial'
        , 'smallSerial'
        , 'timestampWithoutTimezone'
        , 'timestampWithTimezone'
        , 'timestamp'
        , 'date'
        , 'time'
        , 'timeWithoutTimezone'
        , 'timeWithTimezone'
        , 'varchar'
        , 'character'
        , 'characterVarying'
        , 'boolean'
        , 'text'
        , 'bigText'
        , 'smallText'
        , 'mediumText'
        , 'bigBlob'
        , 'mediumBlob'
        , 'smallBlob'
        , 'blob'
        , 'json'
    ];







    

    let classDefinition = {
        inhertis: Base


        // create a new column ?
        , isNew: false


        // the name of the coulmn
        , name: ''


        // name of the table
        , tableName: ''




        /**
         * Sets the migration up
         *
         */
        , init: function(tableName, columnName, isNew) {
            
            // new column?
            if (isNew) this.isNew = true;

            // our name
            this.name = columnName;
            this.tableName = tableName;

            // storage for modifiers that depend on this column
            this.modifiers = [];
        }



        



        /**
         * reference another table
         */
        , references: function(referencedTable) {
            this.modifiers.push(new Reference(this.tableName, this.name, referencedTable));
            return this;
        }

        /**
         * reference another table
         */
        , createReference: function(referencedTable) {
            this.modifiers.push(new Reference(this.tableName, this.name, referencedTable));
            return this;
        }

        /**
         * reference another table
         */
        , dropReference: function(referencedTable) {
            this.modifiers.push(new Reference(this.tableName, this.name, referencedTable, true));
            return this;
        }







        /**
         * custom type
         */
        , type: function(typeName) {
            this.modifiers.push(new ColumnType(this.tableName, this.name, typeName));
            return this;
        }








        /**
         * set nullable
         */
        , nullable: function() {
            this.modifiers.push(new Nullable(this.tableName, this.name, true));
            return this;
        }


        /**
         * set not nullable
         */
        , notNullable: function() {
            this.modifiers.push(new Nullable(this.tableName, this.name, false));
            return this;
        }


        /**
         * set nullable
         */
        , null: function() {
            this.modifiers.push(new Nullable(this.tableName, this.name, true));
            return this;
        } 


        /**
         * set not nullable
         */
        , notNull: function() {
            this.modifiers.push(new Nullable(this.tableName, this.name, false));
            return this;
        }
    };







    let types = [
          'serial'
        , 'int'
        , 'int8'
        , 'int16'
        , 'int32'
        , 'int64'
        , 'float'
        , 'float64'
        , 'float32'
        , 'integer'
        , 'bigint'
        , 'tinyInt'
        , 'smallInt'
        , 'numeric'
        , 'real'
        , 'bigSerial'
        , 'smallSerial'
        , 'timestampWithoutTimezone'
        , 'timestampWithTimezone'
        , 'timestamp'
        , 'date'
        , 'time'
        , 'timeWithoutTimezone'
        , 'timeWithTimezone'
        , 'varchar'
        , 'character'
        , 'characterVarying'
        , 'boolean'
        , 'text'
        , 'bigText'
        , 'smallText'
        , 'mediumText'
        , 'bigBlob'
        , 'mediumBlob'
        , 'smallBlob'
        , 'blob'
        , 'json'
    ];




    types.forEach((typeName) => {
        classDefinition[typeName] = function() {
            this.modifiers.push(new ColumnType(this.tableName, this.name, typeName));
            return this;
        }
    });




    module.exports = new Class(classDefinition);
})();
