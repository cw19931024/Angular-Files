# Angular-Files
使用Angular1x为公司做的文件上传组件。

## 插件详解
```
scope.FilesSeeting={
    FilesName:'文件上传',               //插件标题名
    FilesStart:'选择文件',              //上传文件按钮名
    IsFilesType:false,                 //文件类型是否必填
    FilesTitle:[                       //上传table列表名 
        {name:'文件名',className:'',width:'',algin:''},
        {name:'文件类型',className:'',width:'80',algin:'center'},
        {name:'文件大小',className:'',width:'80',algin:'center'},
        {name:'操作',className:'',width:'55',algin:'center'},
    ],
    FilesBtn:['上传','取消'],           //文件操作按钮名
    FilesType:[],                     //文件类型数组
    FilesUrl:'test.html',             //文件API地址
    FilesParams:{},                   //文件上传附带参数
    FilesError:null,                  //错误回调方法
    FilesSuccess:null                 //成功回调方法
}
```

 #### FilesTitle 
 ```
 {name:'文件名',className:'',width:'',algin:''},
 ```
 #### FilesType
 ```
 FilesType: {
            is: true,
            list: [{
                    name: '户型图',
                    id: 1
                },
                {
                    name: '内景图',
                    id: 2
                },
                {
                    name: '外景图',
                    id: 3
                }
            ]
        },
 ```

#### 参数实例
 ```
 $scope.seetings = {
        FilesName: '图片上传',
        IsFilesType: true,
        FilesTitle: [{
                name: '文件名',
                className: 'aa',
                width: '',
                algin: ''
            },
            {
                name: '文件类型',
                className: 'ds',
                width: '80',
                algin: 'center'
            },
            {
                name: '文件大小',
                className: 'ds',
                width: '80',
                algin: 'center'
            },
            {
                name: '操作',
                className: 'ds',
                width: '55',
                algin: 'center'
            }
        ],
        FilesBtn: ['确定', '取消'],
        FilesType: {
            is: true,
            list: [{
                    name: '户型图',
                    id: 1
                },
                {
                    name: '内景图',
                    id: 2
                },
                {
                    name: '外景图',
                    id: 3
                }
            ]
        },
        FilesUrl: 'update/do',
        FilesParams: {
            deptId: 1,
            RoomId: 2
        },
        FilesError: test1(),
        FilesSuccess: test(),
    }
 ```


## 安装环境:

```
npm install 
```

## 启动本地服务器

```
gulp run
```
```
http://localhost:1024/
```