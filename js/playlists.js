var events = [
  '170831',
  '170907'
];

var eventId = getUrlParameter().toString();
var items = [];

if ( eventId != '' && jQuery.inArray( eventId, events ) > -1 ) {
  // Show single event
  log('Show event '+eventId);

  var requestURL = 'json/playlists/'+ eventId +'.json';
  //var requestURL = 'https://raw.githubusercontent.com/andreabaum/andreabaum/master/'+ eventId +'.json';

  setTitle( eventId );

  $.getJSON( requestURL, function( data ) {
    // Populate playlist
    $.each( data, function( index, item ) {
      genre = item.Genre == '-' ? 'cortina' : item.Genre.toLowerCase();
      year = item.Year == null ? '' :  item.Year
      items.push( "<li id='" + index + "' class='list-group-item list-group-item-action "+ genre +"' >"+ item.Artist +" - "+ item.Title +"<span class='year'> "+ year +"</span></li>" );
    });

    setContent();
  });

} else {
  // Show events list
  log('Show events list');

  setTitle( 'Events' );

  $.each( events, function( index, item ) {
    items.push( "<a href='?"+ item +"' class='list-group-item' >" + item + "</a>" );
  });

  setContent();
}

function setTitle( title ) {
  $( "<span/>", {
    "class": "",
    html: title
  }).appendTo( ".title" );
}

function setContent() {
  $( "<ul/>", {
    "class": "list-group borderless",
    html: items.join( "" )
  }).appendTo( ".content" );
}

function getUrlParameter() {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&');
  return sURLVariables[0];
}

function log ( obj ) {
  console.log(obj);
}