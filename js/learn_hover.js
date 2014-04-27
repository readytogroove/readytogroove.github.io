$(document).ready (function(){
    /* Fallopian Tubes link hovers */
    $("#fallop").mouseover(function(){
        $("#learn-picture").attr("src","/img/fallopian-tubes-color.png");
        $("#l1").show();
    });
    $("#fallop").mouseout(function(){
        $("#learn-picture").attr("src","/img/reproductive-system-bw.png");
        $("#l1").hide();
    });


    /* Ovaries link hovers */
    $("#ovaries").mouseover(function(){
        $("#learn-picture").attr("src","/img/ovaries-color.png");
        $("#l2").show('fast');
    });
    $("#ovaries").mouseout(function(){
        $("#learn-picture").attr("src","/img/reproductive-system-bw.png");
        $("#l2").hide('fast');
    });

     /* Uterus link hovers */
    $("#uterus").mouseover(function(){
        $("#learn-picture").attr("src","/img/uterus-color.png");
        $("#l3").show('fast');
    });
    $("#uterus").mouseout(function(){
        $("#learn-picture").attr("src","/img/reproductive-system-bw.png");
        $("#l3").hide('fast');
    });

     /* Cervix link hovers */
    $("#cervix").mouseover(function(){
        $("#learn-picture").attr("src","/img/cervix-color.png");
        $("#l4").show('fast');
    });
    $("#cervix").mouseout(function(){
        $("#learn-picture").attr("src","/img/reproductive-system-bw.png");
        $("#l4").hide('fast');
    });

     /* Vagina link hovers */
    $("#vagina").mouseover(function(){
        $("#learn-picture").attr("src","/img/vagina-color.png");
        $("#l5").show('fast');
    });
    $("#vagina").mouseout(function(){
        $("#learn-picture").attr("src","/img/reproductive-system-bw.png");
        $("#l5").hide('fast');
    });
});

