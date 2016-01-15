$("#submit").on("click", function() {
	console.log("clicked");
	return false;

});

$("#submit").on("click", function() {
	var comment = $("#textarea").val();
	console.log(comment);
	$("#visible-comment").html(comment);
});

$("#textarea").on("keyup", function() {
	console.log("keyup just happened!!");
	var change_color_length = 50;
	var charCount = $("#textarea").val().length; //length of the content of the textarea to a variable
	console.log(charCount);
	$("#char-count").html(charCount);
	if(charCount > change_color_length) {
		$("#char-count").css("color", "red");
	} else {
		$("#char-count").css("color", "yellow");
	};
});

var rows = $(".my-row");
for(var i=0; i<rows.length; ++i) {
	if (i%2===0) {
		$(rows[i]).css("background-color", "#39393A");
	}
};

var myWork = [ { title: "More Work", pic: "../img/NEFL6small.jpg" },
{ title: "More Work", pic: "../img/schizosmall.jpg"},
{ title: "More Work", pic: "../img/assemblesmall.jpg"},
{ title: "More Work", pic: "../img/iglamoursmall.jpg"}
];

for(var i=0; i<myWork.length; ++i){
	$("#" + i).css("background-image", "url("+ myWork[i].pic + ")");

};

$(".image").mouseenter( function() {
	console.log(myWork[this.id].title);
	$(this).html("<p class='info'><span class='proj-title'>Title:</span> " + myWork[this.id].title + " </p>");
}) .mouseleave( function() {
	$("p.info").html("");
});
