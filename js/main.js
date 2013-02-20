//@codekit-prepend "jquery-1.9.0.min.js";
//@codekit-prepend "modernizr.min.js";
//@codekit-prepend "jquery.dataTables.min.js";
//@codekit-prepend "wnt.js";



/******** GOOGLE ANALYTICS ********/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-38473382-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

/******** LOCK WINDOW ********/
function BlockMove(event) {
    /* Prevents elasticity for window as a whole unit when viewed on mobile */
    if(wnt.mobile == true){
        event.preventDefault();
    }
}

/******** HIGHLIGHT CURRENT MENU ITEM ********/
var currentPage = document.location.pathname;
var defaultTab = 'yes';
for(i=0; i < $('menu').children('li').length; i++){
    var currentMenuItem = $('menu').children('li').eq(i);
    // Is it a top-level menu item?...
    if(currentMenuItem.children('a').attr('data-path') == currentPage){
        currentMenuItem.addClass('active');
        defaultTab = 'no';
    // ...or a second-level menu item?
    } else {
        for(j=0; j < currentMenuItem.find('li').length; j++){
            if(currentMenuItem.find('li').eq(j).find('a').attr('data-path') == currentPage){
                currentMenuItem.addClass('active');
                currentMenuItem.find('li').eq(j).addClass('active');
                defaultTab = 'no';
            }
        }
    }
}
if(defaultTab == 'yes') {
    $('menu').children('li:first').addClass('active');
}

/******** POPULATE TABLE WITH JSON DATA ********/
/* INDEXOF SHIV FOR IE8 */
if(!Array.prototype.indexOf){
    Array.prototype.indexOf = function(elt /*, from*/){
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0)
            ? Math.ceil(from)
            : Math.floor(from);
        if(from < 0){
            from += len;
        }
        for(; from < len; from++){
            if(from in this && this[from] === elt){
                return from;
            }
        }
        return -1;
    };
};
function generateRows(data){
    var row = '';
    var sold = data.indexOf('Sold!');
    $.each(data, function(cell){
        if(sold != -1){
            row += '<td class="sold">'+data[cell]+'</td>';
        } else {
            row += '<td>'+data[cell]+'</td>';
        };
        
    });
    return row;
}
if($('#prices').length != 0){   //If the pricing table exists...
    $.getJSON('prices.json?cachebust=1', function(data) {   //Load JSON, which is an array of arrays.
        $.each(data, function(row){   //Treat each array in the data as a row in the table.
            $('#prices tbody').append('<tr>'+generateRows(data[row])+'</tr>');
        });
        /*$('#prices').dataTable({
            "bPaginate": false,
            "bLengthChange": false,
            "bFilter": false,
            "bInfo": false,
            "bAutoWidth": false,
            "aoColumnDefs": [{
                "sType": "html",
                "aTargets": [0]
            }]
        });*/
    });
};
