var fracCount = [];
var raceCount = [];
var leadCount = [];
var unitCount = [];



var menuFraction = document.createElement("li");
menuFraction.classList.add("first-menu", "menu-list");
var pFrac = document.createElement('p');
menuFraction.appendChild(pFrac);
pFrac.innerHTML = "Fraction";
var menuUlInLiFrac = document.createElement("ul");
menuUlInLiFrac.classList.add("menu-drop");
menuFraction.appendChild(menuUlInLiFrac);
var menuUl = document.getElementsByClassName("menu")[0];
menuUl.appendChild(menuFraction);

var menuRace = document.createElement("li");
menuRace.classList.add("first-menu", "menu-list");
var pRace = document.createElement('p');
menuRace.appendChild(pRace);
pRace.innerHTML = "Race";
var menuUlInLiRace = document.createElement("ul");
menuUlInLiRace.classList.add("menu-drop");
menuRace.appendChild(menuUlInLiRace);
menuUl.appendChild(menuRace);

var menuLeader = document.createElement("li");
menuLeader.classList.add("first-menu", "menu-list");
var pLead = document.createElement('p');
menuLeader.appendChild(pLead);
pLead.innerHTML = "Leader";
var menuUlInLiLead = document.createElement("ul");
menuUlInLiLead.classList.add("menu-drop");
menuLeader.appendChild(menuUlInLiLead);
menuUl.appendChild(menuLeader);

var menuUnit = document.createElement("li");
menuUnit.classList.add("first-menu", "menu-list");
var pUnit = document.createElement('p');
menuUnit.appendChild(pUnit);
pUnit.innerHTML = "Unit";
var menuUlInLiUnit = document.createElement("ul");
menuUlInLiUnit.classList.add("menu-drop");
menuUnit.appendChild(menuUlInLiUnit);
menuUl.appendChild(menuUnit);

var blockInfo = document.createElement("li");
blockInfo.classList.add("block-info");
menuUl.appendChild(blockInfo);
var divInfo = document.createElement('div');
divInfo.classList.add("div-info");
blockInfo.appendChild(divInfo);




class Fraction {
    constructor(fraction, img) {
        this.fraction = fraction;
        this.img = img;
        this.getFraction();
        this.addCount();
        this.createLi();
    }

    getFraction() {
        return this.fraction;

    }

    createLi() {
        var fracLi = document.createElement("li");
        var par = document.createElement('p');
        par.innerHTML = this.fraction;
        fracLi.appendChild(par);
        menuUlInLiFrac.appendChild(fracLi);
        fracLi.onclick =()=> {OnClick(this)};


    }

    addCount() {
        fracCount.push(this);
    }
}

class Race {
    constructor(raceName, fraction, leader, img) {
        this.raceName=raceName;
        this.fraction = fraction;
        this.leader = leader;
        this.img = img;
        this.addCount();
        this.getFraction();
        this.createLi();
        this.getRaceName();
    }
    getFraction(){
        return this.fraction;
    }
    getRaceName(){
        return this.raceName;
    }
    addCount(){
        raceCount.push(this);
    }
    createLi(){
        var raceLi = document.createElement("li");
        var par = document.createElement('p');
        par.innerHTML = this.raceName;
        raceLi.appendChild(par);
        menuUlInLiRace.appendChild(raceLi);
        raceLi.onclick =()=> {OnRaceClick(this)};

    }
}
class Leader {
    constructor(name, race, fraction, img) {
        this.name = name;
        this.race = race;
        this.fraction = fraction;
        this.img = img;
        this.createLi();
        this.addCount();
        this.getLeadName();
        this.getFraction();
    }
    getFraction(){
        return this.fraction;
    }
    getLeadName(){
        return this.name;
    }
    addCount(){
        leadCount.push(this);
    }
    createLi(){
        var leadLi = document.createElement("li");
        var par = document.createElement('p');
        par.innerHTML = this.name;
        leadLi.appendChild(par);
        menuUlInLiLead.appendChild(leadLi);
        leadLi.onclick =()=> {OnClickLead(this)};
    }
}/*=========================UNIT========================*/
console.log(unitCount)
class Unit {
    constructor(master, fraction, name, img){
        this.master = master;
        this.fraction = fraction;
        this.name = name;
        this.img =img;
        this.createLi();
        this.addCount();
        this.getUnit();
        this.getFraction();
    }
    getFraction(){
        return this.fraction;
    }
    getUnit(){
        return this.name;
    }
    addCount(){
        unitCount.push(this);
    }
    createLi(){
        var unitLi = document.createElement("li");
        var par = document.createElement('p');
        par.innerHTML = this.name;
        unitLi.appendChild(par);
        menuUlInLiUnit.appendChild(unitLi);
        unitLi.onclick =()=> {
            console.log(this)
            OnClickUnit(this)};

        }
    }

    let alliance = new Fraction("Alliance", "img/alliance.png");
    let horde = new Fraction("Horde", "img/horde.png");
    let human = new Race("Human", "Alliance", "Varian", "img/human_emblem.png");
    let orc = new Race("Orc", "Horde", "Thrall", "img/orc-emblem.png");
    let drenei = new Race("Drenei", "Alliance", "Velen", "img/drenei_emblem.png");
    let tauren = new Race("Tauren", "Horde", "Bein", "img/tauren_emblem.png");
    let dwarf = new Race("Dwarf", "Alliance", "Bronzebeard", "img/dwarf_emblem.png");
    let undead = new Race("Undead", "Horde", "Sylvana", "img/undead_emblem.png");
    let varian = new Leader("Varian", "Human","Alliance", "img/Varian.jpg");
    let thrall = new Leader("Thrall", "Ork", "Horde", "img/thrall.jpg");
    let velen = new Leader("Velen", "Drenei", "Alliance", "img/velen.jpg");
    let bein = new Leader("Bein", "Tauren", "Horde", "img/bein.jpg");
    let bronzebeard = new Leader("Bronzebeard", "Dwarf", "Alliance", "img/bronzebeard.jpg");
    let sylvana = new Leader("Sylnava", "Undead", "Horde", "img/Sylvana.jpg");

    let durotan = new Unit("Thrall", "Horde", "Durotan", "img/durotan.jpg");
    let orgrim = new Unit("Thrall", "Horde", "Orgrim", "img/orgrim.jpg");

    let kern = new Unit("Bein", "Horde", "Kern", "img/kern.jpg");
    let voldgin = new Unit("Bein", "Horde", "Voldgin", "img/voldgin.jpg");

    let keltalas  = new Unit("Sylvana","Horde", "Keltalas", "img/keltalas.jpg");
    let nerzhul = new Unit("Sylvana","Horde", "Nerzhul", "img/nerzhul.jpg");

    let anduin = new Unit("Varian","Alliance", "Anduin", "img/anduin.jpg");
    let bolvar  = new Unit("Varian","Alliance", "Bolvar", "img/bolvar.jpg");

    let genn  = new Unit("Velen","Alliance", "Genn", "img/genn.jpg");
    let irel  = new Unit("Velen","Alliance", "Irel", "img/irel.png");

    let loken  = new Unit("Bronzebeard","Alliance", "Loken", "img/loken.jpg");
    let yorg  = new Unit("Bronzebeard","Alliance", "Yorg", "img/yorg.jpg");


function OnClick(e) {
    divInfo.innerHTML = "";
    var pElem = document.createElement("p");
    pElem.setAttribute("id", "pInfo");
    pElem.innerHTML = e.fraction;
    divInfo.appendChild(pElem);
    var imgInfo = document.createElement('div');
    imgInfo.setAttribute("id", "imgInfo");
    imgInfo.style.backgroundImage = "url('"+e.img+"')";
    divInfo.appendChild(imgInfo);
    var headRace = document.createElement('span');
    headRace.classList.add("text-info");
    headRace.innerHTML = 'Races: ';
    divInfo.appendChild(headRace);

    for (var key in raceCount) {
        if (e.fraction === raceCount[key].fraction) {
            var divRace = document.createElement('div');
            divRace.classList.add("divRace");
            divRace.innerHTML = "&nbsp;" + raceCount[key].getRaceName();
            divInfo.appendChild(divRace)
        }
    }
    divInfo.appendChild(document.createElement('br'));
    var headLead = document.createElement('span');
    headLead.classList.add("text-info");
    headLead.innerHTML = 'Leaders: ';
    divInfo.appendChild(headLead);
    for (var key in leadCount) {
        if (e.fraction === leadCount[key].fraction) {
            var divLead = document.createElement('div');
            divLead.classList.add("divRace");
            divLead.innerHTML = "&nbsp;" + leadCount[key].getLeadName();
            divInfo.appendChild(divLead)
        }
    }
    divInfo.appendChild(document.createElement('br'));
    var headUnit = document.createElement('span');
    headUnit.classList.add("text-info");
    headUnit.innerHTML = 'Units: ';
    divInfo.appendChild(headUnit);
    for (var key in unitCount) {
        if (e.fraction === unitCount[key].fraction) {
            var divUnit = document.createElement('div');
            divUnit.classList.add("divRace");
            divUnit.innerHTML = "&nbsp;" + unitCount[key].getUnit();
            divInfo.appendChild(divUnit);
        }
    }
}

    function OnClickUnit(e) {
        divInfo.innerHTML = "";
        var pElem = document.createElement("p");
        pElem.setAttribute("id", "pInfo");
        pElem.innerHTML = e.name;
        divInfo.appendChild(pElem);
        var imgInfo = document.createElement('div');
        imgInfo.setAttribute("id", "imgInfo");
        imgInfo.style.backgroundImage = "url('"+e.img+"')";
        divInfo.appendChild(imgInfo);
        var headRace = document.createElement('span');
        headRace.classList.add("text-info");
        headRace.innerHTML = 'Fraction: ';
        divInfo.appendChild(headRace);

        var divRace = document.createElement('div');
        divRace.classList.add("divRace");
        divRace.innerHTML = "&nbsp;" + e.fraction;
        divInfo.appendChild(divRace)


        divInfo.appendChild(document.createElement('br'));
        var headLead = document.createElement('span');
        headLead.classList.add("text-info");
        headLead.innerHTML = 'Leader: ';
        divInfo.appendChild(headLead);

        var divLead = document.createElement('div');
        divLead.classList.add("divRace");
        divLead.innerHTML = "&nbsp;" + e.master;
        divInfo.appendChild(divLead)
    }
function OnRaceClick(raceObj) {
    console.log(raceObj);
    divInfo.innerHTML = "";

    var pElem = document.createElement("p");
    pElem.setAttribute("id", "pInfo");
    pElem.innerHTML = raceObj.raceName;
    divInfo.appendChild(pElem);

    var imgInfo = document.createElement('div');
    imgInfo.setAttribute("id", "imgInfo");
    imgInfo.style.backgroundImage = "url('"+raceObj.img+"')";
    divInfo.appendChild(imgInfo);

    var headRace = document.createElement('span');
    headRace.classList.add("text-info");
    headRace.innerHTML = 'Fraction: ';
    divInfo.appendChild(headRace);
    var divRace = document.createElement("div");
    divRace.classList.add("divRace");
    divRace.innerHTML = raceObj.fraction;
    divInfo.appendChild(divRace);

    divInfo.appendChild(document.createElement('br'));
    headRace = document.createElement('span');
    headRace.classList.add("text-info");
    headRace.innerHTML = 'Leader: ';
    divInfo.appendChild(headRace);
    divRace = document.createElement("div");
    divRace.classList.add("divRace");
    divRace.innerHTML = raceObj.leader;
    divInfo.appendChild(divRace);

    divInfo.appendChild(document.createElement('br'));
    var headUnit = document.createElement('span');
    headUnit.classList.add("text-info");
    headUnit.innerHTML = 'Units: ';
    divInfo.appendChild(headUnit);
    for (var key in unitCount) {
        if (raceObj.leader === unitCount[key].master) {
            var divUnit = document.createElement('div');
            divUnit.classList.add("divRace");
            divUnit.innerHTML = "&nbsp;" + unitCount[key].getUnit();
            divInfo.appendChild(divUnit);
        }
    }
}

function OnClickLead(e) {
    divInfo.innerHTML = "";
    var pElem = document.createElement("p");
    pElem.setAttribute("id", "pInfo");
    pElem.innerHTML = e.name;
    divInfo.appendChild(pElem);
    var imgInfo = document.createElement('div');
    imgInfo.setAttribute("id", "imgInfo");
    imgInfo.style.backgroundImage = "url('"+e.img+"')";
    divInfo.appendChild(imgInfo);
    var headRace = document.createElement('span');
    headRace.classList.add("text-info");
    headRace.innerHTML = 'Fraction: ';
    divInfo.appendChild(headRace);
    var divRace = document.createElement('div');
    divRace.classList.add("divRace");
    divRace.innerHTML = "&nbsp;" + e.fraction;
    divInfo.appendChild(divRace);
    divInfo.appendChild(document.createElement('br'));
    var headLead = document.createElement('span');
    headLead.classList.add("text-info");
    headLead.innerHTML = 'Race: ';
    divInfo.appendChild(headLead);
    var divLead = document.createElement('div');
    divLead.classList.add("divRace");
    divLead.innerHTML = "&nbsp;" + e.race;
    divInfo.appendChild(divLead);

    divInfo.appendChild(document.createElement('br'));
    var headUnit = document.createElement('span');
    headUnit.classList.add("text-info");
    headUnit.innerHTML = 'Units: ';
    divInfo.appendChild(headUnit);
    for (var key in unitCount) {
        if (e.name === unitCount[key].master) {
            var divUnit = document.createElement('div');
            divUnit.classList.add("divRace");
            divUnit.innerHTML = "&nbsp;" + unitCount[key].name;
            divInfo.appendChild(divUnit);
        }
    }
}









