$("#read-more").click(function(){$("#more-text").animate({height:"+=150px"},1e3),$("#more-text").height()>100&&$("#read-less").css("visibility","visible"),$("#more-text").height()>500&&$("#read-more").css("visibility","hidden")}),$("#read-less").click(function(){$("#more-text").animate({height:"-=150px"},1e3),$("#more-text").height()<500&&$("#read-less").css("visibility","hidden"),$("#more-text").height()<900&&$("#read-more").css("visibility","visible")});