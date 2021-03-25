$(function () {
	var list = [
		{
			ahref: 'http://17yichi.com.tw/m/',
			imgsrc: 'img/c1.png',
			customername: '一齊和牛燒肉',
		},
		{
			ahref: 'http://ws013.so-buy.com/m/',
			imgsrc: 'img/c2.png',
			customername: '欣安物業',
		},
		{
			ahref: 'http://ws016.so-buy.com/m/',
			imgsrc: 'img/c3.png',
			customername: '集研生醫',
		},
		{
			ahref: 'http://hero114.so-buy.com/m/',
			imgsrc: 'img/c4.png',
			customername: '雙龍汽車',
		},
		{
			ahref: 'https://www.tact.com.tw/m/',
			imgsrc: 'img/c5.png',
			customername: '台灣拓人',
		},
		{
			ahref: 'http://www.menard.com.tw/m/',
			imgsrc: 'img/c6.png',
			customername: '美伊娜多',
		},
		// {
		// 	ahref: 'http://hero160.so-buy.com/m/',
		// 	imgsrc: 'img/c7.png',
		// 	customername: '忻瑜珈',
		// },
		// {
		// 	ahref: 'http://shop54.591red.com/',
		// 	imgsrc: 'img/c8.png',
		// 	customername: '丽芙苑',
		// },
		{
			ahref: 'http://hero087.so-buy.com/m/',
			imgsrc: 'img/c9.png',
			customername: '臺灣福建總商會',
		},
		{
			ahref: 'http://www.trymedia.tw/m/home.php',
			imgsrc: 'img/c10.png',
			customername: '試媒體',
		},
		{
			ahref: 'http://hero029.so-buy.com/m/home.php',
			imgsrc: 'img/c12.png',
			customername: '隆電',
		},
		{
			ahref: 'http://www.mstcl.com.tw/',
			imgsrc: 'img/c13.png',
			customername: '德軒科技',
		},
		{
			ahref: 'https://hefongcar.github.io/index/',
			imgsrc: 'img/c14.jpg',
			customername: '合峰汽車',
		},

	];

	$.each(list, function (index, obj) {
		var crateArea = $("<div data-aos='zoom-in' data-aos-easing='linear' data-aos-delay='500'>").addClass("-card");
		var imgArea = $("<div>").addClass("-img");
		var imgClickArea = $("<a target='_blank'>").attr("href", obj.ahref);
		var clickImg = $("<img>").attr("src", obj.imgsrc);
		var hoverArea = $("<div>").addClass("-hover");
		var hoverSpan = $("<span>").text("view");
		var listNameArea = $("<div>").addClass("-name").text(obj.customername);
		// 組合
		hoverSpan.appendTo(hoverArea);
		imgClickArea.append(clickImg, hoverArea).appendTo(imgArea);
		crateArea.append(imgArea, listNameArea).appendTo($("#cardlist"));
	})
})