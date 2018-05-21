const quotes = [
  `Through the ear, we shall enter the invisibilty of things. + Edmond Jabès`,
  `We don't take time to be vulnerable with each other. + John Cassavetes`,
  `The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed. + Carl Jung`,
  `I don't think there is any truth. There are only points of view. + Allen Ginsberg`,
  `How we spend our days is, of course, how we spend our lives. + Annie Dillard`,
  `Creative minds are uneven, and the best of fabrics have their dull spots. + H.P. Lovecraft`,
  `In art everything is possible, but everything is not necessary. + Arvo Pärt`,
  `You have your way. I have my way. As for the right way, the correct way, the only way, it does not exist. + Friedrich Nietzsche`,
  `What is to give light must endure burning. + Viktor Frankl`,
  `Time is but the space between our memories; as soon as we cease to perceive this space, time has disappeared. + Henri-Frédéric Amiel`,
  `Perfectionism is self-abuse of the highest order. + Anne Wilson Schaef`,
  `Every act of communication is, in some way, an act of translation. + Gregory Rabassa`,
  `Don’t cling to a mistake just because you spent a lot of time making it. + Aubrey De Graf`,
  `Strength grows in the moment when you think you can't go on but you keep going anyway. + unknown`,
  `Perhaps all anxiety might derive from a fixation on moments — an inability to accept life as ongoing. + Sarah Manguso`,
  `You are not for everybody. You weren't created to be consumed by the masses. You are you, and that's enough. + Brittany Josephina`,
  `Your assumptions are your windows on the world. Scrub them off every once in a while, or the light won't come in. + Isaac Asimov`,
  `Home is not where you were born; home is where all your attempts to escape cease. + Naguib Mahfouz`,
  `Honesty is a very expensive gift, don't expect it from cheap people. + Warren Buffett`,
  `There is no such thing as static happiness. Happiness is a mixed thing, a thing compounded of sacrifices, and losses, and betrayals. + John Updike`,
  `To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. + Ralph Waldo Emerson`,
  `A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing. + George Bernard Shaw`,
  `If you hate a person, you hate something in him that is part of yourself. What isn't part of ourselves doesn't disturb us. + Hermann Hesse`,
  `When you are sorrowful look again in your heart, and you shall see that in truth you are weeping for that which has been your delight. + Kahlil Gibran`,
];

const quote = document.querySelector(".quote");
const generate = document.getElementById("generate");
const twitter = document.getElementById("twitter");

generate.addEventListener("click", newQuote);

function newQuote(e) {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  
  let result = quotes[randomNumber].split(' + ');

  quote.innerHTML = "<blockquote>" + result[0] + "</blockquote><cite>" + result[1] + "</cite>";
  
  twitter.href="https://twitter.com/intent/tweet/?hashtags=quotes&text=" +  quotes[randomNumber];  
}

newQuote();