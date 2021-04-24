let discord = "https://discord.com/api/users/";
let DiscUID = "513390584048779276";

function Discordify() {
	console.log("Trying to fetch user info");
	fetch(discord + DiscUID)
	.then(
		function (response) {
			console.log(response.json());
		},function (reason){
			console.error("Error: Rejected Promise when trying to get Discord user info.");
		}
	)
	.catch(function (error) {
		console.error("Error: Exeption thrown when trying to get Discord user info:\n" + error);
	});
	const thingy = document.getElementById("Discord-User-like");
	//thingy.style
}
Discordify();