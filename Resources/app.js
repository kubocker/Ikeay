// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// DB
var db = Titanium.Database.open('ikezawa');

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'写真集',
    window:win1
});
//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'じょうほう',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'情報(URL)',
    window:win2
});
//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'デーブルビュー',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'フォトフレーム',
    window:win3
});

/* -- win1 -- */
var image1 = Titanium.UI.createImageView({
	image: 'ikeay_image1.png',
	//width:'200',
	//height:'200'
});
var image2 = Titanium.UI.createImageView({
	image: 'ikeay_image2.png',
	//width:'200',
	//height:'200'
});
var image3 = Titanium.UI.createImageView({
	image: 'ikeay_image3.png',
	//width:'200',
	//height:'200'
});
var image4 = Titanium.UI.createImageView({
	image: 'ikeay_image4.png',
	//width:'200',
	//height:'200'
});
var image5 = Titanium.UI.createImageView({
	image: 'ikeay_image5.png',
	//width:'200',
	//height:'200'
});
var image6 = Titanium.UI.createImageView({
	image: 'ikeay_image6.png',
	//width:'200',
	height:'200'
});
var image7 = Titanium.UI.createImageView({
	image: 'ikeay_image7.png',
	//width:'200',
	//height:'200'
});
var image8 = Titanium.UI.createImageView({
	image: 'ikeay_image8.png',
	//width:'200',
	//height:'200'
});
var image9 = Titanium.UI.createImageView({
	image: 'ikeay_image9.png',
	//width:'200',
	//height:'200'
});
var image10 = Titanium.UI.createImageView({
	image: 'ikeay_image10.png',
	//width:'200',
	//height:'200'
});

var scrollView = Titanium.UI.createScrollableView({
	views:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10],
	showPagingControl: true,
	pagingControlHeight: 30,
	maxZoomScale:2.0
});
win1.add(scrollView);


/* -- win2 -- */
var IkezawaData = [
{name:'Wikipedia', image:'ikeay_url1.png', url:'http://ja.wikipedia.org/wiki/%E6%B1%A0%E6%BE%A4%E3%81%82%E3%82%84%E3%81%8B'},
{name:'Ameba Blog', image:'ikeay_url2.png', url:'http://ameblo.jp/ikezawa-ayaka/'},
{name:'Facebook Page', image:'ikeay_url3.png', url:'https://www.facebook.com/ayaka.rb'},
{name:'Twitter', image:'ikeay_url4.png', url:'http://twitter.com/ikeay'}
];

var IkezawaData2 =[];
IkezawaData2.push({id:1, name:'Wikipedia', image:'ikeay_url1.png', url:'http://ja.wikipedia.org/wiki/%E6%B1%A0%E6%BE%A4%E3%81%82%E3%82%84%E3%81%8B'});
IkezawaData2.push({id:2, name:'Ameba Blog', image:'ikeay_url2.png', url:'http://ameblo.jp/ikezawa-ayaka/'});
IkezawaData2.push({id:3, name:'Facebook Page', image:'ikeay_url3.png', url:'https://www.facebook.com/ayaka.rb'});
IkezawaData2.push({id:4, name:'Twitter', image:'ikeay_url4.png', url:'http://twitter.com/ikeay'});

// tableViewRowList
var tableViewIkezawaList = [];
for (var i = 0; i < IkezawaData.length; i++) {
	var image = Titanium.UI.createImageView({
		image: IkezawaData[i].image,
		width: '60dp',
		height:'60dp',
		top:'10dp',
		left:'10dp'
	});
	var label = Titanium.UI.createLabel({
		text: IkezawaData[i].name,
		font: {fontSize:'16dp',fontWeight:'bold'},
		color:'#569',
		left:'80dp'
	});
	// tableViewRow
	var tableViewIkezawa = Titanium.UI.createTableViewRow({
		height: '80dp',
		hasChild: true,
		url: IkezawaData[i].url
	});
	tableViewIkezawa.add(image);
	tableViewIkezawa.add(label);
	
	tableViewIkezawaList.push(tableViewIkezawa);
}
var ikezawaView = Titanium.UI.createTableView({
	data: tableViewIkezawaList
});

ikezawaView.addEventListener('click', function(e) {
	var webview = Titanium.UI.createWebView({
		url : e.row.url,
		width : '100%',
		height : '100%',
		zIndex : 1
	});
	var w = Titanium.UI.createWindow({
		title : 'URL',
		backgroundColor : 'white'
	});
	var closeButton = Titanium.UI.createButton({
		title:'閉じる',
		//top:450,
		bottom:'0%',
		width:'100%',
		opacity:0.6,
		zIndex:2
	});
	closeButton.addEventListener('click',function(){
		w.close();
		Titanium.include('app.js');
	});
	w.add(webview);
	w.add(closeButton);
	w.open();
});
win2.add(ikezawaView);

/* -- win3 -- */
var ImageData = [
{id:1, image:'ikeay_image1.png'},
{id:2, image:'ikeay_image2.png'},
{id:3, image:'ikeay_image3.png'},
{id:4, image:'ikeay_image4.png'},
{id:5, image:'ikeay_image5.png'},
{id:6, image:'ikeay_image6.png'},
{id:7, image:'ikeay_image7.png'},
{id:8, image:'ikeay_image8.png'},
{id:9, image:'ikeay_image9.png'},
{id:10, image:'ikeay_image10.png'}
];
// tableViewRowList
var List = [];
for (var i = 0; i < IkezawaData.length; i++) {
	var image = Titanium.UI.createImageView({
		image: IkezawaData[i].image,
		width: '60dp',
		height:'60dp',
		top:'10dp',
		left:'10dp'
	});
	var label = Titanium.UI.createLabel({
		text: IkezawaData[i].name,
		font: {fontSize:'16dp',fontWeight:'bold'},
		color:'#569',
		left:'80dp'
	});
	// tableViewRow
	var tableViewIkezawa = Titanium.UI.createTableViewRow({
		height: '80dp',
		hasChild: true
	});
	tableViewIkezawa.add(image);
	tableViewIkezawa.add(label);
	
	tableViewIkezawaList.push(tableViewIkezawa);
}
var ikezawaView = Titanium.UI.createTableView({
	data: tableViewIkezawaList
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
