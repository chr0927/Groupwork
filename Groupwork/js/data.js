var hobbyData = {//全部数据
/*		date : function(arr,n){ //格式化时间。
      
			var s = '';

			var n = n || 0;
			var aStr = ['年月日时分秒','-- ::','// ::'];

			if(n>aStr.length-1)n=aStr.length-1;

			for(var i=0; i<arr.length; i++){
				s += arr[i] + aStr[n].charAt(i);
				if(i==2&&n==0)s += ' ';
			}

			if(s.charAt(s.length-1) == '-'||s.charAt(s.length-1) == '/'){
				s = s.substring(0,s.length-1);
			}

			return s;

		},*/
		//影评
		film:[
			{
				name:'变形金刚：最后的骑士',
				txt:'《变形金刚：最后的骑士》真不知道大家想对这个电影要求多高 换一角度来看制作这个电影也需要很多用心和投入 如果非想看剧情好拍摄好的觉得这个片子不好 就不要来看 去看那些奥斯卡提名 看那些艺术性高的电影去 非要看完一个商业性大片之后乱吐槽 倒不如换个角度来看 从电影拍摄和特效方面还是可以有个及格分吧 情怀分',
				sj:['2017','06','23']
			},
			{
				name:'加勒比海盗5:死无对证',
				txt:'《加勒比海盗5：死无对证》特效非常不错，能在有生之年看到黑珍珠号重返大海真是鸡冻人心，整体来说第五部比第四部好很多，不过剧本确实一般，真想看伊丽莎白拖着儿子搭上杰克救威尔，因为巴博萨的女儿太没存在感了，全程不如结局亮眼，加勒比三人帮再聚首特催泪，情怀满满，刷完尾幕等彩蛋的都是真爱！',
				sj:['2017','05','27']
			},
			{
				name:'速度与激情8',
				txt:'《速度与激情8》简直太拼了，注定又要席卷全球。全世界荷尔蒙最旺盛的三个肌肉光头男，齐聚银幕，从赤道飙到北极圈。哈瓦拉街头追车，联邦监狱集体越狱，柏林大摆锤逆袭，纽约无人驾驶车队，天眼网络密布，冰原偷袭潜水艇，肉搏车速加高科技，令每场戏都肾上腺飙升。明星阵容无与伦比，又是温情大结局，后继有望。',
				sj:['2017','04','14']
			},
			{
				name:'夜行者',
				txt:'《夜行者》完全黑化到失真的角色和剧情，驶入空无一人的LA夜色，真是“罪恶之城”啊。把现在的电视新闻网、不健康的合约雇佣关系、甚至“实习生”制度，讽刺得体无完肤。虽然由于人物性格太单向导致剧情可以预见，但全片绝对紧张刺激又不失黑色幽默，Jake演得太好了！为了他我也一定要力荐！',
				sj:['2014','09','05']
			},
			{
				name:'夜行者',
				txt:'《夜行者》完全黑化到失真的角色和剧情，驶入空无一人的LA夜色，真是“罪恶之城”啊。把现在的电视新闻网、不健康的合约雇佣关系、甚至“实习生”制度，讽刺得体无完肤。虽然由于人物性格太单向导致剧情可以预见，但全片绝对紧张刺激又不失黑色幽默，Jake演得太好了！为了他我也一定要力荐！',
				sj:['2014','09','05']
			},
			{
				name:'盗梦空间',
				txt:'《盗梦空间》是一部影迷一定不要错过的电影，就像帝国杂志说的，这部影片就像是《黑客帝国》加上《纽约提喻法》，反物理学的探讨、精彩的动作场面、具有冲击力的情感、以及莱昂纳多令人吃惊的表演，都让人沉迷不已，这是诺兰电影的一个全新领域。',
				sj:['2010','09','01']
			},
			{
				name:'彗星来的那一夜',
				txt:'《彗星来的那一夜》「量子力学的平行多宇宙学说，在交叉小径的花园里总会有一条路，让人们在生命中的每一个节点都得到幸福。 在每一次铭心刻骨的选择里，总有一个你选对了路 。在茫茫的恒河沙数的宇宙里，总有一个你，终生幸福。」所以，最后我选择了，留在那一个看似最好的版本，不惜干掉另一个“我”。',
				sj:['2013','09','19']
			}
		],
		//游记
		travel:[				
			{
				name:'厦门',
				txt:'厦门，别称鹭岛， 简称鹭， 福建省省辖市，东南沿海重要的中心城市、港口及风景旅游城市。[1]  厦门位于福建省东南端，西接漳州， 北邻南安和晋江，东南与大小金门和大担岛隔海相望，通行闽南语，是闽南地区的主要城市，与漳州、泉州并称厦漳泉闽南金三角经济区。',
				sj:['2016','10','19']
			},
			{
				name:'喀纳斯',
				txt:'人们总渴望说走就走的旅行，试图逃离办公室的压抑，逃离城市的雾霾天气，逃离现实的不堪一击，但他们不知道，背负着情绪和贪欲，天涯海角都是牢笼，风景只是相机中的记忆，内心依然无处释放。真正的远行，不在于目的地，而是内心，能超越情绪和贪欲在闹市也是堂。',
				sj:['2015','08','23']
			},
			{
				name:'九寨沟',
				txt:'这是一个被称为“人间仙境”得地方，因为有九个藏族村寨坐落在这片高山湖泊群中，因而被称为“九寨沟”。蓝天、白云、雪山、森林、湖泊组合成神妙、奇幻、幽美的自然风光，美的让人心醉；神妙奇幻的翠海、飞瀑、彩林、雪峰和迷人的藏族风情让人流连忘返。早在几年前，就听闻美丽的九寨沟实在是人间的天堂，一直很想很想去，碍于时间和传说中昂贵的旅行开销一直没能实现这个梦想！终于，在2013年的一个深秋，终于踏上了让我魂牵梦萦了许久的九寨的旅途。出发前也曾网上搜罗了无数好游记及攻略， 一直想整理整理写篇最全最实用的旅游攻略， 每次都偷懒拖拖。。。现在终于耐不住了， 决定每天抽空写一点， 取其精华，去其糟粕，立志求精！',
				sj:['2015','07','13']
			},
			{
				name:'三亚',
				txt:'其实很早就想来三亚了，因为中国的海岸线我们从北到南基本上都走遍了，感觉海滨风光都差不多，没有什么特别让人惊喜的，而海南岛一直没有去过，一方面是由于传说中三亚糟糕的旅游环境和她碧海蓝天的美景一样有名，让人心里既充满了渴望，又有很多的不安。其实最主要的还是海南岛离北京太远，我们又喜欢自驾，所以海南的行程一拖又拖。',
				sj:['2014','12','20']
			},
			{
				name:'武当山',
				txt:'纪录片可以很快的让我学习到武当山的历史、文化，可以更深入的了解我想要看的武当山应该是什么，推荐的纪录片有:《问道武当》、《世界遗产在中国》、《太极武当》等等。 但是所有有关武当山，道教的故事，都是零散的，并没有一个对武当山完整的历史、规划建筑、文化、及与道 教相交融的介绍，我需要将这些零散的碎品拼接在一起，这样才能真正的去了解武当山。',
				sj:['2014','04','03']
			}
		],
		//健身
		fitness:[
			{
				name:'饮食原则',
				txt:'对需要减脂的人而言，再努力的训练也可能毁在一顿你曾经最爱的薯条、汉堡、汽水上，所以减脂一定要控制热量摄入，参考食物GI值，甚至需要做到用称称取食物。建议将你每天的热量摄入控制在比消耗热量低300大卡左右，这样一周能减掉的体重（不是脂肪）是1kg。（消耗热量=基础代谢+运动额外消耗）而增肌的人，尤其是瘦子们，如果你想从一个消瘦的人变成一个壮汉，你需要做的唯一一件事，就是吃！如果你吃的不够，那么给身体提供的热量和营养物质就不够，也就不可能会增重！同样的道理，只要你每天摄入的食物热量比消耗的热量高300大卡，那么一周也就会多摄入2100大卡≈1kg体重。',
				sj:['2015','03','10']
			},
			{
				name:'蛋白质来源',
				txt:'优质蛋白质的来源包括：牛奶——容易吸收、常见，也是最常用的;鸡蛋——天然食品中最优秀的高蛋白食品，一个全蛋配三个蛋清即可;去皮鸡胸肉——优质高蛋白食物，价格也比较亲民;牛后腿肉、牛排等瘦牛肉——脂肪含量比鸡胸肉略高，但也是非常不错的选择;金枪鱼罐头——价格不贵，脂肪含量低',
				sj:['2015','04','20']
			},
			{
				name:'碳水化物',
				txt:'优质碳水建议补充：燕麦——热量和GI值偏低，消化吸收缓慢，饱腹感时间长;水果——所有的水果都是不错的选择，但水果的消化吸收速度比燕麦等符合碳水化合物更快，通常在上午及力量训练前后摄入;蔬菜——如果你不知道摄入什么碳水，多吃点蔬菜准没错的。含糖量比水果更低，更能补充膳食纤维;红薯或山药——消化吸收缓慢，饱腹感强烈;糙米——复合碳水化合物，消化吸收速度缓慢',
				sj:['2016','01','03']
			}
		]
}
