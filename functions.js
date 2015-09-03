function capitalize(str) {
  //var index = -1;
  str = str.charAt(0).toUpperCase() + str.slice(1);
  str = str.replace(/\. [a-z]/g, function myFun(x) { return x.toUpperCase();});
  return str;
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function rd(n) {
  return (n[Math.floor(Math.random() * n.length)]);
}

//Experimental tryouts for tone of Quote.
var words = [great, political];
//var fun = ['hamsters', 'teddy bears', 'jellyfish'];
function genTone() {
  var tone = Math.floor(Math.random() * words.length);
  return (rd(words[tone]) + ' ' + rd(verbs3) + ' ' + rd(words[tone]));
}

function genWord() {
  return rd(rd(words));
}

function genAfter() {
  return (Math.floor(Math.random() * 2) == 0 ? '' : (' ' + rd(after)));
}

//Different kinds of quote Generation functions.
function shortQuote() {
  var str = rd(rd(subject));
  if (subj1.indexOf(str) != -1)
    return (str + ' ' + rd(verbs1) + ' ' + rd(cplt) + genAfter());
  else if (subj2.indexOf(str) != -1)
    return (str + ' ' + rd(verbs2) + ' ' + rd(cplt) + genAfter());
  else
    return (str + ' ' + rd(verbs3) + ' ' + rd(cplt) + genAfter());
}

function longQuote() {
  return (shortQuote() + rd(conj) + ' ' + shortQuote());
}

function swapQuote() {
  var rand = Math.floor(Math.random() * sing.length);
  return rd(phrases).replace('!@@', oppSing[rand]).replace('@@', sing[rand]).replace(/##/g, rd(verb));
}

var gen = [shortQuote, swapQuote /*, genTone*/];
