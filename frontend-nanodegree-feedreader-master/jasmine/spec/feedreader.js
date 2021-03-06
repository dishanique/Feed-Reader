/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    //  This is our first test suite - a test suite just contains
    // a related set of tests. This suite is all about the RSS
    // feeds definitions, the allFeeds variable in our application.

    describe('RSS Feeds', function () {
        // This is our first test - it tests to make sure that the
        // allFeeds variable has been defined and that it is not
        // empty. Experiment with this before you get started on
        // the rest of this project. What happens when you change
        // allFeeds in app.js to be an empty array and refresh the
        // page?

        it('url  defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // A test that loops through each feed
        // in the allFeeds object and ensures it has a URL defined
        // and that the URL is not empty.


        function testEachFeedInallFeeds(inputParameter) {
            it('has an URL defined', function () {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            });
        }

        // Loop to verify each feed in allFeeds
        // for (var feed = 0, len = allFeeds.length; feed < len; feed++) {
        //     testEachFeedInallFeedsforName(feed);
        // }
        it('Test loop to check URL', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        // A test that loops through each feed
        // in the allFeeds object and ensures it has a name defined
        // and that the name is not empty.


        //     it('has a name defined', function () {
        //         for (var i in allFeeds) {
        //             expect(allFeeds[i].name).toBeDefined();
        //             expect(allFeeds[i].name.length).not.toBe(0);
        //             expect(typeof allFeeds[i].name).toBe('string');
        //         }
        //     });
        // });
        it('Test loop to check name', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    // A new test suite named "The menu" 

    // A test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.


    describe('The Menu', function () {
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        //  A test that ensures the menu changes
        // visibility when the menu icon is clicked. This test
        // have two expectations: does the menu display when
        // clicked and does it hide when clicked again.


        it('menu change visibility on click', function () {
            var menuIcon = $('.menu-icon-link');

            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // A new test suite named "Initial Entries" 

    // A test that ensures when the loadFeed
    //  function is called and completes its work, there is at least
    //  a single .entry element within the .feed container.
    //  Remember, loadFeed() is asynchronous so this test will require
    //  the use of Jasmine's beforeEach and asynchronous done() function.

    describe('Initial Entries', function () {
        //     it('is hidden by default', function() {
        //     expect($('body').hasClass('menu-hidden')).toBe(true);
        // });

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('feed contains at least one entry', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* A new test suite named "New Feed Selection"

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous. Reloading`
         */

    describe('New Feed Selection', function () {

        var initialFeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                initialFeed = $('.feed').html();
                loadFeed(2, done);
            });
        });

        it('displays content changes', function () {
            // $newFeed = $('.feed').html();
            // expect($feed).not.toEqual($newFeed);
            expect($('.feed').html()).not.toEqual(initialFeed);
        });

    });

}());
