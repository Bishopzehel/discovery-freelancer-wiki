const FACTIONS = [
  {id:"lp",name:"Liberty Police",region:"liberty",icon:"🚔",color:"#1f3a5f",weapons:["Laser","Plasma"],ships:["Defender","Patriot","Eagle"],rep:"Liberty",desc:"Law enforcement of Liberty space. Laser & Plasma tech."},
  {id:"ln",name:"Liberty Navy",region:"liberty",icon:"⚓",color:"#1f2d4a",weapons:["Laser","Plasma","Particle"],ships:["Defender","Patriot","Eagle","Sabre"],rep:"Liberty",desc:"Military arm of Liberty. Access to Particle weapons alongside standard tech."},
  {id:"lsc",name:"Liberty Security Force",region:"liberty",icon:"🛡️",color:"#1a2a40",weapons:["Laser","Plasma"],ships:["Defender","Patriot"],rep:"Liberty",desc:"Elite counter-terrorism division. Operates in core Liberty systems."},
  {id:"kp",name:"Kusari Police",region:"kusari",icon:"🎌",color:"#1f3a1f",weapons:["Photon","Neutron"],ships:["Kusari Fighter","Drake","Crow"],rep:"Kusari",desc:"Kusari law enforcement. Photon & Neutron energy weapons."},
  {id:"kn",name:"Kusari Naval Forces",region:"kusari",icon:"⚔️",color:"#1a301a",weapons:["Photon","Neutron","Pulse"],ships:["Kusari Fighter","Drake","Crow","Hammerhead"],rep:"Kusari",desc:"Kusari military. Advanced Pulse access alongside standard tech."},
  {id:"rp",name:"Rheinland Police",region:"rheinland",icon:"🦅",color:"#3a1f1f",weapons:["Tachyon","Plasma"],ships:["Valkyrie","Sabre","Falcon"],rep:"Rheinland",desc:"Rheinland law enforcement. Tachyon-based tech preferred."},
  {id:"rm",name:"Rheinland Military",region:"rheinland",icon:"🎖️",color:"#2a1a1a",weapons:["Tachyon","Plasma","Particle"],ships:["Valkyrie","Sabre","Falcon","Titan"],rep:"Rheinland",desc:"Rheinland armed forces. Full Tachyon and Particle access."},
  {id:"bp",name:"Bretonia Police",region:"bretonia",icon:"👑",color:"#3a301a",weapons:["Laser","Pulse"],ships:["Crusader","Cavalier","Hellfire"],rep:"Bretonia",desc:"Bretonia law enforcement. Laser-based with Pulse secondary."},
  {id:"ba",name:"Bretonia Armed Forces",region:"bretonia",icon:"🏹",color:"#2a2010",weapons:
