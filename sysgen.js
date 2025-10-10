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

techDetails = Array("No technology", "Roughly on a par with Bronze or Iron age technology.", "Renaissance technology.", "The germ of industrial revolution and steam power.", "The transition to industrial revolution is complete, bringing plastics, radio\nand other such inventions.", "Widespread electrification, telecommunications and internal combustion.", "Fission power and more advanced computing.", "A pre-stellar society can reach orbit reliably and has telecommunications satellites.", "At TL 8, it is possible to reach other worlds in the same system, although\nterraforming or full colonisation are not within reach.", "Gravity manipulation, which makes space travel vastly safer and faster.", "With the advent of Jump, nearby systems are opened up.", "The first true artificial intelligences become possible, as computers are\nable to model synaptic networks.", "Weather control revolutionises terraforming and agriculture.", "The battle dress appears on the battlefield in response to the new\nweapons.", "Fusion weapons become man-portable.", "Black globe generators suggest a new direction for defensive technologies,\nwhile the development of synthetic anagathics means that the human lifespan is\nnow vastly increased. Higher Technology Levels exist and\nmay appear in other settings or be discovered by pioneering scientists.", "Antimatter engines allow much longer jumps (J-8) with reasonable cargo,\ncounter weapons and shields improve, powered/active armor increases durability,\ncommunications equivalent to personal telepathy and good\nshielding", "All engines are compact, take fewer engineers, and perform extremely well,\nup to J-12 and M-16, P-18, human multiplicity physically and virtually is\ncommon, super-intelligent AI, low berths are 0 risk and cure\nalmost all cancers and diseases, forms are mutable.", "Speculative, J-16, M-20, P-24, extremely good armor, black globe with\ncomplete variability control and huge storage, cvapital ships can use black\nglobes to power outrageous arsenals.", "J-20, J-30 when not near massive objects, J-40 with obscure psionics\nintegrated into production and operation of engines and ships. Resurections,\nbackups, robo/physical/virtual multi-embodiement with merged\nconsciousness, meta-human groupings with others for even larger merged consciousnesses.\nImmunity to pretty much every form of death.")
techRange = Array("Primitive", "Primitive", "Primitive", "Primitive", "Industrial", "Industrial", "Industrial", "Pre-Stellar", "Pre-Stellar", "Pre-Stellar", "Early Stellar", "Early Stellar", "Average Stellar", "Average Stellar", "Average Stellar", "High Stellar", "High Stellar", "Low Sector", "Average Sector", "High Sector")

tradeCode = Array("Ag", "As", "De", "Fl", "Ga", "Hi", "Ht", "Ic", "In", "Lo", "Lt", "Na", "Ni", "Po", "Ri", "St", "Wa", "Va")
tradeDescription = Array("Agricultural", "Asteroid Belt", "Desert", "Fluid Oceans", "Garden", "High Population", "High Technology", "Ice-Capped", "Industrial", "Low Population", "Low Technology", "Non-Agricultural", "Non-Industrial", "Poor", "Rich", "Sterile", "Water World", "Vacuum")
// System details, determined randomly
numStars = 1
Moderate_Companion = false
Distant_Companion = false
Close_Companion = false
num_GasGiants = 0
num_AsteroidBelts = 0

// World details, determined randomly
starport = 0
starportCode = "X"
uwp = ""
systemTradeCodes = Array()
systemTradeDescriptions = Array()
size = 0
atmos = 0
hydro = 0
pop = 0
factor = 9
law = 0
gov = 0
splinters = 0
tech = 0
allTradeCodes = ""

function generateCanvas() {
    const myCanvas = document.getElementById('Sector');
    const ctx = myCanvas.getContext('2d');
    ctx.font = "14px Arial";
    ctx.fillStyle = "black";
    // set the radius of the hexagon
    for (let i=0; i<4; i++) {
        for (let j=0; j<10; j++) {
            hexagon(ctx, 50 + i*96, 50 + j*55.426);
            i2 = i + i;
            i21 = i2 + 1;
            ctx.fillText(" " + j + i2, 34 + i*96, 34 + j*55.426);
            hexagon(ctx, 98 + i*96, 77.7128 + j*55.426)
            ctx.fillText("  " + j + i21, 80 + i*96, 61.7 + j*55.426);
        }
    }
}

function hexagon(ctx, cx, cy) {
    const radius = 32;
    for (let i = 0; i < 6; i++) {
        // calculate the rotation
        const rotation = (Math.PI / 3) * i;

        // for the first point move to
        if (i === 0) {
            ctx.moveTo(cx + radius * Math.cos(rotation), cy + radius * Math.sin(rotation));
            console.log("x = " + radius*Math.cos(rotation) + ", y = " + radius*Math.sin(rotation))
        } else {
            // for the rest draw a line
            ctx.lineTo(cx + radius * Math.cos(rotation), cy + radius * Math.sin(rotation));
            console.log("x = " + radius*Math.cos(rotation) + ", y = " + radius*Math.sin(rotation))
        }
    }

    // close path and stroke it
    ctx.closePath();
    ctx.stroke();
}

function generateSystem() {
    getStarsNum();
    getStarsTypes();
    getPlanets();
    getWorld();
}

function getStarsNum() {
    z15 = zero2fifteen()
    switch(true) {
    case z15 > 12:
        numStars = 3
        document.getElementById('Stars').innerHTML = "3 Star System, "
        break;
    case z15 > 7:
        numStars = 2
        document.getElementById('Stars').innerHTML = "2 Star System, "
        break;
    case z15 < 8:
        numStars = 1
        document.getElementById('Stars').innerHTML = "1 Star System, "
    default:
        numStars = 1
        document.getElementById('Stars').innerHTML = "1 Star System, "
        break;
    }
}

function getStarsTypes() {
    z10 = zero2ten()
    switch (true) {
    case z10==0:
        document.getElementById('Stars').innerHTML = document.getElementById('Stars').innerHTML + starTypes[0]
        break;
    case z10==1:
        document.getElementById('Stars').innerHTML = document.getElementById('Stars').innerHTML + starTypes[1]
        break;
    case z10==2:
        document.getElementById('Stars').innerHTML = document.getElementById('Stars').innerHTML + starTypes[2]
        break;
    case z10==3:
        document.getElementById('Stars').innerHTML = document.getElementById('Stars').innerHTML + starTypes[3]
        break;
    case z10 > 3:
        document.getElementById('Stars').innerHTML = document.getElementById('Stars').innerHTML + starTypes[4]
        break;
    default:
        document.getElementById('Stars').innerHTML = document.getElementById('Stars').innerHTML + starTypes[3]
        break;
    }
    if (numStars > "1") {
        nextOrbit = "";
        for (i = 1; i < numStars; i++) {
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
                document.getElementById('Stars').innerHTML = document.getElementById('Stars').innerHTML + ", secondary " + starTypes[0] + " in " + nextOrbit
                break;
            case 1:
                document.getElementById('Stars').innerHTML = document.getElementById('Stars').innerHTML + ", secondary " + starTypes[1] + " in " + nextOrbit
                break;
            case 2:
                document.getElementById('Stars').innerHTML = document.getElementById('Stars').innerHTML + ", secondary " + starTypes[2] + " in " + nextOrbit
                break;
            case 3:
                document.getElementById('Stars').innerHTML = document.getElementById('Stars').innerHTML + ", secondary " + starTypes[3] + " in " + nextOrbit
                break;
            case 4:
            case 5:
            case 6:
                document.getElementById('Stars').innerHTML = document.getElementById('Stars').innerHTML + ", secondary " + starTypes[4] + " in " + nextOrbit
                break;
            default:
                document.getElementById('Stars').innerHTML = document.getElementById('Stars').innerHTML + ", secondary " + starTypes[3] + " in " + nextOrbit
                break;
            }
        }
    }
}

// that finsihes the stars, next are planets and asteroid belts
function getPlanets() {
    document.getElementById('Planets').innerHTML = "";
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
            document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + "Epistellar planets:\n";
            for (i=0; i<Epistellar_Planets; i++) {
                getPlanet();
            }
        }
    }
    Inner_Planets = zero2five();
    if (Inner_Planets < 0) {
        Inner_Planets = 0;
    }
    if (Inner_Planets > 0) {
        document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + "Inner planets:\n";
        for (i = 0; i < Inner_Planets; i++) {
            getPlanet();
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
        document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + "Outer planets:\n";
        for (i = 0; i < Outer_Planets; i++) {
            getPlanet();
        }
    }
}

// get a single planet and its possible satellites
function getPlanet() {
    delta = 0
    firstpass = true
    if (document.getElementById('Stars').innerHTML == starTypes[5]) {
        delta = -1
    }
    z2d = zero2five() + delta
    switch (true) {
    case z2d < 1:
        if (zero2five() > 3) {
            document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[0] + " Mostly Dwarf planetoids, one " + planetTypes[1] + "\n";
            num_AsteroidBelts++
        } else {
            document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[0] + "\n";
            num_AsteroidBelts++
        }
        break;
    case z2d == 1:
        if (zero2five() > 4) {
            document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[1], " Satellite " + planetTypes[1] + "\n";
        } else {
            document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[1] + "\n";;
        }
        break;
    case z2d == 2:
        if (zero2five() > 3) {
            document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[2] + " Satellite " + planetTypes[1] + "\n";
        } else {
            document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[2] + "\n";
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
                    document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[3] + " Sattelite " + planetTypes[1] + "\n";
                } else {
                    document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[3] + " Sattelite " + planetTypes[1] + numSat + "x " + planetTypes[1] + "\n";
                }
            } else {
                // One satellite is terrestrial
                if (numSat == 1) {
                    document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[3] + " Satellite " + planetTypes[1]  + "\n";
                } else if (numSat == 2) {
                    document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[3] + " Satellite " + planetTypes[2] + " & " + planetTypes[1] + "\n";
                } else {
                    document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[3] + " Satellite " + planetTypes[2] + numSat + "x " + planetTypes[1] + "\n";
                }
            }
        } else {
            document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[3] + "\n";
        }
        break;
    case z2d < 7:
        numSat = zero2five() + 1
        if (zero2five() < 5) {
            // All satelites are dwarfs
            if (numSat == 1) {
                document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[4] + " Sattelite " + planetTypes[1] + "\n";
                num_GasGiants++
            } else {
                document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[4] + " Satellite " + numSat + "x " + planetTypes[1] + "\n";
                num_GasGiants++
            }
        } else {
            // One satellite is terrestrial
            if (numSat == 1) {
                document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[4] + " Satellite " + planetTypes[2] + "\n";
                num_GasGiants++
            } else if (numSat == 2) {
                document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[4] + " Satellites " + planetTypes[2] + " & " + planetTypes[1] + "\n";
                num_GasGiants++
            } else {
                document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[4] + " Sattelites " + planetTypes[2] + " & " + numSat + "x " + planetTypes[1] + "\n";
                num_GasGiants++
            }
        }
        break;
    default:
        if (zero2five() > 3) {
            document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[2], " Satellite " + planetTypes[1] + "\n";
        } else {
            document.getElementById('Planets').innerHTML = document.getElementById('Planets').innerHTML + planetTypes[2] + "\n";
        }
        break;
    }
}

function getWorld() {
    getStarport()
    getSize()
    getAtmosphere()
    getHydrology()
    getPopulation()
    getGovernment()
    getLaw()
    getTech()
    getCodes()
    getUWP()
}

function getStarport() {
    switch (zero2ten()) {
    case 0:
        starport = 0
    case 1:
    case 2:
        starport = 1
    case 3:
    case 4:
        starport = 2;
        break;
    case 5:
    case 6:
        starport = 3;
        break;
    case 7:
    case 8:
        starport = 4;
        break;
    case 9:
    case 10:
    case 11:
        starport = 5;
        break;
    default:
        starport = 3;
        break;
    }
    starportCode = starTypes[starport];
	document.getElementById('Port').innerHTML = "Starport type " + starportTypes[starport] + ", " + starportDetails[starport];
}

function getSize() {
	size = zero2ten();
	document.getElementById('Size').innerHTML = "Size " + tl[size] + ", " + sizeDetails[size] + ", gravity " + gravDetails[size];
}

function getAtmosphere() {
	atmos = zero2ten() + size - 5;
    if (atmos < 0) {atmos = 0;}
    if (atmos>15) {atmos = 15;}
	document.getElementById('Atmos').innerText = "Atmosphere " + tl[atmos] + ", " + atmosphereDetails[atmos] + ", pressure " + atmospherePressureDetails[atmos] + ", equipment required: " + atmosphereEquipmentDetails[atmos];
}

function getHydrology() {
    if (size < 2) {
        hydro = 0;
    } else {
        hydro = zero2ten() - 5 + size;
        switch (atmos) {
        case 0:
        case 1:
        case 10:
        case 11:
        case 12:
            hydro = hydro - 4
            break;
        }
        if (hydro < 0) {
            hydro = 0
        }
        if (hydro > 10) {
            hydro = 10
        }
    }
    document.getElementById('Hydro').innerText = "Hydrology " + tl[hydro] + ", " + hydroDetails[hydro] + ", covering " + hydroRangeDetails[hydro] + " of the surface"
}

function getPopulation() {
    pop = zero2ten()
    if (pop == 0) {
        document.getElementById('Pop').innerText = "Population " + tl[pop] + " - Unpopulated"
    } else {
        factor = one2nine1d()
        document.getElementById('Pop').innerText = "Population " + tl[pop] + " - " + populationDetail[pop-1] + " times " + factor
    }
}

function getGovernment() {
    gov = zero2ten() - 5 + pop
    if (gov < 0) {
        gov = 0
    } else if (gov > 13) {
        gov = 13
    }
    document.getElementById('Gov').innerText = "Government " + tl[gov] + " - " + govDetails[gov]
}

function getLaw() {
    law = zero2ten() - 7 + gov
    if (law < 0) {
		law = 0
    }
    document.getElementById('Law').innerText = "Law Level " + tl[law] + " - " + lawDetails[law]
}

function getTech() {
    tech = zero2five() + 1; // in other words a 1D6
	switch (starport) {
    case 0:
        tech -= 4;
        break;
    case 3:
        tech += 2;
        break;
    case 4:
        tech += 4;
        break;
    case 5:
        tech += 6;
        break;
    }
    if (size < 2) {
		tech += 2;
	} else if (size < 5) {
		tech += 1;
    }
    if (atmos < 4) {
        tech += 1;
    } else if (atmos > 9) {
        tech += 1;
    }
    if (hydro == 0 || hydro == 9) {
		tech++;
	} else if (hydro == 10) {
		tech += 2;
    }
    if (pop < 6 || pop == 9) {
        tech++;
    } else if (pop == 10) {
        tech += 2;
    } else if (pop == 11) {
        tech += 3;
    } else if (pop == 12) {
        tech += 4;
    } else if (pop == 13) {
        tech += 5;
    } else if (pop == 14) {
        tech += 6;
    }
    if (gov == 0 || gov == 5) {
        tech++;
    } else if (gov == 7) {
        tech += 2;
    } else if (gov == 13 || gov == 14) {
        tech -= 2;
    }
    if (tech < 0) {
        tech = 0;
    }
    document.getElementById('Tech').innerText = "Tech Level " + tl[tech] + " (" + techRange[tech] + ") - " + techDetails[tech]
}

// Note that getUWP() is called last, after all the other settings
// are established, so getCodes() (shortly fter this) must be called
// before getUWP(). Ditto all the earlier get*() routines, they go\
// before getUWP() as well.
function getUWP() {
    uwp = starportTypes[starport] + tl[size] + tl[atmos] + tl[hydro] + tl[pop] + tl[gov] + "-" + tl[tech];
    document.getElementById('UWP').innerText = "UWP " + uwp + "\nTrade codes: " + allTradeCodes;
}

function getCodes() {
    codeCount = 0;
    if (atmos > 3 && atmos < 10 && hydro > 3 && hydro < 9 && pop > 4 && pop < 8) {
        // Agriculture
        systemTradeCodes[codeCount] = tradeCode[0];
        systemTradeDescriptions[codeCount] = tradeDescription[0];
        codeCount++;
    }
    if (num_AsteroidBelts > 0) {
        // Asteroid Belt(s)
        systemTradeCodes[codeCount] = tradeCode[1];
        systemTradeDescriptions[codeCount] = tradeDescription[1];
        codeCount++;
    }
    if (atmos > 1 && atmos < 14 && hydro == 0) {
        // Desert
        systemTradeCodes[codeCount] = tradeCode[2];
        systemTradeDescriptions[codeCount] = tradeDescription[2];
        codeCount++;
    }
    if (atmos > 9 || (hydro > 0 && hydro < 12)) {
        // Fluid Oceans
        systemTradeCodes[codeCount] = tradeCode[3];
        systemTradeDescriptions[codeCount] = tradeDescription[3];
        codeCount++;
    }
    if (size > 4 && size < 11 && atmos > 3 && atmos < 10 && hydro > 3 && hydro < 9) {
        // Garden
        systemTradeCodes[codeCount] = tradeCode[4];
        systemTradeDescriptions[codeCount] = tradeDescription[4];
        codeCount++;
    }
    if (pop  > 8) {
        // High Population
        systemTradeCodes[codeCount] = tradeCode[5];
        systemTradeDescriptions[codeCount] = tradeDescription[5];
        codeCount++;
    }
    if (tech  > 9) {
        // High Tech;
        systemTradeCodes[codeCount] = tradeCode[6];
        systemTradeDescriptions[codeCount] = tradeDescription[6];
        codeCount++;
    }
    if (atmos < 2 && hydro > 0) {
        // Ice Capped
        systemTradeCodes[codeCount] = tradeCode[7];
        systemTradeDescriptions[codeCount] = tradeDescription[7];
        codeCount++;
    }
    if (pop > 8 && tech > 6) {
        // Industrial
        systemTradeCodes[codeCount] = tradeCode[8];
        systemTradeDescriptions[codeCount] = tradeDescription[8];
        codeCount++;
    }
    if (pop < 4) {
        // Low Population
        systemTradeCodes[codeCount] = tradeCode[9];
        systemTradeDescriptions[codeCount] = tradeDescription[9];
        codeCount++;
    }
    if (tech < 6) {
        // Low Tech
        systemTradeCodes[codeCount] = tradeCode[10];
        systemTradeDescriptions[codeCount] = tradeDescription[10];
        codeCount++;
    }
    if ((atmos < 4 || atmos > 10 || hydro < 4 || hydro > 10) && pop > 5) {
        // Non-Agricultural
        systemTradeCodes[codeCount] = tradeCode[11];
        systemTradeDescriptions[codeCount] = tradeDescription[11];
        codeCount++;
    }
    if (pop  > 3 && pop < 7) {
        // Non-Industrial
        systemTradeCodes[codeCount] = tradeCode[12];
        systemTradeDescriptions[codeCount] = tradeDescription[12];
        codeCount++;
    }
    if (atmos > 1 && atmos < 6 && hydro < 4) {
        // Poor
        systemTradeCodes[codeCount] = tradeCode[13];
        systemTradeDescriptions[codeCount] = tradeDescription[13];
        codeCount++;
    }
    if ((atmos == 6 || atmos == 8) && pop > 5 && pop < 9) {
        // Rich
        systemTradeCodes[codeCount] = tradeCode[14];
        systemTradeDescriptions[codeCount] = tradeDescription[14];
        codeCount++;
    }
    if (atmos == 0 && hydro == 0) {
        // Sterile
        systemTradeCodes[codeCount] = tradeCode[15];
        systemTradeDescriptions[codeCount] = tradeDescription[15];
        codeCount++;
    }
    if ((Hydro == 10 || hydro == 11) && atmos > 1) {
        // Poor
        systemTradeCodes[codeCount] = tradeCode[16];
        systemTradeDescriptions[codeCount] = tradeDescription[16];
        codeCount++;
    }
    if (atmos == 0) {
        // Vacuum
        systemTradeCodes[codeCount] = tradeCode[17];
        systemTradeDescriptions[codeCount] = tradeDescription[17];
        codeCount++;
    }
    allTradeDescriptions = ""
    allTradeCodes = ""
    first = true
    for (i=0; i<codeCount; i++) {
        if (first) {
            allTradeDescriptions += systemTradeDescriptions[i]
            allTradeCodes += systemTradeCodes[i]
            first=false
        } else {
            allTradeDescriptions += ", " + systemTradeDescriptions[i]
            allTradeCodes += " " + systemTradeCodes[i]
        }
    }
    document.getElementById('Codes').innerText = allTradeDescriptions
}


// Assorted random functions
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
    return Math.floor(Math.random() * 9)
}
