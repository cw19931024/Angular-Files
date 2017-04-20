var app = angular.module('app', []);
app.controller('Ctrl', function ($scope) {
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
})

function test() {
    console.log('测试')
}

function test1(res) {
    console.log(res)
}