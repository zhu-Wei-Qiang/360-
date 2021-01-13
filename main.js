window.onload = init;
 
var product;
function init(){

  product1 = $('.product1').ThreeSixty({
	totalFrames: 52,   //图片个数，一定要与图片个数一致
	endFrame: 52,
	currentFrame: 1,
	imgList: '.threesixty_images',
	progress: '.spinner',
	imagePath:'img/',  //图片所在路径，最后一定要有/。如果图片有前缀，也可以写在/后
	filePrefix: '',
	ext: '.jpg',
	height: 667,
	width: "100%",
	navigation: true,
	disableSpin: false
  });

}

// $(window).ready(function(){
// 	$('.threesixty').ThreeSixty({
// 							totalFrames: 52,//图片的总数
// 							endFrame: 52,
// 							currentFrame: 1,//初始化时现实的第几个元素
// 							imgList: '.threesixty_images',//显示图片的父级div
// 							progress: '.spinner',//显示进度的div
// 							imagePath: 'img/',//图片的路径
// 							filePrefix: '',//用到的图片的前缀名称
// 							ext: '.jpg',//存放的图片的后缀名（要一致）
// 							height: "60%",//显示区域的高度
// 							width: "100%",//显示区域的宽度
// 							navigation: true,//是否显示导航条（可以进行的操作：上一步   下一步   开始自动旋转）
// 							disableSpin: false
// 						});
// });