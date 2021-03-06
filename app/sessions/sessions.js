'use strict';

angular.module('Areni.sessions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sessions', {
    templateUrl: 'sessions/sessions.html',
    controller: 'sessionsCtrl'
  });
}])

.controller('sessionsCtrl', ['$scope', function($scope) {
  $scope.teachers = [
    {
      "name": "Simon S.",
      "username": "silverelephant727",
      "img": "https://randomuser.me/api/portraits/men/52.jpg",
      "subj": "Math",
      "Lat": 47.6138333,
      "Lng": -122.3263265,
      "date": "Monday",
      "loc": "Tully's Coffee",
      "language": [
        "English" , "Arabic"
      ],
      "stars": 3,
      "time": "3:00 PM",
      "dist": 0.3
    },
    {
      "name": "Eduardo H.",
      "username": "crazyelephant598",
      "img": "https://randomuser.me/api/portraits/men/17.jpg",
      "subj": "Geology",
      "Lat": 47.6093364,
      "Lng": -122.3280238,
      "date": "Tuesday",
      "loc": "Sugar Bakery & Cafe",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "8:00 PM",
      "dist": 0.1
    },
    {
      "name": "Jayden C.",
      "username": "reddog828",
      "img": "https://randomuser.me/api/portraits/men/55.jpg",
      "subj": "Music",
      "Lat": 47.6093364,
      "Lng": -122.3345898,
      "date": "Wednesday",
      "loc": "Peet's Coffee & Tea",
      "language": [
        "English", "Spanish"
      ],
      "stars": 5,
      "time": "4:30 PM",
      "dist": 0.2
    },
    {
      "name": "Malo M.",
      "username": "bigtiger125",
      "img": "https://randomuser.me/api/portraits/men/70.jpg",
      "subj": "English",
      "Lat": 47.6085471,
      "Lng": -122.3432501,
      "date": "Thursday",
      "loc": "Chatterbox Cafe",
      "language": [
        "English"
      ],
      "stars": 3,
      "time": "6:00 PM",
      "dist": 0.6
    },
    {
      "name": "Laica M.",
      "username": "whiteostrich247",
      "img": "https://randomuser.me/api/portraits/women/45.jpg",
      "subj": "History",
      "Lat": 47.6194692,
      "Lng": -122.3623953,
      "date": "Friday",
      "loc": "Ambrosia Cafe",
      "language": [
        "English" ,"Arabic"
      ],
      "stars": 5,
      "time": "7:15 PM",
      "dist": 0.9
    },
    {
      "name": "Julie R.",
      "username": "lazyduck202",
      "img": "https://randomuser.me/api/portraits/women/59.jpg",
      "subj": "Geography",
      "Lat": 47.6019113,
      "Lng": -122.3314294,
      "date": "Saturday",
      "loc": "HardWok Cafe",
      "language": [
        "English"
      ],
      "stars": 5,
      "time": "5:00 PM",
      "dist": 1
    },
    {
      "name": "Fiete H.",
      "username": "greenbird933",
      "img": "https://randomuser.me/api/portraits/men/36.jpg",
      "subj": "Science",
      "Lat": 47.6171526,
      "Lng": -122.3353294,
      "date": "Saturday",
      "loc": "Row House Cafe",
      "language": [
        "English","Arabic"
      ],
      "stars": 3,
      "time": "3:00 PM",
      "dist": 2.1
    },
    {
      "name": "Donald P.",
      "username": "purplepanda404",
      "img": "https://randomuser.me/api/portraits/men/53.jpg",
      "subj": "Math",
      "Lat": 47.6081826,
      "Lng": -122.3381877,
      "date": "Sunday",
      "loc": "Regent Bakery & Cafe",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "8:00 PM",
      "dist": 0.9
    },
    {
      "name": "Aaron W.",
      "username": "silverfish199",
      "img": "https://randomuser.me/api/portraits/men/65.jpg",
      "subj": "Geology",
      "Lat": 47.6152231,
      "Lng": -122.3283525,
      "date": "Monday",
      "loc": "Cafe Solstice",
      "language": [
        "English", "Spanish"
      ],
      "stars": 5,
      "time": "4:30 PM",
      "dist": 1.4
    },
    {
      "name": "Sofie M.",
      "username": "purpleladybug159",
      "img": "https://randomuser.me/api/portraits/women/84.jpg",
      "subj": "Music",
      "Lat": 47.6145232,
      "Lng": -122.3325162,
      "date": "Tuesday",
      "loc": "Starbucks",
      "language": [
        "English"
      ],
      "stars": 3,
      "time": "6:00 PM",
      "dist": 1
    },
    {
      "name": "Sophia K.",
      "username": "yellowbird811",
      "img": "https://randomuser.me/api/portraits/women/32.jpg",
      "subj": "English",
      "Lat": 47.6138333,
      "Lng": -122.3263265,
      "date": "Wednesday",
      "loc": "Tully's Coffee",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "7:15 PM",
      "dist": 0.3
    },
    {
      "name": "Marius S.",
      "username": "organicrabbit629",
      "img": "https://randomuser.me/api/portraits/men/36.jpg",
      "subj": "History",
      "Lat": 47.6093364,
      "Lng": -122.3280238,
      "date": "Thursday",
      "loc": "Sugar Bakery & Cafe",
      "language": [
        "English", "Spanish"
      ],
      "stars": 4,
      "time": "5:00 PM",
      "dist": 0.1
    },
    {
      "name": "Marius M.",
      "username": "tinysnake128",
      "img": "https://randomuser.me/api/portraits/men/73.jpg",
      "subj": "Geography",
      "Lat": 47.6093364,
      "Lng": -122.3345898,
      "date": "Friday",
      "loc": "Peet's Coffee & Tea",
      "language": [
        "English"
      ],
      "stars": 3,
      "time": "3:00 PM",
      "dist": 0.2
    },
    {
      "name": "Lilly O.",
      "username": "beautifulwolf410",
      "img": "https://randomuser.me/api/portraits/women/51.jpg",
      "subj": "Science",
      "Lat": 47.6085471,
      "Lng": -122.3432501,
      "date": "Saturday",
      "loc": "Chatterbox Cafe",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "8:00 PM",
      "dist": 0.6
    },
    {
      "name": "آرتين ز.",
      "username": "yellowwolf450",
      "img": "https://randomuser.me/api/portraits/men/12.jpg",
      "subj": "Math",
      "Lat": 47.6194692,
      "Lng": -122.3623953,
      "date": "Saturday",
      "loc": "Ambrosia Cafe",
      "language": [
        "English","Spanish"
      ],
      "stars": 5,
      "time": "4:30 PM",
      "dist": 0.9
    },
    {
      "name": "Alex M.",
      "username": "bigdog267",
      "img": "https://randomuser.me/api/portraits/men/18.jpg",
      "subj": "Geology",
      "Lat": 47.6019113,
      "Lng": -122.3314294,
      "date": "Sunday",
      "loc": "HardWok Cafe",
      "language": [
        "English"
      ],
      "stars": 3,
      "time": "6:00 PM",
      "dist": 1
    },
    {
      "name": "John K.",
      "username": "beautifulpeacock932",
      "img": "https://randomuser.me/api/portraits/men/97.jpg",
      "subj": "Music",
      "Lat": 47.6171526,
      "Lng": -122.3353294,
      "date": "Monday",
      "loc": "Row House Cafe",
      "language": [
        "English","Arabic"
      ],
      "stars": 4,
      "time": "7:15 PM",
      "dist": 2.1
    },
    {
      "name": "Alfeu D.",
      "username": "redleopard437",
      "img": "https://randomuser.me/api/portraits/men/22.jpg",
      "subj": "English",
      "Lat": 47.6081826,
      "Lng": -122.3381877,
      "date": "Tuesday",
      "loc": "Regent Bakery & Cafe",
      "language": [
        "English"
      ],
      "stars": 5,
      "time": "5:00 PM",
      "dist": 0.9
    },
    {
      "name": "Ross B.",
      "username": "brownpeacock876",
      "img": "https://randomuser.me/api/portraits/men/61.jpg",
      "subj": "History",
      "Lat": 47.6152231,
      "Lng": -122.3283525,
      "date": "Wednesday",
      "loc": "Cafe Solstice",
      "language": [
        "English","Arabic"
      ],
      "stars": 3,
      "time": "3:00 PM",
      "dist": 1.4
    },
    {
      "name": "Matéo D.",
      "username": "whitedog296",
      "img": "https://randomuser.me/api/portraits/men/89.jpg",
      "subj": "Geography",
      "Lat": 47.6145232,
      "Lng": -122.3325162,
      "date": "Thursday",
      "loc": "Starbucks",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "8:00 PM",
      "dist": 1
    },
    {
      "name": "Tea M.",
      "username": "tinyduck611",
      "img": "https://randomuser.me/api/portraits/women/51.jpg",
      "subj": "Science",
      "Lat": 47.6138333,
      "Lng": -122.3263265,
      "date": "Friday",
      "loc": "Tully's Coffee",
      "language": [
        "English"
      ],
      "stars": 5,
      "time": "4:30 PM",
      "dist": 0.3
    },
    {
      "name": "محیا ك.",
      "username": "tinybear822",
      "img": "https://randomuser.me/api/portraits/women/50.jpg",
      "subj": "Math",
      "Lat": 47.6093364,
      "Lng": -122.3280238,
      "date": "Saturday",
      "loc": "Sugar Bakery & Cafe",
      "language": [
        "English", "Spanish"
      ],
      "stars": 3,
      "time": "6:00 PM",
      "dist": 0.1
    },
    {
      "name": "Samuel P.",
      "username": "crazygoose926",
      "img": "https://randomuser.me/api/portraits/men/29.jpg",
      "subj": "Geology",
      "Lat": 47.6093364,
      "Lng": -122.3345898,
      "date": "Saturday",
      "loc": "Peet's Coffee & Tea",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "7:15 PM",
      "dist": 0.2
    },
    {
      "name": "Daniel B.",
      "username": "blackfrog232",
      "img": "https://randomuser.me/api/portraits/men/3.jpg",
      "subj": "Music",
      "Lat": 47.6085471,
      "Lng": -122.3432501,
      "date": "Sunday",
      "loc": "Chatterbox Cafe",
      "language": [
        "English"
      ],
      "stars": 5,
      "time": "5:00 PM",
      "dist": 0.6
    },
    {
      "name": "Marie P.",
      "username": "ticklishfish609",
      "img": "https://randomuser.me/api/portraits/women/6.jpg",
      "subj": "English",
      "Lat": 47.6194692,
      "Lng": -122.3623953,
      "date": "Monday",
      "loc": "Ambrosia Cafe",
      "language": [
        "English"
      ],
      "stars": 3,
      "time": "3:00 PM",
      "dist": 0.9
    },
    {
      "name": "Rosalyn B.",
      "username": "bigmouse238",
      "img": "https://randomuser.me/api/portraits/women/79.jpg",
      "subj": "History",
      "Lat": 47.6019113,
      "Lng": -122.3314294,
      "date": "Tuesday",
      "loc": "HardWok Cafe",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "8:00 PM",
      "dist": 1
    },
    {
      "name": "Juho H.",
      "username": "organicmeercat879",
      "img": "https://randomuser.me/api/portraits/men/91.jpg",
      "subj": "Geography",
      "Lat": 47.6171526,
      "Lng": -122.3353294,
      "date": "Wednesday",
      "loc": "Row House Cafe",
      "language": [
        "English"
      ],
      "stars": 5,
      "time": "4:30 PM",
      "dist": 2.1
    },
    {
      "name": "Mason L.",
      "username": "greenbear524",
      "img": "https://randomuser.me/api/portraits/men/62.jpg",
      "subj": "Science",
      "Lat": 47.6081826,
      "Lng": -122.3381877,
      "date": "Thursday",
      "loc": "Regent Bakery & Cafe",
      "language": [
        "English","Arabic"
      ],
      "stars": 3,
      "time": "6:00 PM",
      "dist": 0.9
    },
    {
      "name": "Angus J.",
      "username": "smalldog349",
      "img": "https://randomuser.me/api/portraits/men/1.jpg",
      "subj": "Math",
      "Lat": 47.6152231,
      "Lng": -122.3283525,
      "date": "Friday",
      "loc": "Cafe Solstice",
      "language": [
        "English","Arabic"
      ],
      "stars": 4,
      "time": "7:15 PM",
      "dist": 1.4
    },
    {
      "name": "Stella N.",
      "username": "yellowfish782",
      "img": "https://randomuser.me/api/portraits/women/1.jpg",
      "subj": "Geology",
      "Lat": 47.6145232,
      "Lng": -122.3325162,
      "date": "Saturday",
      "loc": "Starbucks",
      "language": [
        "English" , "Arabic"
      ],
      "stars": 5,
      "time": "5:00 PM",
      "dist": 1
    }
  ];

  $scope.subjects = [
    'English',
    'Geography',
    'Geology',
    'History',
    'Math',
    'Music',
    'Science'
  ];
  $scope.setSubject = function(s) {
    $scope.subject = s;
  }

  $scope.subject;


  var geocoder;
  var map;

  var infowindow = new google.maps.InfoWindow();

  //position.coords.longitude;
  //position.coords.latitude;

  $scope.initMarkers = function() {
    var marker, i;
    var image = '/img/marker.png';

    for (i = 0; i < $scope.teachers.length; i++) {
      marker = new google.maps.Marker({
        position: {
          lat: $scope.teachers[i]['Lat'],
          lng: $scope.teachers[i]['Lng']
        },
        map: map,
        icon: image
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent("<a href='#!/teacher/" + $scope.teachers[i].username+ "/session'><b>" + $scope.teachers[i]['name'] + "</b></a>" + "<br/>" + $scope.teachers[i]['subj']+ "<br/>" +$scope.teachers[i]['date'] + "<br/>" +$scope.teachers[i]['loc']);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

    // location marker
    marker = new google.maps.Marker({
      position: {
        lat: 47.6070031,
        lng: -122.3204234
      },
      map: map,
      icon: '/img/location.png'
    });
  }

  $scope.onSuccess =  function(position) {
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    var latLong = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
      zoom: 10,
      center: latLong,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    $scope.initMarkers();

  }
  $scope.onError = function(error){
    // var longitude = ;
    // var latitude = ;
    // var latLong = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
      zoom: 13,
      center: {
        lat: 47.6080031,
        lng: -122.3274234
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    $scope.initMarkers();

  }
  navigator.geolocation.getCurrentPosition($scope.onSuccess, $scope.onError);


  $scope.groupComparator = function(item) {
    return $scope.teachers.indexOf(item.dist);
  }

  $scope.locationChange = function(item){
    return $scope.teachers.indexOf(item.subj);
  }

}

]);
