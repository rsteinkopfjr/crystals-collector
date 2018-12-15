$(document).ready(function () {

    var wins = 0;
    var loses = 0;
    var counter = 0;

    var randomNumber = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    $("#random-number").text(randomNumber);

    var redCrystalValue = Math.floor(Math.random() * (20 - 16 + 1)) + 16;
    var redCrystal = $("<img>");
    redCrystal.addClass("crystal-image img-fluid");
    redCrystal.attr("src", "assests/images/red-crystal.png");
    redCrystal.attr("value", redCrystalValue);
    $("#red-crystal").html(redCrystal);

    var greenCrystalValue = Math.floor(Math.random() * (15 - 11 + 1)) + 11;
    var greenCrystal = $("<img>");
    greenCrystal.addClass("crystal-image img-fluid");
    greenCrystal.attr("src", "assests/images/green-crystal.png");
    greenCrystal.attr("value", greenCrystalValue);
    $("#green-crystal").html(greenCrystal);

    var purpleCrystalValue = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
    var purpleCrystal = $("<img>");
    purpleCrystal.addClass("crystal-image img-fluid");
    purpleCrystal.attr("src", "assests/images/purple-crystal.png");
    purpleCrystal.attr("value", purpleCrystalValue);
    $("#purple-crystal").html(purpleCrystal);

    var yellowCrystalValue = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    var yellowCrystal = $("<img>");
    yellowCrystal.addClass("crystal-image img-fluid");
    yellowCrystal.attr("src", "assests/images/yellow-crystal.png");
    yellowCrystal.attr("value", yellowCrystalValue);
    $("#yellow-crystal").html(yellowCrystal);

    function crystalCollector() {
        randomNumber = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
        $("#random-number").text(randomNumber);

        counter = 0;
        $("#user-number").text(counter);

        var redCrystalValue = Math.floor(Math.random() * (20 - 16 + 1)) + 16;
        var redCrystal = $("<img>");
        redCrystal.addClass("crystal-image img-fluid");
        redCrystal.attr("src", "assests/images/red-crystal.png");
        redCrystal.attr("value", redCrystalValue);
        $("#red-crystal").html(redCrystal);

        var greenCrystalValue = Math.floor(Math.random() * (15 - 11 + 1)) + 11;
        var greenCrystal = $("<img>");
        greenCrystal.addClass("crystal-image img-fluid");
        greenCrystal.attr("src", "assests/images/green-crystal.png");
        greenCrystal.attr("value", greenCrystalValue);
        $("#green-crystal").html(greenCrystal);

        var purpleCrystalValue = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
        var purpleCrystal = $("<img>");
        purpleCrystal.addClass("crystal-image img-fluid");
        purpleCrystal.attr("src", "assests/images/purple-crystal.png");
        purpleCrystal.attr("value", purpleCrystalValue);
        $("#purple-crystal").html(purpleCrystal);

        var yellowCrystalValue = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        var yellowCrystal = $("<img>");
        yellowCrystal.addClass("crystal-image img-fluid");
        yellowCrystal.attr("src", "assests/images/yellow-crystal.png");
        yellowCrystal.attr("value", yellowCrystalValue);
        $("#yellow-crystal").html(yellowCrystal);

        $(".crystal-image").on("click", function () {
            var newScore = counter += parseInt($(this).attr("value"));
            $("#user-number").text(newScore);

            if (newScore === randomNumber) {
                wins++;
                alert("You rock!");
                $("#wins").text(wins);
                crystalCollector();
            }

            else if (newScore > randomNumber) {
                loses++;
                alert("Better luck next time!");
                $("#loses").text(loses);
                crystalCollector();
            }
        });
    }

    $(".crystal-image").on("click", function () {
        var newScore = counter += parseInt($(this).attr("value"));
        $("#user-number").text(newScore);

        if (newScore === randomNumber) {
            wins++;
            alert("You rock!");
            $("#wins").text(wins);
            crystalCollector();
        }

        else if (newScore > randomNumber) {
            loses++;
            alert("Better luck next time!");
            $("#loses").text(loses);
            crystalCollector();
        }
    });
});