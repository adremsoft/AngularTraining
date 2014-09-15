/*global angular*/
angular.module('controllers.contacts', ['ui.bootstrap', 'ngAnimate'])
    .controller('ContactsController', function ($scope, ContactData) {
        "use strict";

        $scope.changeContactState = function () {
            $scope.showBtn = !$scope.showBtn;
            $scope.showForm = !$scope.showForm;
            $scope.newName = "";
            $scope.newInfo = "";
            $scope.newPhone = "";
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

        $scope.changeContactData = function (oldData, newData) {
            if (newData === undefined) {
                newData = oldData;
            } else {
                newData.picture = 'picture.png';
                newData.name = newData.name || oldData.name;
                newData.about = newData.about || oldData.about;
                newData.phoneNumber = newData.phoneNumber || oldData.phoneNumber;
            }
            $scope.deleteSelectedContact(oldData);
            ContactData.addData(newData);
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
