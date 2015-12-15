(function() {
    'use strict';


	var   Class 		= require('ee-class')
        , type          = require('ee-types')
        , log           = require('ee-log')
        ;




	module.exports = new Class({


        /**
         * Sets the migration up
         *
         * @param {string} appId the name of the app this 
         *                 migration is used for
         * @param {string} componentId the name of the component
         *                 this migration is used for
         * @param {string} version semver version
         * @param {string} creationDate the date this migration
         *                 was created
         */
		init: function(appId, componentId, version, creationDate) {
            
            // store the users input
            this.appId = appId;
            this.componentId = componentId;
            this.version = version;
            this.creationDate = creationDate;


            // storage for the migrators
            this.up = [];
            this.down = [];

            this.dependencies = [];
		}


        





        /**
         * adds an up migration script
         *
         * @param {function} upFunction
         */
        , up: function(upFunction) {
            this.up.push(upFunction);

            return this;
        }






        
        /**
         * adds an down migration script
         *
         * @param {function} downFunction
         */
        , down: function(downFunction) {
            this.down.push(downFunction);

            return this;
        }








        /**
         * a migration may depend on multiple other 
         * migration
         *
         * @param {string} componentId the id of the component
         *                 that this migration depends on
         * @param {string} version semver
         */
        , dependsOn: function(componentId, version) {
            this.dependencies.push({
                  componentId: componentId
                , version: version
            });

            return this;
        }








        /**
         * the user has to describe what the migration does
         *
         * @param {string} name
         * @param {string} description
         */
        , describe: function(name, description) {
            this.name = name;
            this.description = description;

            return this;
        }
	});
})();
