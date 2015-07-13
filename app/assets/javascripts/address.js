$(document).ready(function() {

var billingZipcodeField = $('#order_bill_address_attributes_zipcode');
var shippingZipcodeField = $('#order_ship_address_attributes_zipcode');
var ziptasticUrl = "https://ZiptasticAPI.com/"

billingZipcodeField.on("input", function(data){
  getCityStateCountry("bill", data);
})

shippingZipcodeField.on("input", function(data){
  getCityStateCountry("ship", data);
})

function getCityStateCountry(section, data){
  if ($('#order_' + section + '_address_attributes_zipcode').val().length == 5){
    var url = ziptasticUrl + data.target.value
    $.get(url, function(data){
      var returnObj = JSON.parse(data);
      if (!returnObj.error){
        var city = capitalizeFirstLetter(returnObj.city);
        var state = abbrState(returnObj.state);
        var country = returnObj.country;
        $('#order_' + section + '_address_attributes_city').val(city);
        $('#order_' + section + '_address_attributes_state_id option').filter(function() {
            return this.text == state;
        }).prop('selected', true);
        if (country != "US"){
          $('#order_' + section + '_address_attributes_country_id option').filter(function() {
              return this.text == country;
          }).prop('selected', true);
        }
      }
    })
  };
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function abbrState(input){

    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    input = input.toUpperCase();
    for(i = 0; i < states.length; i++){
        if(states[i][1] == input){
            return(states[i][0]);
        }
    }
  }

});