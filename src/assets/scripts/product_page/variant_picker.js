var $ = require("jquery");

// json Data provided by backend, 
var data = {}

// holds unique key of currentely selected variant
var current_variant_key = {}

var current_variant_attributes = {}

var element = null

window.onload = $(document).ready(function () {

    // select #variant-picker element
    element = document.getElementById('variant-picker');

    // if element exist 
    if (element != null) {
        // Get variant data.
        data = JSON.parse(element.getAttribute('data-variant-picker-data'))

        // initially set first variant as activated
        current_variant_key = Object.keys(data.variants)[0]
        current_variant_attributes = data.variants[current_variant_key].attributes
        set_variant(current_variant_key)

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

        // first variant attribute active
        if (data.variants[current_variant_key].attributes[attribute_id] == value.pk) {
            label.setAttribute('class', 'btn btn-secondary active')
        } else {
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
    // if any button clicked inside #variant-picker element update the current_pair variable
    attribute_id = this.getAttribute('name');
    value = this.getAttribute('id');
    current_variant_attributes[attribute_id] = value

    uk = []
    for (const [key, value] of Object.entries(current_variant_attributes)) {
        uk.push(key)
        uk.push(value)
    }
    // console.log(uk.join(''))
    pick_variant(uk.join(''))
});

function pick_variant(variant_Uk) {
    // selects variaint by comparing current_pair and attributes object in all variants in data[variants]
    // loop through each variant in data
    found = false
    cartButton = document.getElementById('product-addtocart-button')
    // check variant exist
    if (data.variants.hasOwnProperty(variant_Uk)) {
        set_variant(variant_Uk)
        // check variant availability
        if (data.variants[variant_Uk].availability) {
            found = true
        } else {
            // variant out of stock
            cartButton.innerText = 'Variant Out of Stock'
        }
    } else {
        // variant not exist
        // set price to null
        cartButton.innerText = 'Variant not available'
    }

    // disable add to cart button
    if (found == true) {
        cartButton.removeAttribute("disabled")
        cartButton.textContent = 'Add to Cart'

    } else {
        cartButton.setAttribute("disabled", "")
    }
}


function set_variant(variant_id) {
    // set current variant price 
    document.getElementById('variant-price-component').innerText = "₹ ".concat(data["variants"][variant_id]["price"])

    // set current_variant id to hidden input for submiting form
    document.getElementById('id_variant').value = data.variants[variant_id].id
}