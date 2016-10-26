var data = listData[listID];

(function addEl(data) {
  for (var i = 0; i < data.length; i++) {
    var cardGroup = getCardGroup(data[i]);
    $(cardGroup).appendTo('.listpage-goods-list');
  }
})(data);

function getCardGroup(data) {
  var msg = "";
  var price = 0;
  if (data.sales*1 >= data.enough_number*1) {
    msg = '已售出' + data.sales + '件,立即抢购!'
  }else {
    msg = '已售出' + data.sales + '件,差' + data.enough_number + '件成团'
  }
  msg = '立即抢购!'
  if (data.shop_price*1 > 100) {
    price = data.shop_price * 1.1
  }else{
    price = data.shop_price * 1.2
  }
  var renderData = {
    data : data,
    sale_msg : msg,
    price : parseFloat((price).toFixed(2)),
    list_id : listID
  }
  var template = $('#template').html();
  var html = ejs.render(template, renderData);
  return html;
}
