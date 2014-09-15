/* global angular, $ */
angular.module('app.directives', ['ngRoute'])
    .directive('confirmPopupPopup', function () {
        "use strict";

        var template = '<div class="confirm popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">' +
            '<div class="arrow"></div>' +
            '<div class="popover-inner" style="overflow: hidden">' +
            '<div class="popover-content pull-left">' +
            '{{content}}' +
            '</div>' +
            '<div class="popover-buttons">' +
            '<button class="btn btn-xs" ix="0"></button>' +
            '<button class="btn btn-xs" ix="1"></button>' +
            '<button class="btn btn-xs" ix="2"></button>' +
            '</div>' +
            '</div>' +
            '</div>';
        return {
            restrict: 'EA',
            replace: true,
            scope: { title: '@', content: '@', placement: '@', animation: '&', isOpen: '&' },
            template: template
        };
    })

    .directive('confirmPopup', function ($tooltip, $document, $parse, $timeout) {
        "use strict";
        var d, oldCompile;

        function confirmPopupLink(scope, el, attr, oldLink) {
            oldLink(scope, el, attr);

            function togglePopup() {
                el.trigger('toggle');
            }

            function doAction(event) {
                var actions = attr.onAction.split(';'),
                    action = actions[angular.element(event.target).attr('ix')];

                $parse(action)(scope);
            }

            function doCancel(event) {
                if (event.target !== el && scope.tt_isOpen) {
                    togglePopup();
                    $document.off('click scroll', doCancel);
                }
            }

            function doClick(event) {
                angular.element('html').trigger('click');
                event.preventDefault();
                event.stopPropagation();


                function forEachPart(el, param, action) {
                    if (param !== undefined) {
                        var parts = param.split(';');
                        parts.forEach(function (part, i) {
                            if (i < el.length) {
                                action(angular.element(el[i]), part, i);
                            }
                        });
                    }
                }

                function setupButtons() {
                    var popup = angular.element('body div.confirm'),
                        buttons, baseWidth, baseHeight, left;

                    if (popup.length === 2) {
                        popup = $(popup[1]);
                    }

                    buttons = popup.find('* button');
                    baseWidth = popup.width();
                    baseHeight = popup.height();

                    buttons.css({display: 'none'})
                        .attr({class: "btn btn-xs", title: ''});

                    // replace text here it's not nice but it works
                    forEachPart(buttons, attr.confirmBtn, function (element, btnText, ix) {
                        element.css({display: 'initial'}).text(btnText);
                        if (ix === 0) {
                            element.focus();
                        }
                    });

                    forEachPart(buttons, attr.confirmBtnType, function (element, btnClass) {
                        element.addClass(btnClass);
                    });

                    forEachPart(buttons, attr.confirmBtnTitle, function (element, btnTitle) {
                        element.attr({title: btnTitle});
                    });

                    $document.on('click scroll', doCancel);

                    left = popup.position().left - ((popup.width() - baseWidth) / 2);
                    if (left < 0 ) {
                        left = 0;
                    }
                    popup.css({'left':  left + 'px' }); // this is for top and bottom
                    popup.css({'top': popup.position().top - (popup.height() - baseHeight) + 'px' }); // this is for top and bottom
                    buttons.click(doAction);
                }

                togglePopup();
                if (scope.tt_isOpen) {
                    (function () {
                        var popup = angular.element('body div.confirm');
                        if (popup.length > 1) {
                            setTimeout(function () {
                                setupButtons();
                            }, 25);
                        } else {
                            setupButtons();
                        }
                    })();
                }
            }

            el.on('click', doClick);
        }

        //compatible with v0.10 ui-bootstrap
        d = $tooltip('confirmPopup', 'popover', 'toggle');

        oldCompile = d.compile;
        d.compile = function (el, attr) {
            var oldLink = oldCompile(el, attr);
            return function (scope, el, attr) {
                return confirmPopupLink(scope, el, attr, oldLink);
            };
        };

        return d;
    });
