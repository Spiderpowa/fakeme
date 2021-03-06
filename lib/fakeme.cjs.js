/*!
 * fakeme v0.4.0
 * https://github.com/PengJiyuan/fakeme
 *
 * Copyright (c) 2018 PengJiyuan
 * Licensed under the MIT license.
 */
'use strict';

var firstName = {
  male: {
    names: [
      'Derrick','Devin','Dick','Dominic','Don','Donahue','Donald','Douglas','Drew','Duke','Duncan','Dunn','Dwight','Dylan','Earl',
      'Ed','Eden','Edgar','Edison','Edmund','Edward','Edwiin','Egbert','Eli','Elijah','Elliot','Ellis','Elmer','Elroy','Elton','Elvis',
      'Emmanuel','Enoch','Eric','Ernest','Eugene','Evan','Everley','Fabian','Felix','Ferdinand','Fitch','Fitzgerald','Ford','Francis',
      'Frank','Franklin','Frederic','Gabriel','Gale','Gary','Gavin','Gene','Geoff','Geoffrey','George','Gerald','Gilbert','Giles',
      'Glenn','Goddard','Godfery','Gordon','Greg','Gregary','Griffith','Grover','Gustave','Guy','Hale','Haley','Hamiltion','Hardy',
      'Harlan','Harley','Harold','Harriet','Harry','Harvey','Hayden','Heather','Henry','Herbert','Herman','Hilary','Hiram','Hobart',
      'Hogan','Horace','Howar','Hubery','Hugh','Hugo','Humphrey','Hunter','Hyman','Ian','Ingemar','Ingram','Ira','Isaac','Isidore',
      'Ivan','Ives','Jack','Jacob','James','Jared','Jason','Jay','Jeff','Jeffrey','Jeremy','Jerome','Jerry','Jesse','Jim','Jo','John',
      'Jonas','Jonathan','Joseph','Joshua','Joyce','Julian','Julius','Justin','Keith','Kelly','Ken','Kennedy','Kenneth','Kent','Kerr',
      'Kerwin','Kevin','Kim','King','Kirk','Kyle','Lambert','Lance','Larry','Lawrence','Leif','Len','Lennon','Leo','Leonard','Leopold',
      'Les','Lester','Levi','Lewis','Lionel','Lou','Louis','Lucien','Luther','Lyle','Lyndon','Lynn','Magee','Malcolm','Mandel','Marcus',
      'Marico','Mark','Marlon','Marsh','Marshall','Martin','Marvin','Matt','Matthew','Maurice','Max','Maximilian','Maxwell','Meredith',
      'Merle','Merlin','Michael','Michell','Mick','Mike','Miles','Milo','Monroe','Montague','Moore','Morgan','Mortimer','Morton','Moses',
      'Murphy','Murray','Myron','Nat','Nathan','Nathaniel','Neil','Nelson','Newman','Nicholas','Nick','Nigel','Noah','Noel','Norman',
      'Norton','Ogden','Oliver','Omar','Orville','Osborn','Oscar','Osmond','Oswald','Otis','Otto','Owen','Paddy','Page','Parker','Patrick',
      'Paul','Philip','Porter','Prescott','Primo','Quennel','Quentin','Quincy','Quinn','Quintion','Rachel','Ralap','Reuben','Rex','Richard',
      'Robert','Robin','Rock','Rod','Roderick','Rodney','Rudolf','Rupert','Ryan','Sam','Sampson','Sandy','Saxon','Scott','Sean','Sebastian',
      'Sid','Sidney','Sidon','Sidon','Silvester','Simon','Spencer','Stan','Stanford','Stanley','Stev','Steven','Steward','Tab','Taylor','Ted',
      'Ternence','Theobald','Theodore','Thomas','Tiffany','Tim','Timothy','Tobias','Toby','Todd','Tom','Tony','Troy','Tyler','Tyrone','Ulysses',
      'Upton','Uriah','Valentine','Valentine','Vic','Victor','Vincent','Virgil','Vito','Vivian','Walter','Ward','Warner','Wayne','Webb','Webster',
      'Wendell','Werner','Wilbur','Will','William','Willie','Winfred','Winston','Wright','Wythe','Yale','York','Yves','Zachary','Ziv'
    ],
    count: 320
  },
  female: {
    names: [
      'Abby','Adalheid','Adelaide','Ailsa','Aimee','Al','Alexandra','Alexis','Alice','Alina','Alisa','Allison','Amanda',
      'Amber','Amy','Anastasia','Andrea','Angela','Angelia','Angelina','Angle','Anita','Ann','Annabelle','Anne','Annie',
      'April','Ariel','Ashley','Aviva','Avivahc','Avivi','Barbara','Barbie','Beata','Beatrice','Beatrix','Becky','Beenle',
      'Belle','Betty','Blanche','Bonnie','Brandon','Brenda','Brendan','Brianna','Bubles','Bunny','Camille','Candice','Carina',
      'Carmen','Carol','Caroline','Carrie','Carry','Cassandra','Cassie','Catherine','Cathy','Charlene','Charlotte','Cher',
      'Cherie','Cherry','Cheryl','Chris','Christal','Christina','Christine','Christy','Cinderella','Cindy','Claudia','Clement',
      'Cloris','Colorfully','Connie','Constance','Cora','Corrine','Croesus','Crystal','Cynthia','Daisy','Daphne','Darcy','Davis',
      'Debbie','Deborah','Debra','Demi','Diana','Dolores','Donna','Doris','Dreamy','Edith','Editha','El','Elaine','Eleanor',
      'Elizabeth','Ella','Ellen','Ellie','Emily','Emma','Estelle','Esther','Eudora','Eva','Eve','Fairy','Fannie','Fanny','Fern',
      'Fiona','Flower','Frances','Francis','Frederica','Frieda','Gillian','Gina','Girl','Gladys','Gloria','Grace','Greenle',
      'Greta','Gwendolyn','Hailey','Hannah','Hebbe','Hebe','Heidi','Helen','Helena','Hellen','Icey','Ingrid','Irene','Iris',
      'Ishara','Ivy','Jacqueline','James','Jamie','Jane','Janet','Janice','Jasmine','Jean','Jennie','Jennifer','Jenny','Jessee',
      'Jessica','Jessie','Jill','Joan','Joanna','Jocelyn','Jodie','John','Josephine','Josie','Joy','Joyce','Jr','Judith','Judy',
      'Julia','Juliana','Julie','June','Kaitlyn','Kerry','Kitty','Kris','Kristine','Krystal','Lareina','Laura','Lawrence','Lena',
      'Liddy','Lilian','Lillian','Linda','Lisa','Liz','Lovely','Lucinda','Lydia','Madison','Maggie','Magical','Manda','Mandy',
      'Margaret','Maria','Melinda','Miranda','Moon','Names','Nancy','Nicole','Nina','Purplegrape','Qearl','Rebecca','Regina',
      'Rose','S','Sabrina','Samantha','Sammy','Samson','Samuel','Sandra','Sandy','Sarah','Sbrina','Scalett','Selina','Selma',
      'Serena','Sharon','Sheila','Shelby','Shelley','Sherry','Sheryl','Shirley','Silverdew','Silvia','Snowhite','Snowy','Sonia',
      'Stacey','Stacy','Star','Stella','Stephanie','Stephen','Sue','Sunny','Susan','Sweety','Temple','Vanessa','Vicky','Victoria',
      'Vivian','Wanda','Wendy','Winnie','Y','Yilia','Yolanda','Yvette','Yvonne','Zoe','Zoey'
    ],
    count: 267
  }
};

var lastName = {
  names: [
    'Adams','Alexander','Allen','Anderson','Bailey','Baker','Barnes','Bell','Bennett','Brooks','Brown','Bryant','Butler','Campbell',
    'Carter','Clark','Coleman','Collins','Cook','Cooper','Cox','Davis','Diaz','Edwards','Evans','Flores','Foster','Garcia','Gonzales',
    'Gonzalez','Gray','Green','Griffin','Hall','Harris','Hayes','Henderson','Hernandez','Hill','Howard','Hughes','Jackson','James',
    'Jenkins','Johnson','Jones','Kelly','King','Lee','Lewis','Long','Lopez','Martin','Martinez','Miller','Mitchell','Moore','Morgan',
    'Morris','Murphy','Nelson','Parker','Patterson','Perez','Perry','Peterson','Phillips','Powell','Price','Ramirez','Reed','Richardson',
    'Rivera','Roberts','Robinson','Rodriguez','Rogers','Ross','Russell','Sanchez','Sanders','Scott','Simmons','Smith','Stewart','Taylor',
    'Thomas','Thompson','Torres','Turner','Walker','Ward','Washington','Watson','White','Williams','Wilson','Wood','Wright','Young'
  ],
  count: 100
};

var names = {
  firstName: firstName,
  lastName: lastName
};

var firstName$1 = {
  male: {
    names: [
      '澄邈','德泽','海超','海阳','海荣','海逸','海昌','瀚钰','瀚文','涵亮','涵煦','涵蓄','涵衍','浩皛','浩波','浩博','浩初','浩宕','浩歌',
      '浩广','浩邈','浩气','浩思','浩言','鸿宝','鸿波','鸿博','鸿才','鸿畅','鸿畴','鸿达','鸿德','鸿飞','鸿风','鸿福','鸿光','鸿晖','鸿朗',
      '鸿文','鸿轩','鸿煊','鸿骞','鸿远','鸿云','鸿哲','鸿祯','鸿志','鸿卓','嘉澍','光济','澎湃','彭泽','鹏池','鹏海','浦和','浦泽','瑞渊',
      '越泽','博耘','德运','辰宇','辰皓','辰钊','辰铭','辰锟','辰阳','辰韦','辰良','辰沛','晨轩','晨涛','晨濡','晨潍','鸿振','吉星','铭晨',
      '起运','运凡','运凯','运鹏','运浩','运诚','运良','运鸿','运锋','运盛','运升','运杰','运珧','运骏','运凯','运乾','维运','运晟','运莱',
      '运华','耘豪','星爵','星腾','星睿','星泽','星鹏','星然','震轩','震博','康震','震博','振强','振博','振华','振锐','振凯','振海','振国',
      '振平','昂然','昂雄','昂杰','昂熙','昌勋','昌盛','昌淼','昌茂','昌黎','昌燎','昌翰','晨朗','德明','德昌','德曜','范明','飞昂','高旻',
      '晗日','昊然','昊天','昊苍','昊英','昊宇','昊嘉','昊明','昊伟','昊硕','昊磊','昊东','鸿晖','鸿朗','华晖','金鹏','晋鹏','敬曦','景明',
      '景天','景浩','俊晖','君昊','昆琦','昆鹏','昆纬','昆宇','昆锐','昆卉','昆峰','昆颉','昆谊','昆皓','昆鹏','昆明','昆杰','昆雄','昆纶',
      '鹏涛','鹏煊','曦晨','曦之','新曦','旭彬','旭尧','旭鹏','旭东','旭炎','炫明','宣朗','学智','轩昂','彦昌','曜坤','曜栋','曜文','曜曦',
      '曜灿','曜瑞','智伟','智杰','智刚','智阳','昌勋','昌盛','昌茂','昌黎','昌燎','昌翰','晨朗','昂然','昂雄','昂杰','昂熙','范明','飞昂',
      '高朗','高旻','德明','德昌','德曜','智伟','智杰','智刚','智阳','瀚彭','旭炎','宣朗','学智','昊然','昊天','昊苍','昊英','昊宇','昊嘉',
      '昊明','昊伟','鸿朗','华晖','金鹏','晋鹏','敬曦','景明','景天','景浩','景行','景中','景逸','景彰','昆鹏','昆明','昆杰','昆雄','昆纶',
      '鹏涛','鹏煊','景平','俊晖','君昊','昆琦','昆鹏','昆纬','昆宇','昆锐','昆卉','昆峰','昆颉','昆谊','轩昂','彦昌','曜坤','曜文','曜曦',
      '曜灿','曜瑞','曦晨','曦之','新曦','鑫鹏','旭彬','旭尧','旭鹏','旭东','浩轩','浩瀚','浩慨','浩阔','鸿熙','鸿羲','鸿禧','鸿信','泽洋',
      '泽雨','哲瀚','胤运','佑运','允晨','运恒','运发','云天','耘志','耘涛','振荣','振翱','中震','子辰','晗昱','瀚玥','瀚昂','瀚彭','景行',
      '景中','景逸','景彰','绍晖','文景','曦哲','永昌','子昂','智宇','智晖','晗日','晗昱','瀚昂','昊硕','昊磊','昊东','鸿晖','绍晖','文昂',
      '文景','曦哲','永昌','子昂','智宇','智晖','浩然','鸿运','辰龙','运珹','振宇','高朗','景平','鑫鹏','昌淼','炫明','昆皓','曜栋','文昂'
    ],
    count: 342
  },
  female: {
    names: [
      '梦琪','忆柳','之桃','慕青','问兰','尔岚','元香','初夏','沛菡','傲珊','曼文','乐菱','痴珊','恨玉','惜文','香寒','新柔','语蓉','海安',
      '夜蓉','涵柏','水桃','醉蓝','春儿','语琴','从彤','傲晴','语兰','又菱','碧彤','元霜','怜梦','紫寒','妙彤','曼易','南莲','紫翠','雨寒',
      '易烟','如萱','若南','寻真','晓亦','向珊','慕灵','以蕊','寻雁','映易','雪柳','孤岚','笑霜','海云','凝天','沛珊','寒云','冰旋','宛儿',
      '绿真','盼儿','晓霜','碧凡','夏菡','曼香','若烟','半梦','雅绿','冰蓝','灵槐','平安','书翠','翠风','香巧','代云','梦曼','幼翠','友巧',
      '听寒','梦柏','醉易','访旋','亦玉','凌萱','访卉','怀亦','笑蓝','春翠','靖柏','夜蕾','冰夏','梦松','书雪','乐枫','念薇','靖雁','寻春',
      '恨山','从寒','忆香','觅波','静曼','凡旋','以亦','念露','芷蕾','千兰','新波','代真','新蕾','雁玉','冷卉','紫山','千琴','恨天','傲芙',
      '盼山','怀蝶','冰兰','山柏','翠萱','恨松','问旋','从南','白易','问筠','如霜','半芹','丹珍','冰彤','亦寒','寒雁','怜云','寻文','乐丹',
      '翠柔','谷山','之瑶','冰露','尔珍','谷雪','乐萱','涵菡','海莲','傲蕾','青槐','冬儿','易梦','惜雪','宛海','之柔','夏青','亦瑶','妙菡',
      '春竹','痴梦','紫蓝','晓巧','幻柏','元风','冰枫','访蕊','南春','芷蕊','凡蕾','凡柔','安蕾','天荷','含玉','书兰','雅琴','书瑶','春雁',
      '从安','夏槐','念芹','怀萍','代曼','幻珊','谷丝','秋翠','白晴','海露','代荷','含玉','书蕾','听白','访琴','灵雁','秋春','雪青','乐瑶',
      '含烟','涵双','平蝶','雅蕊','傲之','灵薇','绿春','含蕾','从梦','从蓉','初丹','听兰','听蓉','语芙','夏彤','凌瑶','忆翠','幻灵','怜菡',
      '紫南','依珊','妙竹','访烟','怜蕾','映寒','友绿','冰萍','惜霜','凌香','芷蕾','雁卉','迎梦','元柏','代萱','紫真','千青','凌寒','紫安',
      '寒安','怀蕊','秋荷','涵雁','以山','凡梅','盼曼','翠彤','谷冬','新巧','冷安','千萍','冰烟','雅阳','友绿','南松','诗云','飞风','寄灵',
      '书芹','幼蓉','以蓝','笑寒','忆寒','秋烟','芷巧','水香','映之','醉波','幻莲','夜山','芷卉','向彤','小玉','幼南','凡梦','尔曼','念波',
      '迎松','青寒','笑天','涵蕾','碧菡','映秋','盼烟','忆山','以寒','寒香','小凡','代亦','梦露','映波','友蕊','寄凡','怜蕾','雁枫','水绿',
      '曼荷','笑珊','寒珊','谷南','慕儿','夏岚','友儿','小萱','紫青','妙菱','冬寒','曼柔','语蝶','青筠','夜安','觅海','问安','晓槐','雅山',
      '访云','翠容','寒凡','晓绿','以菱','冬云','含玉','访枫','含卉','夜白','冷安','灵竹','醉薇','元珊','幻波','盼夏','元瑶','迎曼','水云',
      '访琴','谷波','乐之','笑白','之山','妙海','紫霜','平夏','凌旋','孤丝','怜寒','向萍','凡松','青丝','翠安','如天','凌雪','绮菱','代云',
      '南莲','寻南','春文','香薇','冬灵','凌珍','采绿','天春','沛文','紫槐','幻柏','采文','春梅','雪旋','盼海','映梦','安雁','映容','凝阳',
      '访风','天亦','平绿','盼香','觅风','小霜','雪萍','半雪','山柳','谷雪','靖易','白薇','梦菡','飞绿','如波','又晴','友易','香菱','冬亦',
      '问雁','妙春','海冬','半安','平春','幼柏','秋灵','凝芙','念烟','白山','从灵','尔芙','迎蓉','念寒','翠绿','翠芙','靖儿','妙柏','千凝',
      '小珍','天巧','妙旋','雪枫','夏菡','元绿','痴灵','绮琴','雨双','听枫','觅荷','凡之','晓凡','雅彤','香薇','孤风','从安','绮彤','之玉',
      '雨珍','幻丝','代梅','香波','青亦','元菱','海瑶','飞槐','听露','梦岚','幻竹','新冬','盼翠','谷云','忆霜','水瑶','慕晴','秋双','雨真',
      '觅珍','丹雪','从阳','元枫','痴香','思天','如松','妙晴','谷秋','妙松','晓夏','香柏','巧绿','宛筠','碧琴','盼兰','小夏','安容','青曼',
      '千儿','香春','寻双','涵瑶','冷梅','秋柔','思菱','醉波','醉柳','以寒','迎夏','向雪','香莲','以丹','依凝','如柏','雁菱','凝竹','宛白',
      '初柔','南蕾','书萱','梦槐','香芹','南琴','绿海','沛儿','晓瑶','听春','凝蝶','紫雪','念双','念真','曼寒','凡霜','飞雪','雪兰','雅霜',
      '从蓉','冷雪','靖巧','翠丝','觅翠','凡白','乐蓉','迎波','丹烟','梦旋','书双','念桃','夜天','海桃','青香','恨风','安筠','觅柔','初南',
      '秋蝶','千易','安露','诗蕊','山雁','友菱','香露','晓兰','白卉','语山','冷珍','秋翠','夏柳','如之','忆南','书易','翠桃','寄瑶','如曼',
      '问柳','香梅','幻桃','又菡','春绿','醉蝶','亦绿','诗珊','听芹','新之','易巧','念云','晓灵','静枫','夏蓉','如南','幼丝','秋白','冰安',
      '秋白','南风','醉山','初彤','凝海','紫文','凌晴','香卉','雅琴','傲安','傲之','初蝶','寻桃','代芹','诗霜','春柏','绿夏','碧灵','诗柳',
      '夏柳','采白','慕梅','乐安','冬菱','紫安','宛凝','雨雪','易真','安荷','静竹','代柔','丹秋','绮梅','依白','凝荷','幼珊','忆彤','凌青',
      '之桃','芷荷','听荷','代玉','念珍','梦菲','夜春','千秋','白秋','谷菱','飞松','初瑶','惜灵','恨瑶','梦易','新瑶','曼梅','碧曼','友瑶',
      '雨兰','夜柳','香蝶','盼巧','芷珍','香卉','含芙','夜云','依萱','凝雁','以莲','易容','元柳','安南','幼晴','尔琴','飞阳','白凡','沛萍',
      '雪瑶','向卉','采文','乐珍','寒荷','觅双','白桃','安卉','迎曼','盼雁','乐松','涵山','恨寒','问枫','以柳','含海','秋春','翠曼','忆梅',
      '涵柳','梦香','海蓝','晓曼','代珊','春冬','恨荷','忆丹','静芙','绮兰','梦安','紫丝','千雁','凝珍','香萱','梦容','冷雁','飞柏','天真',
      '翠琴','寄真','秋荷','代珊','初雪','雅柏','怜容','如风','南露','紫易','冰凡','海雪','语蓉','碧玉','翠岚','语风','盼丹','痴旋','凝梦',
      '从雪','白枫','傲云','白梅','念露','慕凝','雅柔','盼柳','半青','从霜','怀柔','怜晴','夜蓉','代双','以南','若菱','芷文','寄春','南晴','恨之'
    ],
    count: 704
  }
};

var lastName$1 = {
  names: [
    '赵','钱','孙','李','周','吴','郑','王','冯','陈','褚','卫','蒋','沈','韩','杨','朱','秦','尤','许','何','吕','施','张','孔','曹',
    '严','华','金','魏','陶','姜','戚','谢','邹','喻','柏','水','窦','章','云','苏','潘','葛','奚','范','彭','郎','鲁','韦','昌','马',
    '苗','凤','花','方','俞','任','袁','柳','酆','鲍','史','唐','费','廉','岑','薛','雷','贺','倪','汤','滕','殷','罗','毕','郝','邬',
    '安','常','乐','于','时','傅','皮','卞','齐','康','伍','余','元','卜','顾','孟','平','黄','和','穆','萧','尹','姚','邵','湛','汪',
    '祁','毛','禹','狄','米','贝','明','臧','计','伏','成','戴','谈','宋','茅','庞','熊','纪','舒','屈','项','祝','董','梁','杜','阮',
    '蓝','闵','席','季','麻','强','贾','路','娄','危','江','童','颜','郭','梅','盛','林','刁','钟','徐','邱','骆','高','夏','蔡','田',
    '樊','胡','凌','霍','虞','万','支','柯','昝','管','卢','莫','经','房','裘','缪','干','解','应','宗','丁','宣','贲','邓','郁','单',
    '杭','洪','包','诸','左','石','崔','吉','钮','龚','程','嵇','邢','滑','裴','陆','荣','翁','荀','羊','於','惠','甄','曲','家','封',
    '芮','羿','储','靳','汲','邴','糜','松','井','段','富','巫','乌','焦','巴','弓','牧','隗','山','谷','车','侯','宓','蓬','全','郗',
    '班','仰','秋','仲','伊','宫','宁','仇','栾','暴','甘','钭','厉','戎','祖','武','符','刘','景','詹','束','龙','叶','幸','司','韶',
    '郜','黎','蓟','薄','印','宿','白','怀','蒲','台','从','鄂','索','咸','籍','赖','卓','蔺','屠','蒙','池','乔','阴','郁','胥','能',
    '苍','双','闻','莘','党','翟','谭','贡','劳','逄','姬','申','扶','堵','冉','宰','郦','雍','却','璩','桑','桂','濮','牛','寿','通',
    '边','扈','燕','冀','郏','浦','尚','农','温','别','庄','晏','柴','瞿','阎','充','慕','连','茹','习','宦','艾','鱼','容','向','古',
    '易','慎','戈','廖','庚','终','暨','居','衡','步','都','耿','满','弘','匡','国','文','寇','广','禄','阙','东','殴','殳','沃','利',
    '蔚','越','夔','隆','师','巩','厍','聂','晁','勾','敖','融','冷','訾','辛','阚','那','简','饶','空','曾','毋','沙','乜','养','鞠',
    '须','丰','巢','关','蒯','相','查','后','荆','红','游','竺','权','逯','盖','益','桓公','万俟','司马','上官','欧阳','夏侯','诸葛',
    '闻人','东方','赫连','皇甫','尉迟','公羊','澹台','公冶','宗政','濮阳','淳于','单于','太叔','申屠','公孙','仲孙','轩辕','令狐','钟离',
    '宇文','长孙','慕容','鲜于','闾丘','司徒','司空','亓官','司寇','仉','督','子车','颛孙','端木','巫马','公西','漆雕','乐正','壤驷','公良',
    '拓跋','夹谷','宰父','谷粱','晋','楚','闫','法','汝','鄢','涂','钦','段干','百里','东郭','南门','呼延','归海','羊舌','微生','岳','帅',
    '缑','亢','况','后','有','琴','梁丘','左丘','东门','西门'
  ],
  count: 484
};

var namesZh = {
  firstName: firstName$1,
  lastName: lastName$1
};

var firstName$2 = {
  male: {
    names: [
      '銳逸','懿恆','浚發','振如','羽驍','奕元','樂豪','抒育','宜桐','常志','涵東','凱琪','潔善','元旭','胤銘','顥溥','悅康','景朗','晰雨',
      '彬陽','翔輝','嵐奕','熙明','政然','聹昕','聖楠','承卓','智宸','葦鴻','新裕','宇諭','鍾藝','逸光','瑞佐','秋雨','智涵','閔軒','雲陽',
      '天御','晨文','久彥','韜偉','昕宜','若彥','宸聞','希煜','成琪','博瑋','東亮','天祥','駿凱','千辰','昕哲','燁盈','憶尚','弘卿','毓函',
      '銳志','灃祺','宇岩','宇霖','益殊','凡寅','毓一','景煦','懿賓','金皓','元戎','展為','長嘯','呈如','晗宸','琀憶','宇賀','海森','德陽',
      '奕柯','祤辰','瀟躍','詩函','皓瀚','羽哲','沐晗','羽千','榮馨','懷億','銘浩','懿昔','程皓','寧昱','柯宇','斌民','曄軒','逸瀟','柯渝',
      '雁煜','桓彬','言泓','子洋'
    ],
    count: 99
  },
  female: {
    names: [
      '碧萱','慧妍','婧琪','璟雯','夢婷','雪怡','可嵐','天瑜','婧琪','媛馨','玥婷','瀅心','雪馨','夢潔','凌薇','美蓮','雅芙','雨婷','姝瑗',
      '穎娟','歆瑤','凌菲','鈺琪','婧宸','靖瑤','瑾萱','佑怡','檀雅','熙雯','鑫蕾','昭雪','倩雪','玉珍','茹雪','正梅','美琳','歡馨','優璇',
      '雨嘉','婭楠','明美','可馨','惠茜','漫妮','香茹','月嬋','嫦曦','妍洋','哲美','哲麗','琮麗','琮艷','柔曼','柔妙','雅歌','雅唱','雅純',
      '雅潔','美如','美意','錦凡','錦心','琇彩','琇云','瀾清','瀾澈','琇晶','琇瑩','如雪','如冰','柔絢','柔麗','雅安','雅逸','如心','如意',
      '吉吉','祥祥','鈴語','鈴音','鍾美','鍾麗','瑞雲','瑞彩','芮雅','芮優','芮欣','芮歡','琇芳','琇芬','琛瑞','琛麗','芮美','芮麗','芮波',
      '芮瀾','瑞靈','瑞芝','瑞錦','瑞繡','玲琳','玲琅','雅秀','雅麗','倩秀','倩美','芮安','芮靜'
      ],
    count: 108
  }
};

var lastName$2 = {
  names: [
    '陳','林','黃','張','李','王','吳','劉','蔡','楊','許','鄭','謝','郭','洪','曾','邱','廖','賴','周','徐','蘇','葉','莊','呂','江',
    '何','蕭','羅','高','簡','朱','鍾','施','游','詹','沈','彭','胡','余','盧','潘','顏','梁','趙','柯','翁','魏','方','孫','張簡','戴',
    '范','歐陽','宋','鄧','杜','侯','曹','薛','傅','丁','溫','紀','范姜','蔣','歐','藍','連','唐','馬','董','石','卓','程','姚','康','馮',
    '古','姜','湯','汪','白','田','涂','鄒','巫','尤','鐘','龔','嚴','韓','黎','阮','袁','童','陸','金','錢','邵'
  ],
  count: 100
};

var namesZhHant = {
  firstName: firstName$2,
  lastName: lastName$2
};

var suffix = {
  list: [
    '@gmail.com','@yahoo.com','@msn.com','@hotmail.com','@aol.com','@ask.com','@live.com','@qq.com',
    '@yeah.net','@googlemail.com','@mail.com','@hotmail.com','@msn.com','@yahoo.com','@gmail.com',
    '@aim.com','@aol.com','@mail.com','@walla.com','@inbox.com','@sina.com','@sohu.com','@yahoo.com.cn',
    '@tom.com','@qq.com','@etang.com','@eyou.com','@x.cn','@chinaren.com','@sogou.com','@citiz.com',
    '@hongkong.com','@ctimail.com','@hknet.com','@netvigator.com','@mail.hk.com','@swe.com.hk','@itccolp.com.hk',
    '@biznetvigator.com','@seed.net.tw','@topmarkeplg.com.tw','@pchome.com.tw','@cyber.net.pk','@libero.it',
    '@webmail.co.za','@xtra.co.nz','@pacific.net.sg','@fastmail.fm','@emirates.net.ae','@eim.ae','@net.sy',
    '@scs-net.org','@mail.sy','@ttnet.net.tr','@superonline.com','@yemen.net.ye','@y.net.ye','@cytanet.com.cy',
    '@aol.com','@netzero.net','@twcny.rr.com','@comcast.net','@warwick.net','@comcast.net','@cs.com',
    '@verizon.net','@bigpond.com','@otenet.gr','@cyber.net.pk','@vsnl.com','@wilnetonline.net','@cal',
    '@rediffmail.com','@sancharnet.in','@ndf.vsnl.net.in','@del','@xtra.co.nz','@yandex.ru','@t-online.de',
    '@netvision.net.il','@bigpond.net.au','@mail.ru','@adsl.loxinfo.com','@scs-net.org','@emirates.net.ae',
    '@qualitynet.net','@zahav.net.il','@netvision.net.il','@xx.org.il','@hn.vnn.vn','@hcm.fpt.vn','@hcm.vnn.vn',
    '@candel.co.jp','@zamnet.zm','@amet.com.ar','@infovia.com.ar','@mt.net.mk','@sotelgui.net.gn','@prodigy.net.mx',
    '@citechco.net','@xxx.meh.es','@terra.es','@wannado.fr','@mindspring.com','@excite.com','@africaonline.co.zw',
    '@samara.co.zw','@zol.co.zw','@mweb.co.zw','@aviso.ci','@africaonline.co.ci','@afnet.net','@mti.gov.na','@namibnet.com',
    '@iway.na','@be-local.com','@infoclub.com.np','@mos.com.np','@ntc.net.np','@kalianet.to','@mail.ru','@dnet.net.id',
    '@sinos.net','@westnet.com.au','@gionline.com.au','@cairns.net.au','@mynet.com','@mt.net.mk','@indigo.ie','@eircom.net',
    '@sbcglobal.net','@ntlworld.com','@nesma.net.sa','@mail.mn','@tiscali.co.uk','@caron.se','@vodamail.co.za','@eunet.at',
    '@spark.net.gr','@swiszcz.com','@club-internet.fr','@walla.com'
  ],
  count: 142
};

var gen = require('random-seed');

var Random = function Random(seed) {
  this.rand = gen();
  if(seed) {
    this.rand.seed(seed);
  }
};

// include max
Random.prototype.random = function random (min, max) {
  return Math.floor(this.rand.random() * (max - min + 1)) + min;
};

Random.prototype.seed = function seed (seed$1) {
  this.rand.seed(seed$1);
};

Random.prototype.randomNumber = function randomNumber (length){
  try {
    // browser
    return crypto.getRandomValues(new Uint32Array(length))
  } catch (e) {
    var list = [];
    for (var i = 0; i < length; i++) {
      list.push(this.rand.random().toString().substring(3, 13));
    }
    return list;
  }
};
Random.prototype.randomLetter = function randomLetter (length) {
    if ( length === void 0 ) length = 10;

  var str = 'abcdefghijklmnopqrstuvwxyz';
  var letters = '';
  for (var i = 0; i < length; i++) {
    letters += str[this.random(0, 25)];
  }
  return letters;
};
Random.prototype.randomId = function randomId (length) {
    if ( length === void 0 ) length = 10;

  var str = '~_0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var id = '';
  for (var i = 0; i < length; i++) {
    id += str[this.random(0, 63)];
  }
  return id;
};

var __opt__ = Object.prototype.toString;

function isObject(obj) {
  return __opt__.call(obj) === '[object Object]';
}
function isArray(obj) {
  return __opt__.call(obj) === '[object Array]';
}
function isNumber(obj) {
  // NaN !== NaN
  return (__opt__.call(obj) === '[object Number]') && obj === obj;
}

// type check and throw error
var langs = ['zh', 'zh-hant', 'en'];
var sexs = ['male', 'female'];
var emailTypes = ['number', 'letter', 'name'];

function check (opts) {
  if (opts && !isObject(opts)) {
    throw 'param option should be an object';
  }
  if (opts && opts.lang && !~langs.indexOf(opts.lang)) {
    throw ("lang should be one of " + (langs.join(',')));
  }
  if (opts && opts.sex && !~sexs.indexOf(opts.sex)) {
    throw ("sex should be one of " + (sexs.join(',')));
  }
  if (opts && opts.type && !~emailTypes.indexOf(opts.type)) {
    throw ("type should be one of " + (emailTypes.join(',')));
  }
  if (opts && opts.count && !isNumber(opts.count)) {
    throw 'count must be a number type';
  }
  if (opts && opts.length && !isNumber(opts.length)) {
    throw 'length must be a number type';
  }
}

var getPrefix = function(opts, random) {
  var prefix;
  if (opts.type === 'name') {
    var list = names.lastName.names
      .concat(names.firstName.male.names)
      .concat(names.firstName.female.names);
    var count = names.lastName.count
      + names.firstName.male.count
      + names.firstName.female.count;
    prefix = list[random.random(0, count - 1)];
  }
  if (opts.type === 'number') {
    prefix = random.randomNumber(1)[0];
  }
  if (opts.type === 'letter') {
    prefix = random.randomLetter();
  }
  return prefix.toLowerCase();
};

var getSuffix = function (opts, random) {
  if (opts.suffix) {
    return opts.suffix;
  } else {
    return suffix.list[random.random(0, suffix.count - 1)];
  }
};

var getEmail = function (opts, random) {
  var emails = [];
  for (var i = 0; i < opts.count; i++) {
    emails.push(getPrefix(opts, random) + getSuffix(opts, random));
  }
  return emails;
};

var sexs$1 = {
  zh: ['男', '女'],
  'zh-haht': ['男', '女'],
  en: ['male', 'female']
};

function getSex (opts, random) {
  return sexs$1[opts.lang][random.random(0, 1)];
}

var Fake = function Fake(opts) {
  check(opts);
  var defaultOpts = {
    lang: 'zh',
    sex: 'male'
  };
  this.opts = Object.assign({}, defaultOpts, opts || {});
  this.namesEn = names;
  this.namesZh = namesZh;
  this.nameZhHant = namesZhHant;
  this.emailSuffix = suffix;
  this.rand = new Random(this.opts.seed);
};

/**
 * 
 * @param {Object} opts
 * 
 * @opts.lang
 * @opts.sex
 * @opts.lastName
 * @opts.count
 */
Fake.prototype.name = function name (opts) {
  check(opts);
  var _defaults = {
    lang: this.opts.lang,
    sex: this.opts.sex,
    count: 1
  };
  var _opts = Object.assign({}, _defaults, opts || {});
  var names$$1 = {
    'zh-hant': namesZhHant,
    zh: namesZh,
    en: names
  };
  var firstNames = names$$1[_opts.lang].firstName[_opts.sex];
  var lastNames = names$$1[_opts.lang].lastName;
  var allNames = [];
  for (var i = 0; i < _opts.count; i++) {
    var firstName = firstNames.names[this.rand.random(0, firstNames.count - 1)];
    var lastName = lastNames.names[this.rand.random(0, lastNames.count - 1)];
    var name = (void 0);
    if (_opts.lastName && ~lastNames.names.indexOf(_opts.lastName)) {
      lastName = _opts.lastName;
    }
    name = _opts.lang === 'en' ? (firstName + " " + lastName) : ("" + lastName + firstName);
    allNames.push(name);
  }
  return allNames;
};

/**
 * 
 * @param {Object} opts
 * 
 * @opts.sex
 * @opts.type - ['number', 'letter', 'name'] default: 'name'
 * @opts.suffix - specify custom suffix
 * @opts.count
 */
Fake.prototype.email = function email (opts) {
  check(opts);
  var _defaults = {
    sex: this.opts.sex,
    type: 'name',
    count: 1
  };
  var _opts = Object.assign({}, _defaults, opts || {});
  return getEmail(_opts, this.rand);
};

/**
 * 
 * @param {Object} opts
 * 
 * @opts.length
 * @opts.count
 */
Fake.prototype.id = function id (opts) {
  check(opts);
  var _defaults = {
    length: 10,
    count: 1
  };
  var _opts = Object.assign({}, _defaults, opts || {});
  var ids = [];
  for (var i = 0; i < _opts.count; i++) {
    ids.push(this.rand.randomId(_opts.length));
  }
  return ids;
};

Fake.prototype.sex = function sex (opts) {
  check(opts);
  var _defaults = {
    lang: this.opts.lang,
    count: 1
  };
  var _opts = Object.assign({}, _defaults, opts || {});
  var sexs = [];
  for (var i = 0; i < _opts.count; i++) {
    sexs.push(getSex(_opts, this.rand));
  }
  return sexs;
};

Fake.prototype.random = function random (list, count) {
    if ( list === void 0 ) list = [];
    if ( count === void 0 ) count = 1;

  var length = list.length;
  var result = [];
  if (isArray(list) && list.length > 0) {
    for (var i = 0; i < count; i++) {
      result.push(list[this.rand.random(0, length - 1)]);
    }
  }
  return result;
};

Fake.prototype.seed = function seed (seed$1) {
  this.rand.seed(seed$1);
};

module.exports = Fake;
