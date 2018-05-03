var login = new Vue({
    el: '#login',
    data: {
        loginStyle: {
            userName: 'true',
            sms: 'false'
        },
        msg: '获取验证码',
        phonePrefix: [{
            name: 'dalu',
            value: '+86'
        }, {
            name: 'hongkang',
            value: '+852'
        }, {
            name: 'aomen',
            value: '+853'
        }, {
            name: 'taiwan',
            value: '+886'
        }],
        defalutPrefix: {
            name: 'taiwan',
            value: '+86'
        } //默认的手机号码前缀
    },
    methods: {
        changeStyle: function(val) {
            if (val == "userName") {
                this.loginStyle.userName = 'true';
                this.loginStyle.sms = 'false';
            } else if (val == "sms") {
                this.loginStyle.userName = 'false';
                this.loginStyle.sms = 'true';
            }
        },
        login: function() {
            //首先判断是哪种类型的登录
            if (this.loginStyle.userName == 'true') {
                if (!this.$refs.userName.value) {
                    console.log("账户不能为空");
                } else if (!this.$refs.userPassWord.value) {
                    console.log("密码不能为空");
                }
            } else if (this.loginStyle.sms == 'true') {
                if (!this.$refs.phoneNum.value) {
                    console.log("手机号码不能为空");
                } else if (!this.$refs.phoneCode.value) {
                    console.log("验证码不能为空");
                }
            }
        },
        //得到是哪个地区的
        getPrefix: function(event) {
            console.log(event.target.value);
            // this.defalutPrefix.name=event.target.name;
        },
        //发送验证码
        getPhoneCode: function() {
            axios.get("https://baidu.com?wd=baidu").then(function(response) {
                console.log(response);
            }).catch(function(response) {
                console.log(response);
            });
            //判断是否正在读秒中
            if (this.msg != "获取验证码") {
                return;
            }
            console.log("验证码已发送，请注意查收");
            this.msg = 30;
            var timerA = setInterval(() => {
                if (this.msg <= 0) {
                    clearInterval(timerA);
                    this.msg = "获取验证码";
                } else {
                    this.msg -= 1;
                }
            }, 1000)
        },
        //跳转注册页面
        regist: function() {
            window.location.href = "html/regist.html"
        }
    }
});