starTypes = Array("Type A", "Type F", "Type G", "Type K", "Type M", "Type L")
orbitTypes = Array("Tight orbit", "Close orbit", "Moderate orbit", "Distant orbit")
planetTypes = Array("Asteroid Belt", "Dwarf Planet", "Terrestrial Planet", "Helian Planet", "Jovian Planet", "Companion Star")

starportTypes = Array("X", "E", "D", "C", "B", "A")
starportDetails = Array("No Starport. No provision is made for any ship landings. ", "Frontier Installation. Essentially a marked spot of\nbedrock with no fuel, facilities, or bases present.", "Poor Quality. Only unrefined fuel available. No repair\nfacilities present.", "Routine Quality. Only unrefined fuel available. Reasonable\nrepair facilities present.", "Good Quality. Refined fuel available. Annual maintenance\noverhaul available. Shipyard capable of constructing non-starships present.", "Excellent Quality. Refined fuel available. Annual\nmaintenance overhaul available. Shipyard capable of constructing starships and\nnon-starships present.")

sizeDetails = Array("800 km", "1,600 km", "3,200 km", "4,800 km", "6,400 km", "8,000 km", "9,600 km", "11,200 km", "12,800 km", "14,400 km", "16,000 km")
gravDetails = Array("Negligible", "0.05G", "0.15G", "0.25G", "0.35G", "0.45G", "0.7G", "0.9G", "1.0G", "1.25G", "1.4G")
gDetails = Array(0.0, 0.05, 0.15, 0.25, 0.35, 0.45, 0.7, 0.9, 1.0, 1.25, 1.4)
tl = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")

atmosphereDetails = Array("None", "Trace", "Very Thin, Tainted", "Very Thin", "Thin, Tainted", "Thin", "Standard", "Standard, Tainted", "Dense", "Dense, Tainted", "Exotic", "Corrosive", "Insidious", "Dense", "Thin", "Unusual")
atmospherePressureDetails = Array("0.00", "0.001 to 0.09", "0.1 to 0.42", "0.1 to 0.42", "0.43 to 0.7", "0.43 to 0.7", "0.71 to 1.49", "0.71 to 1.49", "1.5 to 2.5", "1.5 to 2.5", "Varies", "Varies", "Varies", "High", "Low", "Varies", "Varies")
atmosphereEquipmentDetails = Array("Vacc Suit", "Vacc Suit", "Respirator, Filter", "Respirator", "Respirator, Filter", "Respirator", "", "Filter", "", "Filter", "Air Supply", "Vacc Suit", "Vacc Suit", "Pressure Suit", "Vacc Suit", "Varies")

hydroDetails= Array("Desert World", "Dry World", "A few small seas", "Small to medium seas", "Wet World", "Large Oceans", "Small seas and oceans.", "Earth-like world", "Water World", "A few small islands and archipelagos", "Almost Entirely Water")
hydroRangeDetails= Array("0% - 5%", "6% - 15%", "16% - 25%", "26% - 35%", "36% - 45%", "46% - 55%", "56% - 65%", "66% - 75%", "76% - 85%", "86% - 95%", "96% - 100%", 100, "Almost Entirely Water")

populationDetail = Array(10, 100, 1000, " 10,000 ", " 100,000 ", " 1,000,000 ", " 10,000,000 ", " 100,000,000 ", " 1,000,000,000 ", " 10,000,000,000 ")

govDetails = Array("None", "Company/Corporation ", "Participating Democracy ", "Self-Perpetuating Oligarchy ", "Representative Democracy ", "Feudal Technocracy ", "Captive Government ", "Balkanisation ", "Civil Service Bureaucracy ", "Impersonal Bureaucracy ", "Charismatic Dictator ", "Non-Charistmatic Dictator ", "Charismatic Oligarchy ", "Religious Dictatorship ")

lawDetails = Array("No Restrictions", "No poison gas, explosives, undetectable weapons, or WMD", "No portable energy weapons (except ship-mounted weapons)", "No heavy weapons", "No light assault weapons or submachine guns", "No personal concealable weapons", "No firearms except shotguns and stunners; carrying weapons discouraged", "Only stunners allowed; carrying weapons discouraged", "Bladed weapons allowed, no firearms at all", "No weapons of any sort")

techDetails = Array("No technology", "Roughly on a par with Bronze or Iron age technology.", "Renaissance technology.", "The germ of industrial revolution and steam power.", "The transition to industrial revolution is complete, bringing plastics, radio and other such inventions.", "Widespread electrification, telecommunications and internal combustion.", "Fission power and more advanced computing.", "A pre-stellar society can reach orbit reliably and has telecommunications satellites.", "At TL 8, it is possible to reach other worlds in the same system, although\nterraforming or full colonisation are not within reach.", "Gravity manipulation, which makes space travel vastly safer and faster.", "With the advent of Jump, nearby systems are opened up.", "The first true artificial intelligences become possible, as computers are\nable to model synaptic networks.", "Weather control revolutionises terraforming and agriculture.", "The battle dress appears on the battlefield in response to the new\nweapons.", "Fusion weapons become man-portable.", "Black globe generators suggest a new direction for defensive technologies,\nwhile the development of synthetic anagathics means that the human lifespan is\nnow vastly increased. Higher Technology Levels exist and\nmay appear in other settings or be discovered by pioneering scientists.", "Antimatter engines allow much longer jumps (J-8) with reasonable cargo, counter weapons and shields improve,\npowered/active armor increases durability, communications equivalent to\npersonal telepathy and good shielding", "All engines are compact, take fewer engineers, and perform extremely well,\nup to J-12 and M-16, P-18, human multiplicity physically and virtually is\ncommon, super-intelligent AI, low berths are 0 risk and cure\nalmost all cancers and diseases, forms are mutable.", "Speculative, J-16, M-20, P-24, extremely good armor, black globe with\ncomplete variability control and huge storage, capital ships can use black\nglobes to power outrageous arsenals.", "J-20, J-30 when not near massive objects, J-40 with obscure psionics\nintegrated into production and operation of engines and ships. Resurections,\nbackups, robo/physical/virtual multi-embodiement with merged\nconsciousness, meta-human groupings with others for even larger merged consciousnesses.\nImmunity to pretty much every form of death.")
techRange = Array("Primitive", "Primitive", "Primitive", "Primitive", "Industrial", "Industrial", "Industrial", "Pre-Stellar", "Pre-Stellar", "Pre-Stellar", "Early Stellar", "Early Stellar", "Average Stellar", "Average Stellar", "Average Stellar", "High Stellar", "High Stellar", "Low Sector", "Average Sector", "High Sector")

tradeCode = Array("Ag", "As", "De", "Fl", "Ga", "Hi", "Ht", "Ic", "In", "Lo", "Lt", "Na", "Ni", "Po", "Ri", "St", "Wa", "Va")
tradeDescription = Array("Agricultural", "Asteroid Belt", "Desert", "Fluid Oceans", "Garden", "High Population", "High Technology", "Ice-Capped", "Industrial", "Low Population", "Low Technology", "Non-Agricultural", "Non-Industrial", "Poor", "Rich", "Sterile", "Water World", "Vacuum")
// System details, determined randomly
column = Array(0)
row = Array(0)
numStars = Array(1)
Moderate_Companion = Array(false)
Distant_Companion = Array(false)
Close_Companion = Array(false)
starsDescription = Array("")
num_GasGiants = Array(0)
num_AsteroidBelts = Array(0)
planetsDescription = Array("")

currentSystem = 0;
// World details, determined randomly
starport = Array(0);
starportCode = Array("X");
uwp = Array("");
systemTradeCodes = Array("");
systemTradeDescriptions = Array("");
size = Array(0);
atmos = Array(0);
hydro = Array(0);
pop = Array(0);
factor = Array(0);
law = Array(0);
gov = Array(0);
splinters = Array(0);
tech = Array(0);
allTradeCodes = Array("");

function generateCanvas(odds) {
    systemIndex = 0;

    for (let i=0; i<8; i++) {
        for (let j=0; j<10; j++) {
            if (variableOdds(odds)) {
                column[systemIndex] = i;
                row[systemIndex] = j;
                generateSystem(systemIndex);
                systemIndex++;
            }
        }
    }
    const myCanvas = document.getElementById('Sector');
    elemLeft = myCanvas.offsetLeft + myCanvas.clientLeft;
    elemTop = myCanvas.offsetTop + myCanvas.clientTop
    const ctx = myCanvas.getContext('2d');
    myCanvas.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
        eCol = Math.floor((x - 38)/60)
        eRow = Math.floor((y - 50)/60.4)
        snum = matchRC(eRow, eCol)
        if (snum > -1) {
            setSystem(snum);
        }
    });
    ctx.font = "13px Arial";
    ctx.fillStyle = "black";
    drawing = new Image();
    drawing.src = "hexagons.png";
    drawing.onload = function() {
        ctx.drawImage(drawing,0,0);
        drawAllUWPs();
    }
}

function drawAllUWPs() {
    const myCanvas = document.getElementById('Sector');
    const ctx = myCanvas.getContext('2d');
    const filter = document.getElementById('filterSelect').value;

    ctx.font = "13px Arial";

    for (let i=0; i<4; i++) {
        for (let j=0; j<10; j++) {
            // rows of hexagons are staggered horizontally,
            // so do the upper one first, add row/column as a hex #
            i2 = i + i;
            i21 = i2 + 1;

            ctx.fillStyle = "black";
            ctx.fillText(" " + j + i2, 38 + i*119, 26 + j*68.8);
            snum = matchRC(j, i2);
            if (snum > -1) {
                // Set color based on filter match
                if (filter && systemTradeCodes[snum].includes(filter)) {
                    ctx.fillStyle = "red";
                } else {
                    ctx.fillStyle = "black";
                }
                ctx.fillText(uwp[snum], 14 + i*119, 50 + j*68.8);
            }

            // Now do the lower one
            ctx.fillStyle = "black";
            ctx.fillText("  " + j + i21, 94 + i*120, 59.7 + j*68.8);
            snum = matchRC(j, i21);
            if (snum > -1) {
                // Set color based on filter match
                if (filter && systemTradeCodes[snum].includes(filter)) {
                    ctx.fillStyle = "red";
                } else {
                    ctx.fillStyle = "black";
                }
                ctx.fillText(uwp[snum], 72 + i*119, 85 + j*68.8);
            }
        }
    }
}

function updateCanvasColors() {
    const myCanvas = document.getElementById('Sector');
    const ctx = myCanvas.getContext('2d');

    // Redraw the background image first to clear old text
    drawing = new Image();
    drawing.src = "hexagons.png";
    drawing.onload = function() {
        ctx.drawImage(drawing,0,0);
        drawAllUWPs();
    }
}


function generateSystem(sysnum) {
    getStarsNum(sysnum);
    getStarsTypes(sysnum);
    getPlanets(sysnum);
    getWorld(sysnum);
}

function setSystem(sysnum) {
    currentSystem = sysnum;
    setStars(sysnum);
    setStarsTypes(sysnum);
    setPlanets(sysnum);
    setWorld(sysnum);
}

function getStarsNum(sysnum) {
    z15 = zero2fifteen()
    switch(true) {
    case z15 > 12:
        numStars[sysnum] = 3
        break;
    case z15 > 7:
        numStars[sysnum] = 2
        break;
    case z15 < 8:
        numStars[sysnum] = 1
    default:
        numStars[sysnum] = 1
        break;
    }
}
function setStars(sysnum) {
    if (numStars[sysnum] == 1) {
        document.getElementById('Stars').innerHTML = "Single Star System, "
    } else if (numStars[sysnum] == 2) {
        document.getElementById('Stars').innerHTML = "Dual Star System, "
    } else {
        document.getElementById('Stars').innerHTML = "Triple Star System, "
    }
}

function getStarsTypes(sysnum) {
    starsDescription[sysnum] = ""
    z10 = zero2ten()
    switch (true) {
    case z10==0:
        starsDescription[sysnum] += starTypes[0]
        break;
    case z10==1:
        starsDescription[sysnum] += starTypes[1]
        break;
    case z10==2:
        starsDescription[sysnum] += starTypes[2]
        break;
    case z10==3:
        starsDescription[sysnum] += starTypes[3]
        break;
    case z10 > 3:
        starsDescription[sysnum] += starTypes[4]
        break;
    default:
        starsDescription[sysnum] += starTypes[3]
        break;
    }
    if (numStars[sysnum] > 1) {
        nextOrbit = "";
        for (i = 1; i < numStars[sysnum]; i++) {
            z5 = zero2five();
            switch (true) {
            case z5 < 2:
                Close_Companion = true
                nextOrbit = orbitTypes[0]
                break;
            case z5 < 4:
                Close_Companion = true
                nextOrbit = orbitTypes[1]
                break;
            case z5 == 4:
                Moderate_Companion = true
                nextOrbit = orbitTypes[2]
                break;
            case z5 > 4:
                Distant_Companion = true
                nextOrbit = orbitTypes[3]
                break;
            default:
                Close_Companion = true
                nextOrbit = orbitTypes[0]
                break;
            }
            switch (zero2five()) {
            case 0:
                starsDescription[sysnum] += ", secondary " + starTypes[0] + " in " + nextOrbit
                break;
            case 1:
                starsDescription[sysnum] += ", secondary " + starTypes[1] + " in " + nextOrbit
                break;
            case 2:
                starsDescription[sysnum] += ", secondary " + starTypes[2] + " in " + nextOrbit
                break;
            case 3:
                starsDescription[sysnum] += ", secondary " + starTypes[3] + " in " + nextOrbit
                break;
            case 4:
            case 5:
            case 6:
                starsDescription[sysnum] += ", secondary " + starTypes[4] + " in " + nextOrbit
                break;
            default:
                starsDescription[sysnum] += ", secondary " + starTypes[3] + " in " + nextOrbit
                break;
            }
        }
    }
}

function setStarsTypes(sysnum) {
    document.getElementById('Stars').innerHTML += starsDescription[sysnum]
}

// that finshes the stars, next are planets and asteroid belts
function getPlanets(sysnum) {
    num_AsteroidBelts = 0;
    planetsDescription[sysnum] = ""
    Epistellar_Planets = 0;
    Inner_Planets = 0;
    Outer_Planet = 0;
    if (Close_Companion) {
        Epistellar_Planets = 0;
	} else {
		Epistellar_Planets = zero2five() - 2;
        if (Epistellar_Planets < 0) {
            Epistellar_Planets = 0;
        }
        if (Epistellar_Planets > 2) {
            Epistellar_Planets = 2;
        }
        if (Epistellar_Planets > 0) {
            planetsDescription[sysnum] += "Epistellar planets:\n";
            for (i=0; i<Epistellar_Planets; i++) {
                getPlanet(sysnum);
            }
        }
    }
    Inner_Planets = zero2five();
    if (Inner_Planets < 0) {
        Inner_Planets = 0;
    }
    if (Inner_Planets > 0) {
        planetsDescription[sysnum] += "Inner planets:\n";
        for (i = 0; i < Inner_Planets; i++) {
            getPlanet(sysnum);
        }
    }

    Outer_Planets = zero2five();
    if (Moderate_Companion) {
        Outer_Planet--
    }
    if (Outer_Planets < 0) {
        Outer_Planets = 0;
    }
    if (Outer_Planets > 0) {
        planetsDescription[sysnum] = planetsDescription[sysnum] + "Outer planets:\n";
        for (i = 0; i < Outer_Planets; i++) {
            getPlanet(sysnum);
        }
    }
}

// get a single planet and its possible satellites
function getPlanet(sysnum) {
    delta = 0
    firstpass = true
    
    z2d = zero2five()
    switch (true) {
    case z2d < 1:
        if (zero2five() > 3) {
            planetsDescription[sysnum] += planetTypes[0] + " Mostly Dwarf planetoids, one " + planetTypes[1] + "\n";
            num_AsteroidBelts++
        } else {
            planetsDescription[sysnum] += planetTypes[0] + "\n";
            num_AsteroidBelts++
        }
        break;
    case z2d == 1:
        if (zero2five() > 4) {
            planetsDescription[sysnum] += planetTypes[1], " Satellite " + planetTypes[1] + "\n";
        } else {
            planetsDescription[sysnum] += planetTypes[1] + "\n";;
        }
        break;
    case z2d == 2:
        if (zero2five() > 3) {
            planetsDescription[sysnum] += planetTypes[2] + " Satellite " + planetTypes[1] + "\n";
        } else {
            planetsDescription[sysnum] += planetTypes[2] + "\n";
        }
        break;
    case z2d == 3:
        numSat = zero2five() - 2
        if (numSat < 0) {
            numSat = 0
        }

        if (numSat > 0) {
            if (zero2five() < 5) {
                // All satelites are dwarfs
                if (numSat == 1) {
                    planetsDescription[sysnum] += planetTypes[3] + " Sattelite " + planetTypes[1] + "\n";
                } else {
                    planetsDescription[sysnum] += planetTypes[3] + " Sattelite " + planetTypes[1] + numSat + "x " + planetTypes[1] + "\n";
                }
            } else {
                // One satellite is terrestrial
                if (numSat == 1) {
                    planetsDescription[sysnum] += planetTypes[3] + " Satellite " + planetTypes[1]  + "\n";
                } else if (numSat == 2) {
                    planetsDescription[sysnum] += planetTypes[3] + " Satellite " + planetTypes[2] + " & " + planetTypes[1] + "\n";
                } else {
                    planetsDescription[sysnum] += planetTypes[3] + " Satellite " + planetTypes[2] + numSat + "x " + planetTypes[1] + "\n";
                }
            }
        } else {
            planetsDescription[sysnum] += planetTypes[3] + "\n";
        }
        break;
    case z2d < 7:
        numSat = zero2five() + 1
        if (zero2five() < 5) {
            // All satelites are dwarfs
            if (numSat == 1) {
                planetsDescription[sysnum] += planetTypes[4] + " Sattelite " + planetTypes[1] + "\n";
                num_GasGiants++
            } else {
                planetsDescription[sysnum] += planetTypes[4] + " Satellite " + numSat + "x " + planetTypes[1] + "\n";
                num_GasGiants++
            }
        } else {
            // One satellite is terrestrial
            if (numSat == 1) {
                planetsDescription[sysnum] += planetTypes[4] + " Satellite " + planetTypes[2] + "\n";
                num_GasGiants++
            } else if (numSat == 2) {
                planetsDescription[sysnum] += planetTypes[4] + " Satellites " + planetTypes[2] + " & " + planetTypes[1] + "\n";
                num_GasGiants++
            } else {
                planetsDescription[sysnum] += planetTypes[4] + " Sattelites " + planetTypes[2] + " & " + numSat + "x " + planetTypes[1] + "\n";
                num_GasGiants++
            }
        }
        break;
    default:
        if (zero2five() > 3) {
            planetsDescription[sysnum] += planetTypes[2], " Satellite " + planetTypes[1] + "\n";
        } else {
            planetsDescription[sysnum] += planetTypes[2] + "\n";
        }
        break;
    }
}

// set a single planet and its possible satellites in the GUI
function setPlanets(sysnum) {
    document.getElementById('Planets').innerHTML = planetsDescription[sysnum]
}

function getWorld(sysnum) {
    getStarport(sysnum)
    getSize(sysnum)
    getAtmosphere(sysnum)
    getHydrology(sysnum)
    getPopulation(sysnum)
    getGovernment(sysnum)
    getLaw(sysnum)
    getTech(sysnum)
    getCodes(sysnum)
    getUWP(sysnum)
}


function setWorld(sysnum) {
    setLocation(sysnum)
    setStarport(sysnum)
    setSize(sysnum)
    setAtmosphere(sysnum)
    setHydrology(sysnum)
    setPopulation(sysnum)
    setGovernment(sysnum)
    setLaw(sysnum)
    setTech(sysnum)
    setCodes(sysnum)
    setUWP(sysnum)
}

function setLocation(sysnum) {
    document.getElementById('Location').innerHTML = "Location row " + row[sysnum] + ", column " + column[sysnum];
}

function getStarport(sysnum) {
    switch (zero2ten()) {
    case 0:
        starport[sysnum] = 0
    case 1:
    case 2:
        starport[sysnum] = 1
    case 3:
    case 4:
        starport[sysnum] = 2;
        break;
    case 5:
    case 6:
        starport[sysnum] = 3;
        break;
    case 7:
    case 8:
        starport[sysnum] = 4;
        break;
    case 9:
    case 10:
    case 11:
        starport[sysnum] = 5;
        break;
    default:
        starport[sysnum] = 3;
        break;
    }
    starportCode = starTypes[starport[sysnum]];
}

function setStarport(sysnum) {
    document.getElementById('Port').innerHTML = "Starport type " + starportTypes[starport[sysnum]] + ", " + starportDetails[starport[sysnum]];
}

function getSize(sysnum) {
	size[sysnum] = zero2ten();
}

function setSize(sysnum) {
	document.getElementById('Size').innerHTML = "Size " + tl[size[sysnum]] + ", " + sizeDetails[size[sysnum]] + ", gravity " + gravDetails[size[sysnum]];
}

function getAtmosphere(sysnum) {
	atmos[sysnum] = zero2ten() + size[sysnum] - 5;
    if (atmos[sysnum] < 0) {atmos[sysnum] = 0;}
    if (atmos[sysnum] > 15) {atmos[sysnum] = 15;}
}

function setAtmosphere(sysnum) {
	document.getElementById('Atmos').innerText = "Atmosphere " + tl[atmos[sysnum]] + ", " + atmosphereDetails[atmos[sysnum]] + ", pressure " + atmospherePressureDetails[atmos[sysnum]] + ", equipment required: " + atmosphereEquipmentDetails[atmos[sysnum]];
}

function getHydrology(sysnum) {
    if (size < 2) {
        hydro[sysnum] = 0;
    } else {
        hydro[sysnum] = zero2ten() - 5 + size[sysnum];
        switch (atmos[sysnum]) {
        case 0:
        case 1:
        case 10:
        case 11:
        case 12:
            hydro[sysnum] = hydro[sysnum] - 4
            break;
        }
        if (hydro[sysnum] < 0) {
            hydro[sysnum] = 0
        }
        if (hydro[sysnum] > 10) {
            hydro[sysnum] = 10
        }
    }
}

function setHydrology(sysnum) {
    document.getElementById('Hydro').innerText = "Hydrology " + tl[hydro[sysnum]] + ", " + hydroDetails[hydro[sysnum]] + ", covering " + hydroRangeDetails[hydro[sysnum]] + " of the surface"
}

function getPopulation(sysnum) {
    pop[sysnum] = zero2ten()
    if (pop[sysnum] > 0) {
        factor[sysnum] = one2nine1d()
    }
}

function setPopulation(sysnum) {
    if (pop[sysnum] == 0) {
        document.getElementById('Pop').innerText = "Population " + tl[pop[sysnum]] + " - Unpopulated"
    } else {
        document.getElementById('Pop').innerText = "Population " + tl[pop[sysnum]] + " - " + populationDetail[pop[sysnum]-1] + " times " + factor[sysnum]
    }
}

function getGovernment(sysnum) {
    gov[sysnum] = zero2ten() - 5 + pop[sysnum]
    if (gov[sysnum] < 0) {
        gov[sysnum] = 0
    } else if (gov[sysnum] > 13) {
        gov[sysnum] = 13
    }
}

function setGovernment(sysnum) {
    document.getElementById('Gov').innerText = "Government " + tl[gov[sysnum]] + " - " + govDetails[gov[sysnum]]
}

function getLaw(sysnum) {
    law[sysnum] = zero2ten() - 7 + gov[sysnum]
    if (law[sysnum] < 0) {
		law[sysnum] = 0
    }
}

function setLaw(sysnum) {
    document.getElementById('Law').innerText = "Law Level " + tl[law[sysnum]] + " - " + lawDetails[law[sysnum]]
}

function getTech(sysnum) {
    tech[sysnum] = zero2five() + 1; // in other words a 1D6
	switch (starport[sysnum]) {
    case 0:
        tech[sysnum] -= 4;
        break;
    case 3:
        tech[sysnum] += 2;
        break;
    case 4:
        tech[sysnum] += 4;
        break;
    case 5:
        tech[sysnum] += 6;
        break;
    }
    if (size[sysnum] < 2) {
		tech[sysnum] += 2;
	} else if (size[sysnum] < 5) {
		tech[sysnum] += 1;
    }
    if (atmos[sysnum] < 4) {
        tech[sysnum] += 1;
    } else if (atmos[sysnum] > 9) {
        tech[sysnum] += 1;
    }
    if (hydro[sysnum] == 0 || hydro[sysnum] == 9) {
		tech[sysnum]++;
	} else if (hydro[sysnum] == 10) {
		tech[sysnum] += 2;
    }
    if (pop[sysnum] < 6 || pop[sysnum] == 9) {
        tech[sysnum]++;
    } else if (pop[sysnum] == 10) {
        tech[sysnum] += 2;
    } else if (pop[sysnum] == 11) {
        tech[sysnum] += 3;
    } else if (pop[sysnum] == 12) {
        tech[sysnum] += 4;
    } else if (pop[sysnum] == 13) {
        tech[sysnum] += 5;
    } else if (pop[sysnum] == 14) {
        tech[sysnum] += 6;
    }
    if (gov[sysnum] == 0 || gov[sysnum] == 5) {
        tech[sysnum]++;
    } else if (gov[sysnum] == 7) {
        tech[sysnum] += 2;
    } else if (gov[sysnum] == 13 || gov[sysnum] == 14) {
        tech[sysnum] -= 2;
    }
    if (tech[sysnum] < 0) {
        tech[sysnum] = 0;
    }
}

function setTech(sysnum) {
    document.getElementById('Tech').innerText = "Tech Level " + tl[tech[sysnum]] + " (" + techRange[tech[sysnum]] + ") - " + techDetails[tech[sysnum]]
}

// Note that getUWP() is called last, after all the other settings
// are established, so getCodes() (shortly fter this) must be called
// before getUWP(). Ditto all the earlier get*() routines, they go\
// before getUWP() as well.
function getUWP(sysnum) {
    uwp[sysnum] = starportTypes[starport[sysnum]] + tl[size[sysnum]] + tl[atmos[sysnum]] + tl[hydro[sysnum]] + tl[pop[sysnum]] + tl[gov[sysnum]] + tl[law[sysnum]] + "-" + tl[tech[sysnum]];
}

function setUWP(sysnum) {
    document.getElementById('UWP').innerText = "UWP " + uwp[sysnum] + "\nTrade codes: " + systemTradeCodes[sysnum];
}

function getCodes(sysnum) {
    systemTradeCodes[sysnum] = "";
    systemTradeDescriptions[sysnum] = "";
    if (atmos[sysnum] > 3 && atmos[sysnum] < 10 && hydro[sysnum] > 3 && hydro[sysnum] < 9 && pop[sysnum] > 4 && pop[sysnum] < 8) {
        // Agriculture
        systemTradeCodes[sysnum] += tradeCode[0] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[0] + " " + tradeDescription[0] + "\n";
    }
    if (num_AsteroidBelts[sysnum] > 0) {
        // Asteroid Belt(s)
        systemTradeCodes[sysnum] += tradeCode[1] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[1] + " " + tradeDescription[1] + "\n";
    }
    if (atmos[sysnum] > 1 && atmos[sysnum] < 14 && hydro[sysnum] == 0) {
        // Desert
        systemTradeCodes[sysnum] += tradeCode[2] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[2] + " " + tradeDescription[2] + "\n";
    }
    if (atmos[sysnum] > 9 || (hydro[sysnum] > 0 && hydro[sysnum] < 12)) {
        // Fluid Oceans
        systemTradeCodes[sysnum] += tradeCode[3] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[3] + " " + tradeDescription[3] + "\n";
    }
    if (size[sysnum] > 4 && size[sysnum] < 11 && atmos[sysnum] > 3 && atmos[sysnum] < 10 && hydro[sysnum] > 3 && hydro[sysnum] < 9) {
        // Garden
        systemTradeCodes[sysnum] += tradeCode[4] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[4] + " " + tradeDescription[4] + "\n";
    }
    if (pop[sysnum] > 8) {
        // High Population
        systemTradeCodes[sysnum] += tradeCode[5] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[5] + " " + tradeDescription[5] + "\n";
    }
    if (tech[sysnum]  > 9) {
        // High Tech;
        systemTradeCodes[sysnum] += tradeCode[6] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[6] + " " + tradeDescription[6] + "\n";
    }
    if (atmos[sysnum] < 2 && hydro[sysnum] > 0) {
        // Ice Capped
        systemTradeCodes[sysnum] += tradeCode[7] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[7] + " " + tradeDescription[7] + "\n";
    }
    if (pop[sysnum] > 8 && tech[sysnum] > 6) {
        // Industrial
        systemTradeCodes[sysnum] += tradeCode[8] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[8] + " " + tradeDescription[8] + "\n";
    }
    if (pop[sysnum] < 4) {
        // Low Population
        systemTradeCodes[sysnum] += tradeCode[9] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[9] + " " + tradeDescription[9] + "\n";
    }
    if (tech[sysnum] < 6) {
        // Low Tech
        systemTradeCodes[sysnum] += tradeCode[10] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[10] + " " + tradeDescription[10] + "\n";
    }
    if ((atmos[sysnum] < 4 || atmos[sysnum] > 10 || hydro[sysnum] < 4 || hydro[sysnum] > 10) && pop[sysnum] > 5) {
        // Non-Agricultural
        systemTradeCodes[sysnum] += tradeCode[11] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[11] + " " + tradeDescription[11] + "\n";
    }
    if (pop[sysnum]  > 3 && pop[sysnum] < 7) {
        // Non-Industrial
        systemTradeCodes[sysnum] += tradeCode[12] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[12] + " " + tradeDescription[12] + "\n";
    }
    if (atmos[sysnum] > 1 && atmos[sysnum] < 6 && hydro[sysnum] < 4) {
        // Poor
        systemTradeCodes[sysnum] += tradeCode[13] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[13] + " " + tradeDescription[13] + "\n";
    }
    if ((atmos[sysnum] == 6 || atmos[sysnum] == 8) && pop[sysnum] > 5 && pop[sysnum] < 9) {
        // Rich
        systemTradeCodes[sysnum] += tradeCode[14] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[14] + " " + tradeDescription[14] + "\n";
    }
    if (atmos[sysnum] == 0 && hydro[sysnum] == 0) {
        // Sterile
        systemTradeCodes[sysnum] += tradeCode[15] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[15] + " " + tradeDescription[15] + "\n";
    }
    if ((hydro[sysnum] == 10 || hydro[sysnum] == 11) && atmos[sysnum] > 1) {
        // Poor
        systemTradeCodes[sysnum] += tradeCode[16] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[16] + " " + tradeDescription[16] + "\n";
    }
    if (atmos[sysnum] == 0) {
        // Vacuum
        systemTradeCodes[sysnum] += tradeCode[17] + " ";
        systemTradeDescriptions[sysnum] += tradeCode[17] + " " + tradeDescription[17] + "\n";
    }
}

function setCodes(sysnum) {
    document.getElementById('Codes').innerText = systemTradeDescriptions[sysnum]
}

function nextSystem() {
    const filter = document.getElementById('filterSelect').value;
    let startIndex = currentSystem;

    do {
        currentSystem++;
        if (currentSystem >= row.length) {
            currentSystem = 0;
        }

        // If we've looped through all systems, break to avoid infinite loop
        if (currentSystem === startIndex) {
            break;
        }

        // If no filter, or if system matches filter, break
        if (!filter || systemTradeCodes[currentSystem].includes(filter)) {
            break;
        }
    } while (true);

    setSystem(currentSystem)
}

function previousSystem() {
    const filter = document.getElementById('filterSelect').value;
    let startIndex = currentSystem;

    do {
        currentSystem--;
        if (currentSystem < 0) {
            currentSystem = row.length - 1;
        }

        // If we've looped through all systems, break to avoid infinite loop
        if (currentSystem === startIndex) {
            break;
        }

        // If no filter, or if system matches filter, break
        if (!filter || systemTradeCodes[currentSystem].includes(filter)) {
            break;
        }
    } while (true);

    setSystem(currentSystem)
}

// Assorted random functions
//
function matchRC(rownum, colnum) {
    for (i=0; i<row.length; i++) {
        if (row[i] == rownum && column[i] == colnum) {
            return i
        }
    }
    return -1
}

// Flip a coin
function zero2one() {
    return Math.floor(Math.random() * 2);
}

// Choose among 3 equally
function zero2two() {
    return Math.floor(Math.random() * 3);
}

// choose among 6 equally, effectively 1D6-1
function zero2five() {
    return Math.floor(Math.random() * 6);
}

// choose among 6 equally, 1D6
function one2six() {
    return zero2five + 1;
}

// choose by adding two dice (each 0-5) together, so 5 is most likely (1 im 6), 0 & 10 least (1 in 36 each)
function zero2ten() {
    return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
}

// choose by adding three dice (each 0-5) together, so 7 & 8 are most likely, 0 and 15 least (1 in 216)
function zero2fifteen() {
    return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
}

// get a single digit, 1 to 9, all equally likely
function one2nine1d () {
    return Math.floor(Math.random() * 8 + 1)
}

// variable odds: pass on 1 to 99, get that percentage likelihood of a true result
function variableOdds (odds) {
    return odds > Math.floor(Math.random() * 100)
}
