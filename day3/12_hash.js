// hash?
// hashes?
// hashtag, hash brownies, hash browns

// searching, organizing, represenation
// cryptography

// pulp fiction - quentin tarantino

// pulp
// pəlp
// noun
// 1.
// a soft, wet, shapeless mass of material.
// "boiling with soda will reduce your peas to pulp"
// synonyms:	mush, mash, paste, puree, pomace, pap, slop, slush, mulch; More
// 2.
// popular or sensational writing that is generally regarded as being of poor quality.
// "the story is a mix of pulp fiction and Greek tragedy"
// synonyms:	trashy, cheap, sensational, lurid, tasteless;

// a hash is a dictionary

const dictionary = {
  pulp: "a soft, wet, shapeless mass of material.",
  fiction: "a made up story."
}

// properties become keys
// dictionary.pulp = "soggy wet pieces of wood."

// zip codes
// ids

// elections

// sesame street - A -> Z, which letter is the most popular letter

let votes = "hello";

const results = {
  "h": 1,
  "e": 1,
  "l": 2,
  "o": 1
};

let sentence = "All you need is love.";
// which letter occurs most in this sentence
// "A": 1
// "l": 3

let words = sentence.split(" ");
console.log(words);
["All", "you", "need"...]

let newSentence = words.join("-");
"All-you-need-is-love."

let result = {};
for (let letter of sentence) {
  result[letter] = 1;
}





let sentence = "All you need is love.";
const result = {};

for (let letter of sentence) {
  if (result[letter] == undefined) {
    result[letter] = 1;
  } else {
    result[letter] += 1;
  }
}

console.log(result);










//
