## 前言

帮别人做的一个展示用的demo，最开始只需要一些假数据展示看看效果。不过到最后也没用上，所以就拿出来分享一下吧。我自己把后台接口部分给简单补齐了，做了一些假数据，样式也做了一些调整。因为接口需要https以及上线需要微信审核之类的，所以目前此demo只能在本地查看。同时功能也不是很完善，很多功能做的也比较简陋。如果是初学微信小程序的话，可以参考着看看。

## 源码

[Talk is cheap. Show me the code.](https://github.com/XNAL/WxContacts)


## 如何使用

    git clone https://github.com/XNAL/WxContacts
    
    // 需要先安装mysql，并创建数据库，可参考源码中的`wx_contacts.sql`
    
    cd WxContacts
    npm init
    
    // 启动后台服务接口
    node api/app.js
    
    // 使用微信web开发者工具打开本项目，并通过编译查看效果
    // 登录账号密码可使用以下两个，亦可在数据库中查看：
       手机号：13288886666/15688886666
       密码： 123456
            
## 项目截图

### 登录

<img src="https://github.com/XNAL/WxContacts/blob/master/screenshorts/wx-login.png"/>

### 部门

<img src="https://github.com/XNAL/WxContacts/blob/master/screenshorts/wx-dept.png"/>

### 联系人列表

<img src="https://github.com/XNAL/WxContacts/blob/master/screenshorts/wx-card.png"/>

### 学科

<img src="https://github.com/XNAL/WxContacts/blob/master/screenshorts/wx-subject.png"/>

## 我

<img src="https://github.com/XNAL/WxContacts/blob/master/screenshorts/wx-user.png"/>