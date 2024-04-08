// js

// jq

$(document).ready(function(){
  // draggable
  $( "#draggable" ).draggable();

  // accordion
  $( "#accordion" ).accordion({
    collapsible: true
  });

// autocomplete
  var data = ["Full Stack Web Development", 
    "Graphics Design",
     "Digital Marketing"
     ]
  $("#c_name").autocomplete({
    source: data
  });

  // datepicker
  $( "#datepicker" ).datepicker();

  // tooltip
  var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
      }
    });
    // $( "<button>" )
    //   .text( "Show help" )
    //   .button()
    //   .on( "click", function() {
    //     tooltips.tooltip( "open" );
    //   })
    //   .insertAfter( "form" );

  // toggle
  var state = true;
    $( "#t_button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });

    // hide
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#h_button" ).on( "click", function() {
      runEffect();
    });

    // dialog
    $( "#dialog" ).dialog();

    // droppable
    $( "#drag" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    // resizable
    $( "#resizable" ).resizable();

    // sortable
    $( "#sortable" ).sortable();

    // menu
    $( "#menu" ).menu();

    // slider
    $( "#slider" ).slider();

    // tabs
    $( "#tabs" ).tabs({
      collapsible: true
    });

    // select menu
    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();

    // checkbox
    $( "input" ).checkboxradio({
      icon: false
    });

});    
