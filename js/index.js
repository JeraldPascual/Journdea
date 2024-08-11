const ideaDisplay = document.getElementById("idea"); 
const addDescription = document.getElementById("addDescription");

document.addEventListener('DOMContentLoaded', () => {
  saveIdeas();
  animateHeroLogo();
});

function animateHeroLogo() {
  gsap.fromTo(
    ".logo",
    { x: 0, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.5, ease: "power2.inOut" }
  );
};

const journalIdeas = [
  {
    idea: "Unique/Self Code Snippets",
    additionalDescription: "Perfect for no tutorial-hell devs🔥"
  },
  {
    idea: "Words that best describe you👋",
    additionalDescription: "Absolute nostalgia going back to your journal"
  },
  {
    idea: "Reflect on a phrase, quote, or mantra that resonates with you.",
    additionalDescription: "Explain why it’s significant to you."
  },
  {
    idea: "Write a reaction paper about a certain issue📃",
    additionalDescription: "Diverse opinions is what makes someone horizon grow!"
  },
  {
    idea: "Prompt and answer it yourself about something",
    additionalDescription: "Trends such as about cloning if it is ethical or not?🕵️‍♂️"
  },
  {
    idea: "List your favorite book authors🧾",
    additionalDescription: "Who doesn't love reading books, especially a new one with the smell of the paper(Maybe it's just me HAHA!)"
  },
  {
    idea: "STICKERS!!🍡",
    additionalDescription: "Talking about creativity, stickers are one of the best!"
  },
  {
    idea: "Describe your ideal boyfriend/girlfriend🧑👩",
    additionalDescription: "Well, a journal is not a journal without this!"
  },
  {
    idea: "List your favorite games!🎮",
    additionalDescription: "Talking about forgetting, your journal would be great as a time capsule especially a forgotten title!"
  },
  {
    idea: "One word that describes you",
    additionalDescription: "I bet there's one, describe it now.👊"
  },
  {
    idea: "Write the blessings that you received🕊",
    additionalDescription: "Ponder, I tell you, so much in a single day."
  },
  {
    idea: "Calligraphy!✍",
    additionalDescription: "Save a page and do calligraphy!📃"
  },
  {
    idea: "What is your purpose?",
    additionalDescription: "So deep and maybe give it a go?🕵️‍♀️"
  },
  {
    idea: "Boundaries🅱",
    additionalDescription: "Write about boundaries that you would set in your relationships!"
  },
  {
    idea: "Explain what you do best.👏",
    additionalDescription: "Write it, unique creature!"
  },
  {
    idea: "Bucket list of places you’d like to visit💭",
    additionalDescription: "Well, I wouldn't call it a journal without a bucket list😉"
  },
  {
    idea: "New things you’d like to try",
    additionalDescription: "Sky's the limit!🪂"
  },
  {
    idea: "Write about your favorite quote",
    additionalDescription: "Reflect and how it relates to a sweet creature like you!🍪"
  },
  {
    idea: "Create an “I forgive…” entry.",
    additionalDescription: "Forgive yourself and others and move forward, amazing person💯"
  },
  {
    idea: "Compliment yourself!💇‍♂️💇‍♀️",
    additionalDescription: "Write something special about someone — that someone is you. "
  },
  {
    idea: "Schedule📅",
    additionalDescription: "A good schedule is a good habit for a disciplined person—and that is you!⏰"
  },
  {
    idea: "What would you do for love?",
    additionalDescription: "Interesting isn't it?💌"
  },
  {
    idea: "Milestone",
    additionalDescription: "Write a journal about a milestone you have achieved or the one's that you are currently working!💪"
  },
  {
    idea: "An entry about special someone",
    additionalDescription: "Maybe writing about someone would be good? Someone that made you angry or someone that you'd like to have a talk or meet."
  },
  {
    idea: "Expectations about the future",
    additionalDescription: "Where do you want to be three years from now?✨"
  },
  {
    idea: "Write about an important event.",
    additionalDescription: "Some event/scenarios makes up memories, maybe write about that?🌃"
  },
  {
    idea: "Describe that one unforgettable challenge",
    additionalDescription: "A challenge that tested you and changed you as a person!☯"
  },
  {
    idea: "A problem and a solution",
    additionalDescription: "Write solutions about those problems that you've encountered🤠 "
  },
  {
    idea: "Reading comprehension",
    additionalDescription: "Write in your journal about something you have read!📖"
  },
  {
    idea: "A great habit✝",
    additionalDescription: "You will not write this but a great practice before writing in your journal is a prayer!🙏📿"
  },
];


function generateIdea(){
  const randIdea = randomizeIdeas(); 
  generate(randIdea); 
}

function randomizeIdeas(){

  const randomIndex = Math.floor(Math.random() * journalIdeas.length);
  return randomIndex;
}

function generate(journalNumber){
  const journal = journalIdeas[journalNumber]; 


  ideaDisplay.innerHTML = journal.idea;
  addDescription.innerHTML = journal.additionalDescription;

  localStorage.setItem('ideaDisplay', ideaDisplay.innerHTML);
  localStorage.setItem('addDescription', addDescription.innerHTML);
}

function saveIdeas(){
  const savedIdea = localStorage.getItem('ideaDisplay');
  const savedDescription = localStorage.getItem('addDescription');

  if (savedIdea && savedDescription) {

    ideaDisplay.innerHTML = savedIdea;
    addDescription.innerHTML = savedDescription;
  } else {
  
    generateIdea();
  }
}
