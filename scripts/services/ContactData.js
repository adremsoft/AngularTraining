/**
 * Created by julia.nesteruk on 9/9/2014.
 */
/*global angular*/
angular.module('services.contacts', [])
    .service('ContactData', function ($q) {
        "use strict";

        var data = [{
            picture: 'picture.png',
            name: 'Julia',
            phoneNumber: '+380342711971',
            about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }, {
            picture: 'picture.png',
            name: 'Andrey',
            phoneNumber: '+380242711971',
            about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }, {
            picture: 'picture.png',
            name: 'Ihor',
            phoneNumber: '+380342706871',
            about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }, {
            picture: 'picture.png',
            name: 'Tom',
            phoneNumber: '+380353211971',
            about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }, {
            picture: 'picture.png',
            name: 'Peter',
            phoneNumber: '+38034751971',
            about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }];

        return {
            getData: function () {
                var def = $q.defer();
                def.resolve(data);
                return def.promise;
            }
        };
    });
