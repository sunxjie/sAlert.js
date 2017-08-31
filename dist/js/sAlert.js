/**
 * 模拟 Alert/confirm 对话框
 * @author sunxjie
 * @date 2017.08
 * @github https://github.com/sunxjie/sAlert
 */

;
(function($) {
    var opts, okBtn, cancelBtn, submitBtn;

    // 插件
    $.fn.sAlert = function(options) {
        return this;
    };

    $.sAlert = function(options) {
        var defaults = {
            msg: "",
            title: "",
            textalign: "center",
            type: "alert",
            alert: {
                oklabel: "确定"
            },
            confirm: {
                cancellabel: "取消",
                submitlabel: "确定",
                submitevent: function() {}
            }
        };
        opts = $.extend(true, {}, defaults, options);
        $.sAlert.init();
        return this;
    };

    $.sAlert.init = function() {
        $.sAlert.show();
        $.sAlert.event();
    };

    $.sAlert.show = function() {
        $("body").append(alertWrap = $('<div class="sAlert-wrap" />'));
        alertWrap.append(alertMain = $('<div class="sAlert-main" />'));
        if (opts.title) {
            alertMain.append(alertHead = $('<div class="sAlert-head">' + opts.title + '</div>'));
        }
        alertMain.append(
            alertCont = $('<div class="sAlert-cont" />'),
            alertFoot = $('<div class="sAlert-foot" />')
        );
        alertCont.append(alertText = $('<div class="sAlert-text text-' + opts.textalign + '">' + opts.msg + '</div>'));
        if (opts.type == "alert") {
            alertFoot.append(okBtn = $('<button class="btn okBtn">' + opts.alert.oklabel + '</button>'));
        }
        if (opts.type == "confirm") {
            alertFoot.append(
                cancelBtn = $('<button class="btn cancelBtn">' + opts.confirm.cancellabel + '</button>'),
                submitBtn = $('<button class="btn submitBtn">' + opts.confirm.submitlabel + '</button>')
            );
        }
    };

    $.sAlert.hide = function() {
        alertWrap.addClass('out').one('webkitAnimationEnd animationend', function() {
            alertWrap.remove();
        });
    };

    $.sAlert.event = function() {
        $(okBtn).on('click', function() {
            $.sAlert.hide();
            return false;
        });
        $(cancelBtn).on('click', function() {
            $.sAlert.hide();
            return false;
        });
        $(submitBtn).on('click', function() {
            opts.confirm.submitevent();
            $.sAlert.hide();
        });
    };
})(window.jQuery || window.Zepto);