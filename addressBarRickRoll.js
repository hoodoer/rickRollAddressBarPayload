// @hoodoer

var redirect = false;




var lyrics = {
	"❗❗❗❗❗": 3000,
	"Were no strangers to love": 1500,
	"You know the rules and so do I": 1500,
	"A full commitments what Im thinking of": 1500,
	"You wouldnt get this from any other guy": 1500,
	"I just wanna tell you how Im feeling": 1500,
	"Gotta make you understand": 2000,
	"Never gonna give you up": 1500,
	"Never gonna let you down": 1500,
	"Never gonna run around and desert you": 1500,
	"Never gonna make you cry": 1500,
	"Never gonna say goodbye": 1500,
	"Never gonna tell a lie and hurt you": 2000,
	"Weve known each other for so long": 1500,
	"Your hearts been aching, but youre too shy to say it (say it)": 1500,
	"Inside, we both know whats been going on (going on)": 1500,
	"We know the game and were gonna play it": 1500,
	"And if you ask me how Im feeling": 1500,
	"Dont tell me youre too blind to see": 2000,
	"Never gonna give you up": 1500,
	"Never gonna let you down": 1500,
	"Never gonna run around and desert you": 1500,
	"Never gonna make you cry": 1500,
	"Never gonna say goodbye": 1500,
	"Never gonna tell a lie and hurt you": 1500,
	"Never gonna give you up": 1500,
	"Never gonna let you down": 1500,
	"Never gonna run around and desert you": 1500,
	"Never gonna make you cry": 1500,
	"Never gonna say goodbye": 1500,
	"Never gonna tell a lie and hurt you": 2000,
	"Weve known each other for so long": 1500,
	"Your hearts been aching, but youre too shy to say it (to say it)": 1500,
	"Inside, we both know whats been going on (going on)": 1500,
	"We know the game and were gonna play it": 1500,
	"I just wanna tell you how Im feeling": 1500,
	"Gotta make you understand": 2000,
	"Never gonna give you up": 1500,
	"Never gonna let you down": 1500,
	"Never gonna run around and desert you": 1500,
	"Never gonna make you cry": 1500,
	"Never gonna say goodbye": 1500,
	"Never gonna tell a lie and hurt you": 1500,
	"Never gonna give you up": 1500,
	"Never gonna let you down": 1500,
	"Never gonna run around and desert you": 1500,
	"Never gonna make you cry": 1500,
	"Never gonna say goodbye": 1500,
	"Never gonna tell a lie and hurt you": 1500,
	"Never gonna give you up": 1500,
	"Never gonna let you down": 1500,
	"Never gonna run around and desert you": 1500,
	"Never gonna make you cry": 1500,
	"Never gonna say goodbye": 1500,
	"Never gonna tell a lie and hurt you": 3000,
	"😎": "5000"
};




async function runSkit()
{

	for (const string in lyrics) 
	{
		const number = lyrics[string];
		var lyricString = `${string}`;
		delay       = `${number}`;
		window.history.replaceState(null, '', lyricString);
		await new Promise(resolve => setTimeout(resolve, delay));
	}

	if (redirect)
	{
		window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
	}
	else
	{
		runSkit();
	}
}





runSkit();
