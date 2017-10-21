
design = [
  'a site',
 'a meal',
 'an outfit',
 'an app',
 'an object',
'a brand',
];

function randomDesign() {
  document.getElementById("textbox").value = design[Math.floor(Math.random() * design.length)];
}



inspire = [
  'cruves',
 'shapes',
 'animals',
 'foods from spain',
 'trump',
'camera',
];

function randomInspire() {
  document.getElementById("textbox2").value = inspire[Math.floor(Math.random() * inspire.length)];
}



that = [
  'responsive',
 'interesting',
 'tactical',
 'immersive',
 'approachable',
'trusting',
];

function randomThat() {
  document.getElementById("textbox3").value = that[Math.floor(Math.random() * that.length)];
}



through = [
  'hardware hacks',
 'wireframe',
 'patterns',
 'materials',
 'personas',
'texture',
];

function randomThrough() {
  document.getElementById("textbox4").value = through[Math.floor(Math.random() * through.length)];
}



using = [
  'video',
 'code',
 'pen and paper',
 'existing objects',
 'fabric',
'collage',
];

function randomUsing() {
  document.getElementById("textbox5").value = using[Math.floor(Math.random() * using.length)];
}

