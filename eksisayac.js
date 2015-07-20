chrome.storage.sync.get("girdiSayisi", function(items){
    console.log(items.girdiSayisi);
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
