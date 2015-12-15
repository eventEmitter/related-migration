!function() {


    var   Types = {}
        , proto = {};


    [ // a big list of many of the stadard types provided by mysl and / or postgres
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
    ].forEach(function(typeName) {
        Types[typeName.toUpperCase()] = Types[typeName] = function() {
            return Object.create(proto, {
                  type: {value: typeName}
                , args: {value: Array.prototype.slice.call(arguments)}
            });
        };
    });



    // column modifiers
    var modifiers = [
          'nullable'
        , 'null'
        , 'notNull'
        , 'primary'
        , 'primaryKey'
        , 'foreignKey'
        , 'references'
        , 'index'
        , 'default'
    ].map(function(name) {
        var fn;

        fn = function() {
            var config = (typeof this === 'function') ? this() : this;

            config[name] = Array.prototype.slice.call(arguments);

            return config;
        };

        fn._name = name;

        return fn;
    });



    modifiers.forEach(function(fn) {
        // applly to all type functions
        Object.keys(Types).forEach(function(typeName) {
            Types[typeName][fn._name] = fn;
        });

        // apply to all modifier functions
        modifiers.forEach(function(modifier) {
            modifiers[fn._name] = fn;
        });

        // apply to the config proto object
        proto[fn._name] = fn;
    }.bind(this));



    module.exports = Types;
}();
