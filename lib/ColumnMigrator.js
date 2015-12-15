(function() {
    'use strict';


    var   Class         = require('ee-class')
        , type          = require('ee-types')
        , log           = require('ee-log')
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



    let modifiers = [
          'nullable'
        , 'null'
        , 'notNull'
        , 'primary'
        , 'primaryKey'
        , 'foreignKey'
        , 'references'
        , 'index'
        , 'default'
    ];










    let classDefinition = {
        /**
         * Sets the migration up
         */
        init: function() {  

            // storage for modifiers
            this.modifiers = [];
        }
    };










    // add type methods
    types.forEach((typeName) => {
        classDefinition[typeName] = function() {
            this.modifiers.push(new ColumnTypeMigrator(this.table, this.column, typeName);
        }
    });



    // add nullable methods
    nullable.forEach((modifierName) => {
        classDefinition[modifierName] = function() {
            this.modifiers.push({
                  kind: 'modifier'
                , value: modifierName
            });
        }
    });









    // get class
    let cls = new Class(classDefinition);





    // expose method lists
    cls.types = types;
    cls.modifiers = modifiers;





    // expose lsits
    module.exports = cls;
})();
