//Create objects for common properties across available frames
var masks = [{src:'/img/frames/dmu/stainedGlass/rules.svg', name:'Rules'}];
var masks2 = [{src:'/img/frames/dmu/stainedGlass/crown.svg', name:'Inner Crown'}];
var bounds = {x:0.7747, y:0.8872, width:0.1747, height:0.0605};
var bounds2 = {x:0.1134, y:0.0139, width:0.7734, height:0.0262};
//defines available frames
availableFrames = [
	{name:'Artifact Frame', src:'/img/frames/seventh/regular/a.png', masks:masks}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'brrRetroArtifact';
	//art bounds
	card.artBounds = {x:0.04, y:0.1105, width:0.92, height:0.4462};
	autoFitArt(); 
	//set symbol bounds
	card.setSymbolBounds = {x:0.9213, y:0.574, width:0.12, height:0.0410, vertical:'center', horizontal: 'right'};
	resetSetSymbol();
	//watermark bounds
	card.watermarkBounds = {x:0.5, y:0.7762, width:0.75, height:0.2305};
	resetWatermark();
	//text
	loadTextOptions({
		mana: {name:'Mana Cost', text:'', x:0.1067, y:0.0539, width:0.8174, height:72/2100, oneLine:true, size:72/1638, align:'right', manaCost:true},
		title: {name:'Title', text:'', x:0.1134, y:0.0481, width:0.7734, height:0.041, oneLine:true, font:'goudymedieval', size:0.041, color:'white', shadowX:0.002, shadowY:0.0015},
		type: {name:'Type', text:'', x:0.1074, y:0.5486, width:0.7852, height:0.0543, oneLine:true, size:0.032, color:'white', shadowX:0.002, shadowY:0.0015},
		rules: {name:'Rules Text', text:'', x:0.128, y:0.6067, width:0.744, height:0.2724, size:0.0358},
		pt: {name:'Power/Toughness', text:'', x:0.8074, y:0.9043, width:0.1367, height:0.0429, size:0.0429, oneLine:true, align:'center', color:'white', shadowX:0.002, shadowY:0.0015}
	});
	//bottom info
	loadBottomInfo({
		top: {text:'Illus. {elemidinfo-artist}', x:0.099, y:1885/2100, width:0.8, height:0.0267, oneLine:true, size:0.03, align:'center', shadowX:0.0021, shadowY:0.0015, color:'white'},
		wizards: {name:'wizards', text:'\u2122 & \u00a9 {elemidinfo-year} Wizards of the Coast {elemidinfo-number}', x:0.1, y:1950/2100, width:0.8, height:0.0172, oneLine:true, size:0.0172, align:'center', shadowX:0.0014, shadowY:0.001, color:'white'},
	});
	
}
//loads available frames
loadFramePack();