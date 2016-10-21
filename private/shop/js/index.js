var data = cateData.cateList;
(function addEl(data) {
  for (var i = 0; i < data.length; i++) {
    data[i].special_extra_name = data[i].special_extra_name.replace('，','');
    data[i].special_description = data[i].special_description.split('\r\n');
    var cardGroup = getCardGroup(data[i]);
    $(cardGroup).appendTo('.list');
  }
})(data);

function getCardGroup(data) {
  var renderData = {
    data : data
  };
  var template = $('#template').html();
  var html = ejs.render(template, renderData);
  return html;
}

$(function () {
  var system = {
       win: false,
       mac: false
   };
   //检测平台
   var p = navigator.platform;
   system.win = p.indexOf("Win") == 0;
   system.mac = p.indexOf("Mac") == 0;
   if (system.win || system.mac) {
     $('.header div').click(function () {
       if (!$(this).hasClass('active')) {
         $(this).addClass('active').siblings().removeClass('active');
         if ($('.header .active').text().indexOf('抢购') > -1) {
           $('.goods-list').show().siblings().hide();
         }else{
           document.body.scrollTop = 0;
           $('.goods-list').hide().siblings().show();
         }
       }
     })
   }else{
     $('.header div').tap(function () {
       if (!$(this).hasClass('active')) {
         $(this).addClass('active').siblings().removeClass('active');
         if ($('.header .active').text().indexOf('抢购') > -1) {
           $('.goods-list').show().siblings().hide();
         }else{
           $('.goods-list').hide().siblings().show();
         }
       }
     })
   }
});
