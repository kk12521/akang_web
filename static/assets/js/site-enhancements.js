(function ($) {
    function createRafThrottle(callback) {
        var ticking = false;

        return function () {
            if (ticking) {
                return;
            }

            ticking = true;
            window.requestAnimationFrame(function () {
                callback();
                ticking = false;
            });
        };
    }

    function setActiveLinks(id) {
        var $links = $('.sidebar-menu-inner a.smooth, .flex-bottom a.smooth');

        $links.each(function () {
            var $link = $(this);
            var target = $link.data('change') || $link.attr('href');
            var isActive = target === '#' + id;

            $link.toggleClass('is-active', isActive);
            $link.parent('li').toggleClass('is-active', isActive);
        });
    }

    $(function () {
        var $body = $('body');
        var $searchInput = $('#search-text');
        var $modal = $('#search-modal');

        $body.addClass('motion-ready');

        var syncScrollState = createRafThrottle(function () {
            $body.toggleClass('is-scrolled', window.scrollY > 24);
        });

        syncScrollState();
        $(window).on('scroll', syncScrollState);

        $(document).on('keydown', function (event) {
            var target = event.target;
            var tagName = target && target.tagName ? target.tagName.toLowerCase() : '';
            var isEditable = tagName === 'input' || tagName === 'textarea' || (target && target.isContentEditable);
            var wantsQuickSearch = event.key === '/' || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k');

            if (wantsQuickSearch && !isEditable) {
                event.preventDefault();
                if ($searchInput.length) {
                    $searchInput.trigger('focus').select();
                }
            }

            if (event.key === 'Escape') {
                $('.search-smart-tips').slideUp(120);
                if ($modal.hasClass('show')) {
                    $modal.modal('hide');
                }
            }
        });

        $modal.on('shown.bs.modal', function () {
            $('#m_search-text').trigger('focus').select();
        });

        var $sponsorTrigger = $('#sponsor-trigger');
        if ($sponsorTrigger.length && $.fn.popover) {
            $sponsorTrigger.popover({
                trigger: 'click',
                placement: 'left',
                container: 'body',
                html: true,
                sanitize: false,
                content: function () {
                    return $('#sponsor-popover-content').html();
                }
            });

            $(document).on('click', function (event) {
                var $target = $(event.target);
                if (!$target.closest('#sponsor-trigger, .popover').length) {
                    $sponsorTrigger.popover('hide');
                }
            });
        }

        if ('IntersectionObserver' in window) {
            var revealObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                });
            }, {
                threshold: 0.14
            });

            document.querySelectorAll('.hero-intro, .section-shell, .reveal-card, .friendlink a').forEach(function (node, index) {
                if (node.classList.contains('reveal-card')) {
                    node.style.transitionDelay = ((index % 6) * 50) + 'ms';
                }
                revealObserver.observe(node);
            });

            var sectionNodes = Array.prototype.slice.call(document.querySelectorAll('.site-tag[id], #friendlink'));
            if (sectionNodes.length) {
                var sectionObserver = new IntersectionObserver(function (entries) {
                    var visibleEntries = entries.filter(function (entry) {
                        return entry.isIntersecting;
                    }).sort(function (left, right) {
                        return right.intersectionRatio - left.intersectionRatio;
                    });

                    if (!visibleEntries.length) {
                        return;
                    }

                    setActiveLinks(visibleEntries[0].target.id);
                }, {
                    rootMargin: '-26% 0px -52% 0px',
                    threshold: [0.25, 0.5, 0.75]
                });

                sectionNodes.forEach(function (node) {
                    sectionObserver.observe(node);
                });

                setActiveLinks(sectionNodes[0].id);
            }
        } else {
            $('.hero-intro, .section-shell, .reveal-card, .friendlink a').addClass('is-visible');
        }
    });
})(jQuery);
