var requestURL = 'json/playlists/170831.json';
//var requestURL = 'https://raw.githubusercontent.com/andreabaum/andreabaum/master/170831.json';

$.getJSON( requestURL, function( data ) {
  populatePlaylist( data );
});

function populatePlaylist( data ) {
  var items = [];
  var playlist = data['items'];
  $.each( data, function( index, item ) {
    console.log(item)
    genre = item.Genre == '-' ? 'cortina' : item.Genre.toLowerCase();
    year = item.Year == null ? '' :  item.Year
    items.push( "<li id='" + index + "' class='list-group-item " + genre + "' >" + item.Artist + ' - ' + item.Title + "<span class='year'> " + year + "</span></li>" );

  });

  $( "<ul/>", {
    "class": "list-group borderless",
    html: items.join( "" )
  }).appendTo( ".playlist" );
}