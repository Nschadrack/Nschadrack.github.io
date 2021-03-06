window.onload=function(){
    var car_title_header_button_clicked = document.getElementById("car_title_header_and_new_btn_button");
    var cancelOperation = document.getElementById("cancel_operation");
    var groupCarRegisterForm = document.getElementById("car_new_form");

    /* Group car page function call */
    car_title_header_button_clicked.addEventListener('click', showNewGroupCarRegiseterForm);
    cancelOperation.addEventListener('click', showGroupCarList);
    groupCarRegisterForm.addEventListener('submit', function(e){
        e.preventDefault()
    });


}

/* javascript for group car page */
function showNewGroupCarRegiseterForm(e){
    var form_div_to_show = document.getElementById("car_new_form_div");
    var car_list_to_hide = document.getElementById("car_table_data");
    var car_title_header_button_clicked = document.getElementById("car_title_header_and_new_btn_button");
    var car_title_header_paragraph = document.getElementById("car_title_header_and_new_btn_p");

    form_div_to_show.style.display="block";
    car_list_to_hide.style.display = "none";
    car_title_header_button_clicked.style.display="none";
    car_title_header_paragraph.style.display="none";
}
function showGroupCarList(e){
    var form_div_to_show = document.getElementById("car_new_form_div");
    var car_list_to_hide = document.getElementById("car_table_data");
    var car_title_header_button_clicked = document.getElementById("car_title_header_and_new_btn_button");
    var car_title_header_paragraph = document.getElementById("car_title_header_and_new_btn_p");
    

    form_div_to_show.style.display="none";
    car_list_to_hide.style.display = "block";
    car_title_header_button_clicked.style.display="block";
    car_title_header_paragraph.style.display="block";
}

function showGroupPriceArchive(value){
    var price_archive_list = document.getElementById("price_archive_list");
    price_archive_list.style.display=value;
}
