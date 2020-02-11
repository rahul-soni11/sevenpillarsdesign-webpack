var $ = require("jquery");

// json Data provided by backend, 
var data = {}

// key value pair of attribute:id
var current_pair = {}

window.onload = $(document).ready(function () {

    // select #variant-picker element
    const element = document.getElementById('variant-picker');

    // if element exist 
    if (element != null) {
        // Get variant data.
        data = JSON.parse(element.getAttribute('data-variant-picker-data'))

        // initially set first variant as activated
        const key = Object.keys(data.variants)[0]

        current_pair = JSON.parse(JSON.stringify(data.variants[key].attributes))
        set_variant(key)

        // generate variant picker html notes for each attribute
        $.each(data["variantAttributes"], function () {
            element.appendChild(get_variantFragment(this["pk"], this["name"], this["values"]));
        });
    }
});


// generates label / input nodes and return fragment 
function get_variantFragment(attribute_id, name, values) {
    var fragment = document.createDocumentFragment()

    // Variant Name with p tag
    var p = document.createElement('p')
    p.textContent = name
    p.setAttribute('class', 'mt-4 mb-3')
    fragment.appendChild(p)

    //variant selector div
    var div = document.createElement('div')
    div.setAttribute('class', 'btn-group btn-group-toggle')
    div.setAttribute('data-toggle', 'buttons')

    for (value of values) {
        var label = document.createElement('label')

        //first variant attribute active
        if (current_pair[attribute_id] == value.pk) {
            label.setAttribute('class', 'btn btn-secondary active')
        }
        else {
            label.setAttribute('class', 'btn btn-secondary')
        }
        label.textContent = value.name
        label.setAttribute('name', attribute_id)
        label.setAttribute('id', value.pk)

        var input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('name', attribute_id)
        input.setAttribute('id', value.pk)

        label.appendChild(input)
        div.appendChild(label)
    }


    fragment.appendChild(div)


    return fragment
}


// The .on() method is used to delegate events to elements, dynamically added or already present in the DOM:
// STATIC-PARENT     on  EVENT    DYNAMIC-CHILD
$('#variant-picker').on('click', '.btn', function () {
    // if any button clicked inside #variant-picker element update data in current_pair variable
    attribute = this.getAttribute('name');
    value = this.getAttribute('id');
    current_pair[attribute] = value
    console.log(current_pair)
    pick_variant()
});

function pick_variant() {
    // selects variaint by comparing current_pair and attributes object in all variants in data[variants]
    // loop through each variant in data
    found = false

    $.each(data["variants"], function (index) {
        if (JSON.stringify(this["attributes"]) === JSON.stringify(current_pair)) {
            set_variant(this["id"])
            found = true
            return false;
        }
    });

    // disable add to cart button
    if (found == true) {
        $("#product-addtocart-button").removeAttr("disabled")
    } else {
        $("#product-addtocart-button").attr("disabled", "")
    }
}


function set_variant(variant_id) {
    // set current variant price 
    document.getElementById('variant-price-component').innerText = data["variants"][variant_id]["price"]

    // set current_variant id to hidden input for submiting form
    document.getElementById('id_variant').value = variant_id
}