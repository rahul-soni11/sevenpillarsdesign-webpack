var $ = require("jquery");

// Product Image zoom
$(document).ready(function () {
    $("[data-fancybox]").fancybox(
        {
            buttons: [
                "close"
            ],
            focus: true,
            wheel: false,
            infobar: false,

            animationEffect: "zoom",
            attr: {
                scrolling: "auto"
            },
        }
    );
});
