$("document").ready(function () {


    chrome.storage.sync.get("girdiSayisi", function (items) {

        var count = parseInt(items.girdiSayisi);

        var page = ($(".pager").data("currentpage") ? $(".pager").data("currentpage") : 1),
            once = (parseInt($(".showall").text()) ? parseInt($(".showall").text()) : 0),
            tot = page * count,
            start = (page * count) - count + 1,
            ente = Number(start) + Number(once),
            ente2 = Number(tot) + Number(once);

        for (var i = ente; i <= ente2; i++) {
            var cont = i - (page * count) + count - 1 - once;
            var content = $(".content")[cont];
            content.innerHTML = i + ". " + content.innerHTML;
        }
    });

    chrome.storage.sync.get("ackapas", function (items) {
        var ackapaf = items.ackapas;

        if (ackapaf) {

            chrome.storage.sync.get("zaman", function (items) {
                var timer = parseInt(items.zaman);

                setInterval(function () {
                    $('#feed-refresh-link')[0].click();
                }, timer);

            });
        }

    });

    $("body").css("background-color", "#e6e6e6");
    $("#index-section").css("width", "350px");
    $("#main").css("margin-left", "380px");
    $("#content-body").css({
        "width": "100%",
        "margin-left": "0px",
        "margin-right": "0px"
    });

    $("#aside").hide();

});
