document.addEventListener("touchstart",function(){},!0),function(){"use strict";var a="animationiteration webkitAnimationIteration mozAnimationIteration MSAnimationIteration";$(".avatar-link").on("click",function(a){a.stopPropagation()});var n=".spread",t=".revert",i=function(){$(this).off(n),$(".avatar-node").each(function(){var n=$(this);n.on(a,function(){n.addClass("is-paused"),n.off(a)})}).promise().done(o)},o=function(){$(".avatar").on("click"+t,function(){$(".avatar-node").each(function(){var a=$(this);a.removeClass("is-paused")}),$(".avatar").off(t).on("click"+n,i)})};$(".avatar").on("click"+n,i)}();