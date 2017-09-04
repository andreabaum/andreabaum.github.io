var events = [
  '170831'
];

var param = getUrlParameter().toString();
var items = [];

if ( param != '' && jQuery.inArray( param, events ) > -1 ) {
  // Show single event
  console.log('Show event '+param);

  var eventId = param;
  var requestURL = 'json/playlists/'+ eventId +'.json';
  //var requestURL = 'https://raw.githubusercontent.com/andreabaum/andreabaum/master/'+ eventId +'.json';

  $.getJSON( requestURL, function( data ) {
    populatePlaylist( data );
  });
} else {
  // Show events list
  console.log('Show events list');

  $.each( events, function( index, item ) {
    items.push( "<a href='?"+ item +"' class='list-group-item list-group-item-action' >" + item + "</a>" );
  });

  $( "<span/>", {
    "class": "",
    html: 'Events'
  }).appendTo( ".title" );

  $( "<ul/>", {
    "class": "list-group borderless",
    html: items.join( "" )
  }).appendTo( ".content" );
}



function populatePlaylist( data ) {
  var playlist = data['items'];

  $.each( data, function( index, item ) {
    genre = item.Genre == '-' ? 'cortina' : item.Genre.toLowerCase();
    year = item.Year == null ? '' :  item.Year
    items.push( "<li id='" + index + "' class='list-group-item " + genre + "' >" + item.Artist + ' - ' + item.Title + "<span class='year'> " + year + "</span></li>" );
  });

  $( "<span/>", {
    "class": "",
    html: eventId
  }).appendTo( ".title" );

  $( "<ul/>", {
    "class": "list-group borderless",
    html: items.join( "" )
  }).appendTo( ".playlist" );
}


function getUrlParameter() {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&');
    return sURLVariables[0];
};