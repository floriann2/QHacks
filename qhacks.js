$(document).ready(function(){
var first = true;
var second = false;
var third = false;
var fourth = false;
var firstPerson = ['i', 'me', 'my', 'mine', 'am', 'we', 'us', 'our', 'ours'];
var secondPerson = ['you','your','yours', 'are'];
var reflections = {
    "am": "are",
    "was": "were",
    "i": "you",
    "i'd": "you would",
    "i've": "you have",
    "i'll": "you will",
    "my": "your",
    "are": "am",
    "you've": "I have",
    "you'll": "I will",
    "your": "my",
    "yours": "mine",
    "you": "me",
    "me": "you"
};

var randomArray = [
	["Why do you feel like you need {0}?",
	"What benefit would {0} bring for you?",
	"Are you sure {0} is something you need?"],

	["I don't {0} because it's not my preference?",
	"Maybe SOMEDAY I will {0}.",
	"Should I {0}? Would you {0}?"],

	["I don't think I should be able to {0}?",
	"If you could {0}, would you? Why?",
	"Why can't you {0}?",
	"Have you really put in the work?"],

	["How are you supposed to know you can't {0} without trying?",
	"Maybe you could {0} if you gave some type of effort.",
	"What means would it take, for you to finally {0}?"],

	["Are you doing this because you are {0}?",
	"For how long have you been {0}?",
	"How do you act? Now that you are {0}?"],

	["How does {0} make you feel?",
	"Do you like being {0}?",
	"Why is the purpose of you telling me you're {0}?",
	"Why do you think you're {0}?"],

	["Why does it matter if I am {0}?",
  	"Would you prefer it if I were not {0}?",
  	"Maybe you believe I am {0}...",
  	"I may be {0} -- why do you care?"],

	["Why do you ask?",
	"How would an answer to that help you?",
	"What do you think?"],

	["How do you suppose?",
	"Perhaps you can answer your own question.",
	"What is it you're really asking?",
	"What is it that you really want to know?"],

	["Are you serious?",
	"What other reasons come to mind?",
	"If {0}, what else must be true?"],

	["There are many times when no apology is needed.",
	"What feelings do you have when you apologize?"],

	["Hello... I'm glad you're here.",
	"Hi there... how are you today?",
	"Hello, how are you?"],

	["Do you doubt {0}?",
	"Do you really think so?",
	"But you're not sure about {0}?"],

	["Tell me more.",
	"When you think of a friend, what comes to mind?",
	"Do you tell me about a childhood friend."],

	["You seem quite sure.",
	"OK, but can you elaborate a bit?"],

	["Are you really talking about me?",
	"Does it seem strange to talk to a computer?",
	"How does online conversation make you feel?",
	"Do you feel like you can get your thoughts across better here?"],

	["Do you think it is {0}?",
	"Perhaps it's {0} -- who knows really?",
	"If it is {0}, what would you do?",
	"It could well be that {0}."],

	["You seem very sure of yourself.",
	"If I told you that it probably isn't {0}, what would you do?"],

	["What makes you think I can't {0}?",
	"If I could {0}, then what and so what?",
	"Why do you care if I can {0}?"],

	["Perhaps you don't want to {0}.",
	"Do you want to {0}?",
	"If you could {0}, would you?"],

	["Why do you think I am {0}?",
	"Does it please you to think that I'm {0}?",
	"Eventually, you would like me to be {0}.",
	"Potentially you're really talking about yourself?"],

	["Why do you say I am {0}?",
    "Why do you think I am {0}?",
    "Are we discussing (or typing rather) you, or me?"],

	["Don't you really {0}?",
	"Why don't you {0}?",
	"Do you want me to {0}?"],

	["Good, tell me more about these feelings.",
	"Do you often feel {0}?",
	"When do you usually feel {0}?",
	"When you feel {0}, what happens?"],

	["Why do you tell me that you've {0}?",
	"Have you really {0}?",
	"Now that you have {0}, what is next?"],

	["Could you explain why you would {0}?",
	"Why would you {0}?",
	"Who else knows that you would {0}?",
	"Would {0} prevent you from doing something else?"],

	["Do you think there is {0}?",
	"It's likely that there is {0}.",
	"Would you like there to be {0}?",
	"What if there is {0}?",
	"What if there isn't {0}"],

	["I see, your {0}.",
	"Why do you say that your {0}?",
	"So after your {0}, what?",
	"So what about {0}? What is the significance?"],

	["We should be discussing you, not me.",
	"Why do you say that about me?",
	"Why do you care whether I {0}?"],

	["Why don't you tell me the reason why {0}?",
	"Why do you think {0}?"],

	["What would it mean to you if you got {0}?",
	"Why do you want {0}?",
	"What would you do if you got {0}?",
	"If you got {0}, then what would you do?",
	"Does it mean THAT much to you if you were to obtain {0}?",
	"Grow up."],

	["Tell me more about your project.",
      "What was your relationship with others at qhacks like?",
      "How do you feel about your this hackathon compared to others?",
      "Have you been to other hackathons?",
      "Good people skills are important at these events too.",
      "What else can you tell me about qhacks?"],

	["Tell me more about the API you used.",
      "How did your API succeed?",
      "What else can you tell me about your project?"],

	["Did you have experience at other hackathons before QHacks?",
      "What is your favorite moment at QHacks?",
      "Do you remember anything significant from the event?",
      "Did the other hackers help you out?",
      "How do you think your project stacks up against the others?",
      "Honestly, would you recommend attending a hackathon that's hours away?"],

	["Why do you ask that?",
	"Please consider whether you can answer your own question.",
	"Perhaps the answer lies within yourself?",
	"Why don't you tell me?"],

	["Good-bye!",
	"Thank you for chatting with me. I hope you had a great time at QHacks!"],

	["Please tell me more...",
	"Let's change gears a bit... Tell me about your celebrity crush.",
	"Can you expand on that please? More information would be helpful.",
	"Why do you say that {0}?",
	"I see.",
	"Very interesting.",
	"{0}.",
	"I see.  And what does that tell you?",
	"How does that make you feel?",
	"How did you respond to that?",
	"What languages were used when you were completing your project?",
    "How did hacking something help you afterwards? (What did you gain)"]		
];

$("#textbox").on('keyup', function (e) {
    if (e.keyCode == 13) {
    	if (first) {
			var first_answer = $("#textbox").val();
			$("#textbox").val("");
			modifyChat(first_answer, 1);
			if (first_answer <= 5) {
				modifyChat("Sorry, that's a bit low. Maybe next time it will be better.", 0);
				reset();
			} else {
				modifyChat("Great! Now enter a one-word (lower-case), first person pronoun so that I know you're not a robot.", 0);
			}
			first = false;
			second = true;
    	} else if (second) {
    		var secondAnswer = $("#textbox").val();
			$("#textbox").val("");
			modifyChat(secondAnswer, 1);
    		if (secondAnswer == firstPerson[0] || secondAnswer == firstPerson[1] || secondAnswer == firstPerson[5] || secondAnswer == firstPerson[6]) {
				modifyChat(secondPerson[0] + '?<br>Enter yes or no.', 0);
			} else if (secondAnswer == firstPerson[2] || secondAnswer == firstPerson[7]) {
				modifyChat(secondPerson[1] + '?<br>Enter yes or no.', 0);
			} else if (secondAnswer == firstPerson[3] || secondAnswer == firstPerson[8]) {
				modifyChat(secondPerson[2] + '?<br>Enter yes or no.', 0);
			} else if (secondAnswer == firstPerson[4]) {
				modifyChat(secondPerson[3] + '?<br>Enter yes or no.', 0);
			} else {
				modifyChat("Sorry we cannot continue.", 0);
				reset();
			}
			// modifyChat("Enter yes or no: ");
			second = false;
			third = true;
    	} else if (third) {
			var answer = $("#textbox").val();
			$("#textbox").val("");
			modifyChat(answer, 1);
			var hobby = "";
			var statement = "";

			if (answer == "yes") {
				modifyChat("Congrats! We shall begin.<br>What was your favourite thing to do at QHacks? ", 0);
			} else {
				modifyChat("Sorry, we cannot continue.", 0);
				reset();
			}
			third = false;
			fourth = true;
    	} else if (fourth) {
    		hobby = $("#textbox").val();
			$("#textbox").val("");
			modifyChat(hobby, 1);
			modifyChat("Why did you like to " + hobby + "?<br>Type 'quit' or 'exit' to end the program.", 0);
			fourth = false;
		} else {
			modifyChat("> ", 0);
			statement = $("#textbox").val();
			$("#textbox").val("");
			modifyChat(statement, 1);
			modifyChat(analyze(statement), 0);

			if (statement == "quit") {
				reset();
			}
    	}
    }
});

function reflect(fragment) {
	var i = 0
	var tokens = fragment.toLowerCase().split(" ");
	for (var t in tokens) {
		if (t in reflections) {
			tokens[i] = reflections[t];
		}
		i++;
	};

	return tokens.join(" ");
};

function analyze(statement) {
	var index = 35;
	var match = "";
	var s = $.trim(statement);
	switch (true) {
		case /(i need) (.*)/i.test(s):
			index = 0;
			match = /(i need) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(why don'?t you) (.*)\?/i.test(s):
			index = 1;
			match = /(why don'?t you) (.*)\?/i.exec(s).slice(-1).toString();
			break;
		case /(why can'?t i) (.*)\?/i.test(s):
			index = 2;
			match = /(why can'?t i) (.*)\?/i.exec(s).slice(-1).toString();
			break;
		case /(I can'?t) (.*)\?/i.test(s):
			index = 3;
			match = /(I can'?t) (.*)\?/i.exec(s).slice(-1).toString();
			break;
		case /(I am) (.*)/i.test(s):
			index = 4;
			match = /(I am) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(I'?m) (.*)/i.test(s):
			index = 5;
			match = /(I'?m) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(are you) (.*)\?/i.test(s):
			index = 6;
			match = /(are you) (.*)\?/i.exec(s).slice(-1).toString();
			break;
		case /(what) (.*)\?/i.test(s):
			index = 7;
			match = /(what) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(how) (.*)\?/i.test(s):
			index = 8;
			match = /(how) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(because) (.*)/i.test(s):
			index = 9;
			match = /(because) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(.*) (sorry) (.*)/i.test(s):
			index = 10;
			match = "";
			break;
		case /(hello) (.*)/i.test(s):
			index = 11;
			match = /(hello) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(i think) (.*)/i.test(s):
			index = 12;
			match = /(i think) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(.*) (friend) (.*)/i.test(s):
			index = 13;
			match = "";
			break;
		case /yes/i.test(s):
			index = 14;
			match = "";
			break;
		case /(.*) (computer) (.*)/i.test(s):
			index = 15;
			match = "";
			break;
		case /(is it) (.*)/i.test(s):
			index = 16;
			match = /(is it) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(it is) (.*)/i.test(s):
			index = 17;
			match = /(it is) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(can you) (.*)\?/i.test(s):
			index = 18;
			match = /(can you) (.*)\?/i.exec(s).slice(-1).toString();
			break;
		case /(can i) (.*)\?/i.test(s):
			index = 19;
			match = /(can i) (.*)\?/i.exec(s).slice(-1).toString();
			break;
		case /(you are) (.*)/i.test(s):
			index = 20;
			match = /(you are) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(you'?re) (.*)/i.test(s):
			index = 21;
			match = /(you'?re) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(i don'?t) (.*)/i.test(s):
			index = 22;
			match = /(i don'?t) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(i feel) (.*)/i.test(s):
			index = 23;
			match = /(i feel) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(i have) (.*)/i.test(s):
			index = 24;
			match = /(i have) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(i would) (.*)/i.test(s):
			index = 25;
			match = /(i would) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(is there) (.*)/i.test(s):
			index = 26;
			match = /(is there) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(my) (.*)/i.test(s):
			index = 27;
			match = /(my) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(you) (.*)/i.test(s):
			index = 27;
			match = /(you) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(why) (.*)/i.test(s):
			index = 28;
			match = /(why) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(i want) (.*)/i.test(s):
			index = 29;
			match = /(i want) (.*)/i.exec(s).slice(-1).toString();
			break;
		case /(.*) (qhacks) (.*)/i.test(s):
			index = 30;
			match = "";
			break;
		case /(.*) (api) (.*)/i.test(s):
			index = 31;
			match = "";
			break;
		case /(.*) (hackathon) (.*)/i.test(s):
			index = 32;
			match = "";
			break;
		case /(.*)\?/i.test(s):
			index = 33;
			match = /(.*)\?/i.exec(s).slice(-1).toString();
			break;
		case /quit/i.test(s):
			index = 34;
			match = "";
			break;
		case /(.*)/i.test(s):
			index = 35;
			match = /(.*)/i.exec(s).slice(-1).toString();
			break;
	}
	console.log(match);
	var response = randomArray[index].sample().toString();
	return response.format(match);
}

function modifyChat(response, user) {
	if (user == 1) {
		if ($("#response4").hasClass("show")) {
			$("#response4").remove();
		}
		$(".container").append("<div id=\"response-1\" class=\"user-response show\">" + response + " </div>");
	} else {
		var r_1,r0,r1,r2,r3;
		r_1 = $("#response-1").html();
		r0 = $("#response0").html();

		if ($("#response2").hasClass("show")) {
			r2 = $("#response2").html();
			$("#response4").remove();
			$(".container").prepend("<div id=\"response4\" class=\"bot-response show\">" + r2 + " </div>");
		} 
		if ($("#response1").hasClass("show")) {
			r1 = $("#response1").html();
			$("#response3").addClass("show");
			$("#response3").html(r1);
		} 

		$("#response2").addClass("show");
		$("#response2").html(r0);

		$("#response0").html(response);

		$("#response1").addClass("show");
		$("#response1").html(r_1);

		$("#response-1").remove();
	}
}

function reset() {
	first = true;
	second = false;
	fourth = false;
	third = false;

	$("#response-1").remove();
	$("#response1").removeClass("show");
	$("#response2").removeClass("show");
	$("#response3").removeClass("show");
	$("#response4").removeClass("show");
	$("#response0").html("Hello! Please rate your experience here so far from 1-10.<br>Be aware, if you're having a bad experience we may as well part ways now... ");
}

// Random element from array
Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
};

}); // end onload