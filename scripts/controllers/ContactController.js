/*global angular*/
angular.module('controllers.contacts', ['ui.bootstrap'])
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

        $scope.changeContactData = function () {
            console.log($scope.changedName); // always undefined!
            /* var editedContact = {
             picture: 'picture.png',
             name: $scope.changedName,
             about: $scope.changedInfo,
             phoneNumber: "+23764823746"
             } || {
             picture: data.picture,
             name: data.name,
             about: data.about,
             phoneNumber: data.phoneNumber
             };*/
            $scope.deleteSelectedContact(data);
            ContactData.addData(editedContact);
            $scope.editSelectedContact();
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
