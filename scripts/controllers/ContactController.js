/*global angular*/
angular.module('controllers.contacts', ['ui.bootstrap', 'ngAnimate'])
    .controller('ContactsController', function ($scope, ContactData) {
        "use strict";

        $scope.changeContactState = function () {
            $scope.showBtn = !$scope.showBtn;
            $scope.showForm = !$scope.showForm;
        };

        $scope.addNewContact = function () {
            ContactData.addData({
                picture: 'picture.png',
                name: $scope.newName,
                about: $scope.newInfo,
                phoneNumber: $scope.newPhone.replace(/\s+/g, '').substring(0, 12)
            });
            $scope.newName = "";
            $scope.newInfo = "";
            $scope.newPhone = "";
            $scope.changeContactState();
        };

        $scope.changeContactData = function (data) {
            $scope.showContact = true;
            $scope.showEdit = false;
        };

        $scope.deleteSelectedContact = function (data) {
            ContactData.deleteData($scope.contactList.indexOf(data));
        };

        ContactData.getData().then(function (data) {
            $scope.contactList = data;
        });

        $scope.showBtn = true;
        $scope.showForm = false;
        $scope.showContact = true;
        $scope.showEdit = false;
    });
