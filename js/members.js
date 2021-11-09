var currentMember = 0
const members = 26

const membersTable = { //Inte rätt sätt att göra det på, men bra nog. Kunde göras finare med en json fil.
    //Tabell av alla medlemmar och deras data
    0: ["mumbo.png", 'Mumbo: "The patatman"', "https://www.youtube.com/user/ThatMumboJumbo", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus.", ""],
    1: ["bdub.png", 'BdoubleO100: "The clockmaker"', "https://www.youtube.com/user/BdoubleO100", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    2: ["cub.png", 'Cubfan35: "The spikey man"', "https://www.youtube.com/user/cubfan135", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    3: ["docm.png", 'Docm77: "The game breaker"', "https://www.youtube.com/user/docm77", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    4: ["etho.png", 'EthosLab: "The OG minecrafter"', "https://www.youtube.com/user/EthosLab", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    5: ["false.png", 'FalseSymmetry: "The mega-builder"', "https://www.youtube.com/user/FalseSymmetry", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    6: ["gem.png", 'GeminiTay: "The vendor"', "https://www.youtube.com/user/GeminiTard", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    7: ["scar.png", 'GoodTimesWithScar: "The dead"', "https://www.youtube.com/user/GoodTimesWithScar", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    8: ["grian.png", 'Grian: "The war-starter"', "https://www.youtube.com/user/Xelqua", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    9: ["hypno.png", 'Hypnotizd: "The hypno"', "https://www.youtube.com/user/hypnotizd", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    10: ["jevin.png", 'iJevin: "The infinite-patience"', "https://www.youtube.com/user/iJevin", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    11: ["impulse.png", 'ImpulseSV: "The willy-wonka"', "https://www.youtube.com/user/impulseSV", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    12: ["iskall.png", 'Iskall85: "The Swedish lad"', "https://www.youtube.com/user/ahlviktor", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    13: ["joe.png", 'JoeHills: "The chillster"', "https://www.youtube.com/user/JoeHillsTSD", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    14: ["keralis.png", 'Keralis: "The mega-mega-builder"', "https://www.youtube.com/user/Keralis", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    15: ["pearl.png", 'PearlescentMoon: "The mountaineer"', "https://www.youtube.com/user/PearlescentMoon", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    16: ["ren.png", 'Rendog: "The hippie"', "https://www.youtube.com/user/rendog", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    17: ["stress.png", 'StressMonster101: "The pink lover"', "https://www.youtube.com/user/Stressmonster101", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    18: ["tango.png", 'TangoTek: "The minigame creator"', "https://www.youtube.com/user/TangoTekLP", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    19: ["tfc.png", 'TinFoilChef: "The OG-gaming"', "https://www.youtube.com/user/selif1", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    20: ["beef.png", 'VintageBeef: "That steve vs steve dude"', "https://www.youtube.com/user/VintageBeef", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    21: ["wels.png", 'Welsknight: "The island"', "https://www.youtube.com/user/welsknightgaming", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    22: ["xb.png", 'xBCrafted: "The lonestar"', "https://www.youtube.com/user/xbxaxcx", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    23: ["xisuma.png", 'Xisumavoid: "The nice guy"', "https://www.youtube.com/user/xisumavoid", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    24: ["zed.png", 'ZedaphPlays: "The mad scientist"', "https://www.youtube.com/user/ZedaphPlays", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."],
    25: ["cleo.png", 'ZombieCleo: "That artsy person"', "https://www.youtube.com/user/zombiecleo", "Maecenas augue sapien, semper in turpis sed, tincidunt fringilla lacus."]
}

function onNextPressed() { //Bunden till next knappen
    currentMember += 1
    currentMember %= members //Sätter currentMember till +1 och om den går för långt så hoppar den tillbaka till första member
    setNewMember()
}

function onPreviousPressed() { //Bunden till previous knappen
 currentMember -= 1
    if (currentMember < 0) { // Sätter member till -1 och om det går ner i negativt så hoppar den till den sista medlemmen
        currentMember = members - 1
    }
    setNewMember()
}

async function setNewMember() { //Ropas på av båda knappar
    document.getElementsByClassName("container")[0].style.animation = "animationFaddeAway 2s"
    document.getElementsByClassName("container")[0].style.opacity = "0" //Sätter animation på hela sidan att den ska långsamt försvinna
    await sleep(1900); //Väntar i 1,9 sekunder

    document.getElementById("title").innerHTML = membersTable[currentMember][1]
    document.getElementById("text").innerHTML = membersTable[currentMember][3]
    document.getElementById("youtube").href = membersTable[currentMember][2] //Ändrar text och länkar medans allt är osynligt
    document.getElementsByClassName("container")[0].style.backgroundImage = "url(./../resources/members/" + membersTable[currentMember][0] + ")"
    //Sätter en ny bakgrundsbild

    document.getElementsByClassName("container")[0].style.animation = "animationFaddeForward 2s"
    document.getElementsByClassName("container")[0].style.opacity = "1"
    //Sätter en animation att allt ska komma fram igen
}

function preloadImage(url){
    const img = new Image();
    img.src = url;
    return img
}

function sleep(ms) { //Vänta funktionen
    return new Promise(resolve => setTimeout(resolve, ms));
}

membersTable.forEach((num, index) =>{ //Laddar in bilderna i förväg
    preloadImage(index["url(./../resources/members/" + index[0] + ")"])
})