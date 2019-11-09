var $ = require("jquery");

var data = {}
var vairant_pickers = ""
var current_pair = ""

window.onload = $(document).ready(function () {
    // select #variant-picker element
    //  if element exist 
    // Get variant data.
    // generate variant picker html for each attribute
    // set price of the product based on selected attributes
    const element = $("#variant-picker");
    if (element.length == 1) {
        data = JSON.parse(element.attr("data-variant-picker-data"))
        console.log(data)
        $.each(data["variantAttributes"], function () {
            create_variantpicker(this["pk"], this["name"], this["values"])
        });
        element.append(vairant_pickers)

    }
});


// This function generates variant picker html for each attribute
// and put active class in button acording to first variant
function create_variantpicker(attribute_id, name, values) {
    // get attributes of first variant
    first_variant_attrs = data["variants"][Object.keys(data["variants"])[0]]["attributes"]
    // console.log(attribute_id)
    // console.log(first_variant_attrs)
    // console.log(values)
    var current_picker = "<p class='mt-4 mb-3'>" + name + "</p><div class='btn-group btn-group-toggle' data-toggle='buttons'>";

    $.each(values, function (index) {
        // console.log(this["pk"])
        // console.log(first_variant_attrs[attribute_id] == this.pk)
        if (first_variant_attrs[attribute_id] == this.pk) {
            // makr first variant active on each attribute
            current_picker += "<label class='btn btn-secondary active' attribute='" + attribute_id + "' value='" + this["pk"] + "'><input type='radio' name='" + attribute_id + "' id='" + this["pk"] + "' autocomplete='off' >" + this["name"] + "</label>"
        } else {
            current_picker += "<label class='btn btn-secondary' attribute='" + attribute_id + "' value='" + this["pk"] + "'><input type='radio' name='" + attribute_id + "' id='" + this["pk"] + "' autocomplete='off' >" + this["name"] + "</label>"
        }
    });
    current_picker += "</div>"
    // console.log("")

    vairant_pickers += current_picker

}

// The .on() method is used to delegate events to elements, dynamically added or already present in the DOM:
// STATIC-PARENT     on  EVENT    DYNAMIC-CHILD
$('#variant-picker').on('click', '.btn', function () {
    // if any button clicked inside #variant-picker element update data in current_pair variable
    // console.log(this.getAttribute("attribute"));
    current_pair[this.getAttribute("attribute")] = this.getAttribute("value")
    // console.log(current_pair);
    pick_variant()
});

function update_current_pair() {
    // Updata current_pair variable with currentely active buttons.
    active_btns = $(".btn.btn-secondary.active")
    $.each(active_btns, function (index) {
        // console.log(this.children[0].name)
        // console.log(this.getAttribute("attribute"))
        current_pair[this.getAttribute("attribute")] = this.getAttribute("value")
    });
    console.log(current_pair)
}

function pick_variant() {
    // selects variaint by comparing current_pair and attributes object in all variants in data[variants]
    // loop through each variant in data
    found = false
    $.each(data["variants"], function (index) {
        if (JSON.stringify(this["attributes"]) == JSON.stringify(current_pair)) {
            // console.log('found'+this["id"])
            set_variant(this["id"])
            found = true
        }
    });
    console.log(current_pair);

    // disable add to cart button
    if (found == true) {
        $("#buy_now").removeAttr("disabled")
    } else {
        $("#buy_now").attr("disabled", "")
    }
}

function set_variant(variant_id) {
    // set current variant price 
    // price = $("#variant-price-component")[0]
    $("#variant-price-component")[0].innerText = data["variants"][variant_id]["price"]

    // set current_variant id to hidden input for submiting form
    $("#id_variant")[0].value = variant_id
}