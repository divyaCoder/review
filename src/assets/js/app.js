


$(document).foundation();
$('.borderText1').on('click',function(){
    $('.borderText1').removeClass('active');
    $(this).addClass('active');
});
$('.borderText2').on('click',function(){
    $('.borderText2').removeClass('active');
    $(this).addClass('active');
});
$('.borderText3').on('click',function(){
    $('.borderText3').removeClass('active');
    $(this).addClass('active');
});
$('.borderText4').on('click',function(){
    $('.borderText4').removeClass('active');
    $(this).addClass('active');
});
$("#blueText1").on('click', function(){

    $("#list1").removeClass('noDisplay');
    $("#blueText1").hide();
});
$("#blueText2").on('click', function(){

    $("#list1").addClass('noDisplay');
    $("#blueText2").hide();
    $("#blueText1").show();
});
$("#specification").click(function() {
    $('html,body').animate({
            scrollTop: $("#specificationTop").offset().top},
        'slow');
});
$("#review").click(function() {
    $('html,body').animate({
            scrollTop: $("#reviewTop").offset().top},
        'slow');
});

      $(function () {
    $('#container').highcharts({
        title: {
            text: 'Price Graph in Flipkart',
            x: -20 //center
        },
        subtitle: {
            text: 'price (Rs.)',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});
$('.borderText').on('click',function(){
   $('.borderText').removeClass('active');
    $(this).addClass('active');
});
$("#blueText1").on('click', function(){
	$("#list1").removeClass('noDisplay');
	$("#blueText1").hide();
});
$("#blueText2").on('click', function(){
    $("#list1").addClass('noDisplay');
	$("#blueText2").hide();
	$("#blueText1").show();
});
$("#blueText3").on('click', function(){
    $("#list2").removeClass('noDisplay');
    $("#blueText3").hide();
});
$("#blueText4").on('click', function(){
    $("#list2").addClass('noDisplay');
    $("#blueText4").hide();
    $("#blueText3").show();
});
$("#showDataMore").on('click', function(){
    $("#link4").removeClass('noDisplay');
    $("#showDataMore").hide();
    $("#showDataLess").show();
})

$("#showDataLess").on('click', function(){
    $("#link4").addClass('noDisplay');
    $("#showDataLess").hide();
    $("#showDataMore").show();
});
$("#showReviewMore").on('click', function(){
    $("#link-5").removeClass('noDisplay');
    $("#showReviewMore").hide();
    $("#showReviewLess").show();
})

$("#showReviewLess").on('click', function(){
    $("#link-5").addClass('noDisplay');
    $("#showReviewLess").hide();
    $("#showReviewMore").show();
});
$("#specification").click(function() {
    $('html,body').animate({
        scrollTop: $("#specificationTop").offset().top},
        'slow');
});
$("#review").click(function() {
    $('html,body').animate({
        scrollTop: $("#reviewTop").offset().top},
        'slow');
});
$("#updateReview").click(function(){
	$("#submitReview").hide(100);
	$("#writeReview").show();
});
$("#writeReview").click(function(){
	$("#submitReview").show();
	$("#writeReview").hide();
});
$(".expand").click(function(){
    $(".expand").show();
    $(".reviewData").removeClass('expandReview');
    $(this).hide();
    $(this).prev().addClass('expandReview');
});
$("#search-enable").click(function(){
    $(this).hide();
    $(this).prev().removeClass('noDisplay');
    $(this).next().removeClass('noDisplay');
});
$('#sliderOutput5').on('change', function(){

    alert(': on change slider event started' );


});



