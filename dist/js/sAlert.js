/**
 * 模拟 Alert/confirm 对话框
 * @author sunxjie
 * @emain sunxjie@gmail.com
 * @date 2017.08
 * @github https://github.com/sunxjie/sAlert.js
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
                alertlabel: "确定",
                alertevent: function() {}
            },
            confirm: {
                cancellabel: "取消",
                submitlabel: "确定",
                cancelevent: function() {},
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
            alertCont = $('<div class="sAlert-cont text-' + opts.textalign + '">' + opts.msg + '</div>'),
            alertFoot = $('<div class="sAlert-foot" />')
        );
        if (opts.type == "alert") {
            alertFoot.append(okBtn = $('<button class="btn okBtn">' + opts.alert.alertlabel + '</button>'));
        }
        if (opts.type == "confirm") {
            alertFoot.append(
                cancelBtn = $('<button class="btn cancelBtn">' + opts.confirm.cancellabel + '</button>'),
                submitBtn = $('<button class="btn submitBtn">' + opts.confirm.submitlabel + '</button>')
            );
        }

        $("body").on("touchmove", function(event) {
            event.preventDefault;
        }, false)
    };

    $.sAlert.hide = function() {
        $("body").unbind("touchmove");
        alertWrap.addClass('out').one('webkitAnimationEnd animationend', function() {
            alertWrap.remove();
        });
    };

    $.sAlert.event = function() {
        $(okBtn).on('click', function() {
            opts.alert.alertevent();
            $.sAlert.hide();
        });
        $(cancelBtn).on('click', function() {
            opts.confirm.cancelevent();
            $.sAlert.hide();
        });
        $(submitBtn).on('click', function() {
            opts.confirm.submitevent();
            $.sAlert.hide();
        });
    };
})(window.jQuery || window.Zepto);