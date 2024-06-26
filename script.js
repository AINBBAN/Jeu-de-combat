class Personnage {
    constructor(pseudo, classe, sante, attaque) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.xp = 1;
    }

    get informations() {
        return `${this.pseudo} est un ${this.classe} avec ${this.sante} points de vie et ${this.attaque} points d'attaque`;
    }

    evoluer() {
        this.xp++;
        alert(`${this.pseudo} passe au niveau ${this.xp} !`);
    }

    verifierSante() {
        if (this.sante <= 0) {
            this.sante = 0;
            alert(`${this.pseudo} est mort !`);
        }
    }
}

class Magicien extends Personnage {
    constructor(pseudo) {
        super(pseudo, "magicien", 170, 90);
    }

    attaquer(Personnage) {
        Personnage.sante -= this.attaque;
        alert(`${this.pseudo} attaque ${Personnage.pseudo} et lui inflige ${this.attaque} points de dégâts !`);
        this.evoluer();
        Personnage.verifierSante();
    }

    coupSpecial(Personnage) {
        Personnage.sante -= this.attaque * 5;
        alert(`${this.pseudo} attaque ${Personnage.pseudo} et lui inflige son coup spécial ${this.attaque * 5} points de dégâts !`);
        this.evoluer();
        Personnage.verifierSante();
    }
}

class Guerrier extends Personnage {
    constructor(pseudo) {
        super(pseudo, "guerrier", 350, 50);
    }

    attaquer(Personnage) {
        Personnage.sante -= this.attaque;
        alert(`${this.pseudo} attaque ${Personnage.pseudo} et lui inflige ${this.attaque} points de dégâts !`);
        this.evoluer();
        Personnage.verifierSante();
    }

    coupSpecial(Personnage) {
        Personnage.sante -= this.attaque * 5;
        alert(`${this.pseudo} attaque ${Personnage.pseudo} et lui inflige son coup spécial une hache de guerre ${this.attaque * 5} points de dégâts !`);
        this.evoluer();
        Personnage.verifierSante();
    }
}

function startGame() {

    let pseudo1;
    let classe1;

    do {
        pseudo1 = prompt("Entrez le pseudo du premier personnage :");
        if (pseudo1 === null) {
            continue;
        }
        pseudo1 = pseudo1.trim();

        classe1 = prompt("Choisissez la classe du premier personnage (magicien/guerrier) :").toLowerCase();
        if (classe1 === null) {
            continue;
        }
    } while (pseudo1 === "" || (classe1 != "magicien" && classe1 != "guerrier"));

    let pseudo2;
    let classe2;

    do {
        pseudo2 = prompt("Entrez le pseudo du deuxieme personnage :");
        if (pseudo2 === null) {
            continue;
        }
        pseudo2 = pseudo2.trim();

        classe2 = prompt("Choisissez la classe du deuxieme personnage (magicien/guerrier) :").toLowerCase();
        if (classe2 === null) {
            continue;
        }
    } while (pseudo2 === "" || (classe2 != "magicien" && classe2 != "guerrier"));

    var personnage1, personnage2;

    if (classe1 === "magicien") {
        personnage1 = new Magicien(pseudo1);
    } else if (classe1 === "guerrier") {
        personnage1 = new Guerrier(pseudo1);
    } else {
        alert("Classe non reconnue pour le premier personnage. Veuillez rafraîchir et réessayer.");
        return;
    }

    if (classe2 === "magicien") {
        personnage2 = new Magicien(pseudo2);
    } else if (classe2 === "guerrier") {
        personnage2 = new Guerrier(pseudo2);
    } else {
        alert("Classe non reconnue pour le deuxième personnage. Veuillez rafraîchir et réessayer.");
        return;
    }
    do {

        alert(personnage1.informations);
        alert(personnage2.informations);

        personnage1.attaquer(personnage2);
        alert(personnage2.informations);

        personnage2.attaquer(personnage1);
        alert(personnage1.informations);

        personnage1.coupSpecial(personnage2);

        restart = confirm("Voulez-vous recomencer ?");
    } while (restart);
}