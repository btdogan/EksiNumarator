chrome.storage.sync.get("girdiSayisi", function(items){

    count = parseInt(items.girdiSayisi);

    var page = ($(".pager").data("currentpage") ? $(".pager").data("currentpage") : 1),
        once = (parseInt($(".showall").text()) ? parseInt($(".showall").text()) : 0),
        tot = page * count,
        start = (page * count) - count + 1,
        ente = Number(start) + Number(once),
        ente2 = Number(tot) + Number(once);

    for (i = ente; i<= ente2; i++){
        cont = i - (page*count) + count -1 - once;
        console.log(i)
        $(".content")[cont].innerHTML = i + ". "  + $(".content")[cont].innerHTML;
    }
});


chrome.storage.sync.get("zaman", function(items){
  var timer = parseInt(items.zaman);

setInterval(function(){
$('#feed-refresh-link')[0].click();
}, timer);

});
