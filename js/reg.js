var count = 60;
    var intervalId;
    /*手机号码验证*/
    $("#phonenum").blur(function() {
        var phoneNumReg = /^1(3|4|5|7|8)\d{9}$/;
        var result = phoneNumReg.test($(this).val());
        if(result) {
            return;
        }
        else {
            $(this).addClass("error");
            $(this).val("手机号码格式不正确");
        }

    }).focus(function() {
        if($(this).hasClass("error")) {
            $(this).removeClass("error");
            $(this).val("");
        }
    })

    /*获取验证码*/
    $("#identifycode").blur(function() {
        if($(this).val() == "") {
            $(this).addClass("error");
            $(this).val("验证码不能为空");
        }
        else {
            return;
        }
    }).focus(function() {
        if($(this).hasClass("error")) {
            $(this).removeClass("error");
            $(this).val("");
        }
    })

    /*验证码效果*/
    $("#codebtn").click(function() {
        var phoneNumReg = /^1(3|4|5|7|8)\d{9}$/;
        if($("#phonenum").val() == "" || !phoneNumReg.test($("#phonenum").val())) {
            $("#phonenum").addClass("error");
            $("#phonenum").val("手机号码格式不正确");
        }
        else {
            $("#codebtn").attr("disabled", true);
            intervalId = setInterval(function() {
				if(count == 0) {
					clearInterval(intervalId);
                    $("#codebtn").val("获取验证码");
					$("#codebtn").removeAttr("diabled");
					count = 60;			
				}
				else {
                    $("#codebtn").css("background", "#b2ecd2");
                    count = count - 1;
                    $("#codebtn").val(count + "秒后重新获取");
				}	
			}, 1000);
        }
    })



    /*填写信息非空验证*/
    $("#agencyname").blur(function() {
        if($(this).val() == "") {
            $(this).addClass("error");
            $(this).val("机构名称不能为空");
        }
        else if($(this).val().length > 30) {
            $(this).addClass("error");
            $(this).val("机构名称不能超过30字符");
        }
    }).focus(function() {
        if($(this).hasClass("error")) {
            $(this).removeClass("error");
            $(this).val("");
        }
    })
    

    $("#agencyaddress").blur(function() {
        if($(this).val() == "") {
            $(this).addClass("error");
            $(this).val("机构名称不能为空");
        }
        else if($(this).val().length > 50) {
            $(this).addClass("error");
            $(this).val("机构名称不能超过30字符");
        }
    }).focus(function() {
        if($(this).hasClass("error")) {
            $(this).removeClass("error");
            $(this).val("");
        }
    })

    $("#agencyschool").blur(function() {
        if($(this).val() == "") {
            $(this).addClass("error");
            $(this).val("生源学校不能为空");
        }
        else if($(this).val().length > 50) {
            $(this).addClass("error");
            $(this).val("生源学校不能超过50字符");
        }
    }).focus(function() {
        if($(this).hasClass("error")) {
            $(this).removeClass("error");
            $(this).val("");
        }
    })

    $("#yourname").blur(function() {
        if($(this).val() == "") {
            $(this).addClass("error");
            $(this).val("姓名不能为空");
        }
        else if($(this).val().length > 4) {
            $(this).addClass("error");
            $(this).val("姓名不能超过4字符");
        }
    }).focus(function() {
        if($(this).hasClass("error")) {
            $(this).removeClass("error");
            $(this).val("");
        }
    })

    $("#yourduty").blur(function() {
        if($(this).val() == "") {
            $(this).addClass("error");
            $(this).val("职务不能为空");
        }
        else if($(this).val().length > 50) {
            $(this).addClass("error");
            $(this).val("职务超过30字符");
        }
    }).focus(function() {
        if($(this).hasClass("error")) {
            $(this).removeClass("error");
            $(this).val("");
        }
    })

    

    $("#send1").click(function(e) {
        e.preventDefault();
        var phoneNumReg = /^1(3|4|5|7|8)\d{9}$/;
        var result = phoneNumReg.test($("#phonenum").val());
        if(!result) {
            $("#phonenum").addClass("error");
            $("#phonenum").val("手机号码格式不正确");
            return;
        }
        if($("#identifycode").val() == ""){
            $("#identifycode").addClass("error");
            $("#identifycode").val("验证码不能为空");
            return;
        }
        if($("#message input").hasClass("error")) {
            return;
        }
        $("#first").css("display", "none");
        $("#second").css("display", "block");
    })
    $("#send2").click(function(e) {
        e.preventDefault();

        if($("#agencyname").val() == "") {
            $("#agencyname").addClass("error");
            $("#agencyname").val("机构名称不能为空");
        }
        else if($("#agencyname").val().length > 30) {
            $("#agencyname").addClass("error");
            $("#agencyname").val("机构名称长度不能超过30字符");
        }

        if($("#agencyaddress").val() == "") {
            $("#agencyaddress").addClass("error");
            $("#agencyaddress").val("机构地址不能为空");
        }
        else if($("#agencyaddress").val().length > 30) {
            $("#agencyaddress").addClass("error");
            $("#agencyaddress").val("机构地址长度不能超过30字符");
        }

        if($("#agencyschool").val() == "") {
            $("#agencyschool").addClass("error");
            $("#agencyschool").val("生源学校不能为空");
        }
        else if($("#agencyschool").val().length > 30) {
            $("#agencyschool").addClass("error");
            $("#agencyschool").val("生源学校长度不能超过30字符");
        }

        if($("#yourname").val() == "") {
            $("#yourname").addClass("error");
            $("#yourname").val("姓名不能为空");
        }
        else if($("#yourname").val().length > 4 && !$("#infor #yourname").hasClass("error")) {
            $("#yourname").addClass("error");
            $("#yourname").val("姓名长度不能超过4个字符");
        }

        if($("#yourduty").val() == "") {
            $("#yourduty").addClass("error");
            $("#yourduty").val("职务不能为空");
        }
        else if($("#yourduty").val().length > 30) {
            $("#yourduty").addClass("error");
            $("#yourduty").val("职务长度不能超过30字符");
        }
        if($("#infor input").hasClass("error")) {
            return;
        }

        $("#first").css("display", "none");
        $("#second").css("display", "none");
        $("#three").css("display", "block");
        $("#footer1").css("display", "none");
        $("#footer2").css("display", "block");
    })