/**
 * Created by julia.nesteruk on 9/16/2014.
 */
/* global angular, $ */
angular.module('directives.contacts', []).directive(
    'changecontactform', [function () {
        "use strict";
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {
                var showContact = element.find(".show-contact");
                var editBtn = element.find(".edit-btn");
                var editForm = element.find(".edit-form");
                var cancelBtn = element.find(".cancel-btn");
                var editContactForm = element.find("#editContactForm");

                editBtn.on('click', function () {
                    editForm.removeClass('hidden');
                    showContact.addClass('hidden');
                });
                cancelBtn.on('click', function () {
                    showContact.removeClass('hidden');
                    editForm.addClass('hidden');
                    editContactForm[0].reset();
                });
                editContactForm.on('submit', function () {
                    showContact.removeClass('hidden');
                    editForm.addClass('hidden');
                    editContactForm[0].reset();
                });
            }
        };
    }]
);