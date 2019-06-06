import { BarFinder } from './bar-finder-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#barSearch').submit(function(event) {
    event.preventDefault();
    $('#showBars').text("");
    let city = $('#city').val();
    let state = $('#state').val();
    $('#city').val("");
    $('#state').val("");
    let barFinder = new BarFinder;
    let promise = barFinder.findBar(city, state);
    promise.then(function(response) {
      let body = JSON.parse(response);
      if (body.length === 0)
      {
        $('#showBars').text(`There are no bars in ${city} ${state}.`)
      } else {
        body.forEach(function(bar) {
          $('#showBars').append(`<strong>${bar.name}</strong><br> ${bar.street}<br>${bar.city}, ${bar.state}, ${bar.postal_code}<br> ${bar.phone}<br> <a href='${bar.website_url}'>${bar.website_url}</a><hr>`)
        }, function(error) {
          $('#showError').text(`There was an error processing your request: ${error.message}`);
        })
      }
    })
  })
});
