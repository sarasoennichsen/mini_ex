var lexicon;
var t = "Two households, both alike in dignity,\nIn fair Verona, where we lay our scene,\nFrom ancient grudge break to new mutiny,\nWhere civil blood makes civil hands unclean\.\nFrom forth the fatal loins of these two foes\nA pair of star-cross\'d lovers take their life\;\nWhose misadventured piteous overthrows\nDo with their death bury their parents\' strife.\nThe fearful passage of their death\-mark\'d love,\nAnd the continuance of their parents\' rage,\nWhich, but their children\'s end, nought could remove,\nIs now the two hours\' traffic of our stage\;\nThe which if you with patient ears attend,\nWhat here shall miss, our toil shall strive to mend.\n";
var button;

function setup() {
	createCanvas(500, 500);
	background(250);
	lexicon = new RiLexicon();
	
  fill(0);
  textSize(16);
  textLeading(25);
  text(t, 50, 30);
  
	button = createButton('click me');
	button.position(50, 380);
	button.mousePressed(processRita);

}



function processRita() {
  var rs = new RiString(t);
  var words = rs.words();
  var pos = rs.pos();
  console.log(pos);
  
  var output ='';
  for(var i = 0; i < words.length; i++) {
    if (/nn.*/.test(pos[i])) {
      output += lexicon.randomWord(pos[i]);
      
    } else {
    output += words[i];
    }
    
    output += " ";
  }
  createP(output);
  
  
}