(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'About me',
        avatar: 'assets/svg/profile_pic.svg',
        content: 'I am working as Senior software engineer (iOS application developer).I am key player of the team who developed KineMaster (video editing app). I teach Python and Android programming through a community MOOC Circle which I co-founded with colleague in Seoul. I am also a free-lance full-stack developer and loves to share code via Github.'
      },
      {
        name: 'Skills',
        avatar: 'svg-2',
        content: 'Java, C, Python, PHP, Javascript, Objective-C, Swift, Google Cloud Platform, Shell Scripting'
      },
      {
        name: 'Projects',
        avatar: 'assets/svg/business29.svg',
        content: "NexPlayer SDK, KineMaster, Seoul Mate, Global MOOC Campus, MOOC Circle"
      },
      {
        name: 'Hacks',
        avatar: 'assets/svg/laptop_mac.svg',
        content: 'Raspberry pi, Arduino, Apple Watch (Details coming soon)'
      },
      {
        name: 'Talks',
        avatar: 'assets/svg/ic_video.svg',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      },
      {
        name: 'Blog',
        avatar: 'assets/svg/ic_more.svg',
        content: "<h3>Coming soon<h3>"},
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
