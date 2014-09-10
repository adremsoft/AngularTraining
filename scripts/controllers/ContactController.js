/*global angular*/
angular.module('controllers.contacts', [])
    .controller('ContactsController', function ($scope, ContactData) {
        "use strict";

        ContactData.getData().then(function (data) {
            $scope.contactList = data;
        });

        $scope.changeTemplate = function (data) {
            $scope.templateName = "" + data + "";
        };

    });