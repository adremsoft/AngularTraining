/**
 * Created by julia.nesteruk on 9/9/2014.
 */
/*global angular*/

angular.module('filters.phone', [])
    .filter('phone', function () {
        "use strict";

        function decodePhoneNumber(input) {
           return {
               code: input.slice(1, 3),
               operator: input.slice(3, 6),
               number: input.slice(6, 12)
           };
        }

        return function (input) {
            var phone;
            if (typeof input === 'string' && input.match(/^\+[0-9]*$/) != null) {
                phone = decodePhoneNumber(input);
                return "(+" + phone.code + ") " + phone.operator + " " + phone.number;
            } else {
                return "";
            }
        };
    });



