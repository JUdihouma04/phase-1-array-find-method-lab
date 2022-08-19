// code your solution here
const record = [
	{ year: "2015", result: "W" },
	{ year: "2014", result: "N/A" },
	{ year: "2013", result: "L" },
];
function superbowlWin() {
	const WinObject = record.find((game) => game.result === "W");

	console.log(`The year the team won was $(winObject.year)`);
}
