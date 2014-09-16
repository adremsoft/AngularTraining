/**
 * Created by julia.nesteruk on 9/9/2014.
 */
/*global angular*/
angular.module('services.contacts', [])
    .service('ContactData', function ($q) {
        "use strict";

        var data = [{
            picture: 'picture.png',
            name: 'Julia Surname',
            phoneNumber: '+380342711971',
            about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }, {
            picture: 'picture.png',
            name: 'Andrey Surname',
            phoneNumber: '+480242711971',
            about: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }, {
            picture: 'picture.png',
            name: 'Ihor Surname',
            phoneNumber: '+355342706871',
            about: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }, {
            picture: 'picture.png',
            name: 'Tom Surname',
            phoneNumber: '+388353211971',
            about: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
            picture: 'picture.png',
            name: 'Peter Surname',
            phoneNumber: '+31234751971',
            about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }];

        return {
            getData: function () {
                var def = $q.defer();
                def.resolve(data);
                return def.promise;
            },
            addData: function (input) {
                data.push(input);
            },
            deleteData: function (index) {
                data.splice(index, 1);
            }
        };
    });
