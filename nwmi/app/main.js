define(function (require) {
    var jquery = require('jquery');
    var boot = require('bootstrap');
    console.log("Hello Innovation Portal");

    jquery(document).ready(function(){
        
        jquery("#submitIdeaRoadmapFooter a").click(function(e){
            e.preventDefault();
            jquery("#roadmapTabHeader").removeClass();
            jquery("#roadmap").removeClass();
            jquery("#submitIdeaTabHeader").addClass('active');
            jquery("#submitIdea").addClass('active');
        });

        jquery("#submitIdea").html('<object data="http://sharepoint.fm.rbsgrp.net/teams/NWMI/Lists/Submit%20Your%20Idea/NewForm.aspx" style="width:800px; height:600px; display: block;"/>');
        jquery("#ideaBucket").html('<object data="http://sharepoint.fm.rbsgrp.net/teams/NWMI/Lists/Submit%20Your%20Idea/AllItems.aspx" style="width:850px; height:600px; display: block;"/>');
    });


});