# related-migration

[![Greenkeeper badge](https://badges.greenkeeper.io/eventEmitter/related-migration.svg)](https://greenkeeper.io/)

automatic db migrations

## installation

    npm i related-migration


## build status

[![Build Status](https://travis-ci.org/eventEmitter/related-migration.png?branch=master)](https://travis-ci.org/eventEmitter/related-migration)


## usage



The files are identified by the header contained in the file

    #!/usr/bin/env related-migration

    let migration = new RelatedMigration('my-app', eventdata-service', '1.2.1', '2015-12-31');


    migrations.describe('permissions', 'Adds permission to the database');


    migration.dependsOn('generics', '7.1');



    migration.up(function() {                   
        
        migration.createDatabase('');
        migration.createSchema('');


        // create a table
        let image = migration.createTable({
              id:   migration.serial()
            , imageType: migration.reference(migration.table('imageType')).onUpdateCascade().onDelteSetNull();
        }};


        let event = migration.createTable('event', {
              id:    migration.serial().nullable()
            , image: migration.mapTo(image).reject().cascade()
        });


        event.createUniqueIndex('', '', '');


        migration.sql('');


        let venue = migration.table('venue');

        venue.column('id').nullable().transform('*', (value, record, resolve, reject) => {

        }).int().notNullable();




        return migration.apply().then(() => {
            // do normal orm stuff
            
            return migration.getTransaction().then((transaction) => {


                return Promise.resolve();
            });
        });
    });






    migration.down(function() {
        migration.dropSchema('');
        migration.dropDatabase('');
    });




    return migration;





related-migrator.js
    

    #!/usr/bin/env related-migrator

    
    // this file needs to somewhere in your project
    // related will find it if its there. it cannot be 
    // a dependnecy (hence not in the node_modules folder)


    var migrator = new Migrator('my-app');

    migrator.collectScripts(__dirname);
    migrator.addScript('/path/to/migration');

    migrator.setDbState('tableName');
    migrator.setFileState('/path/to/file');

    migrator.execute(config);





CLI


    related migrate up to v1.x
    related migrate up from 2.x to 3.x


    related migrate up
    scanning for migrations ...
    found 345 migrations scripts, from version 1.2.1 to 3.2.4

    got migration state from database root@10.80.100.1/eventbooster:
      eventdata-service: 0.11.4
      genrics: 2.89.0 

    please select the migrations you want to apply:
      [o] eventdata-service, permissions [1.78.1 -> 2.7.88; 2015-12-31]: Adds permission to the database and [...]
      [o] generics, permissions [1.78.1 -> 2.7.88; 2015-12-31]: Adds the tenant table

    [Execute] [Abort]

   
    related migrate up --y --silent

    related migrate list





