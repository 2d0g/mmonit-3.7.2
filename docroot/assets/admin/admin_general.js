(function(b){b.getScript("https://mmonit.com/feed/feed.js",function(){b("#feed").html(com_mmonit_feed.text);b("#announcement").show()});var a=new function(){var c=this;c.loading=ko.observable(true);c.deleteEventsMenu=ko.observableArray(Menu.JSONToMenu([{id:"6",name:"After 1 month",description:"1 month"},{id:"7",name:"After 3 months",description:"3 months"},{id:"8",name:"After 6 months",description:"6 months"},{id:"9",name:"After 1 year",description:"1 year"},{id:"10",name:"After 3 years",description:"3 years"},{id:"11",name:"Never",description:"never"}]));c.deleteEventsLabel=ko.computed(function(){return Menu.getSelectedNames(c.deleteEventsMenu(),null)});c.deleteAnalyticsMenu=ko.observableArray(Menu.JSONToMenu([{id:"6",name:"After 1 month",description:"1 month"},{id:"7",name:"After 3 months",description:"3 months"},{id:"8",name:"After 6 months",description:"6 months"},{id:"9",name:"After 1 year",description:"1 year"},{id:"10",name:"After 3 years",description:"3 years"}]));c.deleteAnalyticsLabel=ko.computed(function(){return Menu.getSelectedNames(c.deleteAnalyticsMenu(),null)});c.save=function(){if(!c.loading()){b.ajaxSettings.traditional=true;b.ajax({url:"../../admin/general/update",data:b.param({purgeevents:Menu.getSelectedValues(c.deleteEventsMenu(),"id"),purgeanalytics:Menu.getSelectedValues(c.deleteAnalyticsMenu(),"id")}),type:"POST",timeout:30000,error:MMONIT.error.json})}};c.purgeEventsSelection=ko.observable(c.deleteEventsMenu().length-1);c.selectPurgeEvents=function(d){c.purgeEventsSelection(d);if(d.id=="11"){c.selectPurgeEventsConfirm()}else{b("#confirmDeleteEvents").modal("show")}};c.selectPurgeEventsConfirm=function(){Menu.select(c.deleteEventsMenu(),c.purgeEventsSelection().id);c.save()};c.purgeAnalyticsSelection=ko.observable(c.deleteAnalyticsMenu.length-1);c.selectPurgeAnalytics=function(d){c.purgeAnalyticsSelection(d);b("#confirmDeleteAnalytics").modal("show")};c.selectPurgeAnalyticsConfirm=function(d){Menu.select(c.deleteAnalyticsMenu(),c.purgeAnalyticsSelection().id);c.save()};b.ajax({url:"../../admin/general/get",type:"GET",dataType:"json",timeout:30000,error:MMONIT.error.json,success:function(d){Menu.select(c.deleteEventsMenu(),d.purgeevents);Menu.select(c.deleteAnalyticsMenu(),d.purgeanalytics);c.loading(false)}})};ko.applyBindings(a)})(jQuery);