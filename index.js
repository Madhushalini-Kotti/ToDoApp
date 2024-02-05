var length_of_task = $(".item").length;

$(".delete").click(function () {
    var class_list = $(this).attr("id");
    $("." + class_list).hide();
});


$(".task").click(function () {
    var txt = $("#task")[0].value;
    if (txt !== "") {
        var new_element_id = length_of_task + 1;

        var container_start = "<div class='item col-12 container " + new_element_id + "'>";
        var check_box = "<input class='col-1' type='checkbox' height='15px' >";
        var para = "<p class='col-8' >" + txt + "</p>";
        var button_and_img = "<button class='delete col-1' id='" + new_element_id + "'> <img src='./trash3.svg' height='20px' /></button> ";
        var container_close = "</div>";

        var total = container_start + check_box + para + button_and_img + container_close;
        $(".list-container").prepend(total);
        length_of_task += 1;
        $(".delete").click(function () {
            var class_list = $(this).attr("id");
            $("." + class_list).hide();
        });
    }

});
