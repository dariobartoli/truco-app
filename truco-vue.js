const cardsTruco = [
    {
        number: 1,
        suit: "sword",
        value: 14,
        valueEnvido: 1,
        img: "./img/1sword.png"
    },
    {
        number: 2,
        suit: "sword",
        value: 9,
        valueEnvido: 2,
        img: "./img/2sword.png"
    },
    {
        number: 3,
        suit: "sword",
        value: 10,
        valueEnvido: 3,
        img: "./img/3sword.png"
    },
    {
        number: 4,
        suit: "sword",
        value: 1,
        valueEnvido: 4,
        img: "./img/4sword.png"
    },
    {
        number: 5,
        suit: "sword",
        value: 2,
        valueEnvido: 5,
        img: "./img/5sword.png"
    },
    {
        number: 6,
        suit: "sword",
        value: 3,
        valueEnvido: 6,
        img: "./img/6sword.png"
    },
    {
        number: 7,
        suit: "sword",
        value: 12,
        valueEnvido: 7,
        img: "./img/7sword.png"
    },
    {
        number: 10,
        suit: "sword",
        value: 5,
        valueEnvido: 0,
        img: "./img/10sword.png"
    },
    {
        number: 11,
        suit: "sword",
        value: 6,
        valueEnvido: 0,
        img: "./img/11sword.png"
    },
    {
        number: 12,
        suit: "sword",
        value: 7,
        valueEnvido: 0,
        img: "./img/12sword.png"
    },
    {
        number: 1,
        suit: "cup",
        value: 8,
        valueEnvido: 1,
        img: "./img/1cup.png"
    },
    {
        number: 2,
        suit: "cup",
        value: 9,
        valueEnvido: 2,
        img: "./img/2cup.png"
    },
    {
        number: 3,
        suit: "cup",
        value: 10,
        valueEnvido: 3,
        img: "./img/3cup.png"
    },
    {
        number: 4,
        suit: "cup",
        value: 1,
        valueEnvido: 4,
        img: "./img/4cup.png"
    },
    {
        number: 5,
        suit: "cup",
        value: 2,
        valueEnvido: 5,
        img: "./img/5cup.png"
    },
    {
        number: 6,
        suit: "cup",
        value: 3,
        valueEnvido: 6,
        img: "./img/6cup.png"
    },
    {
        number: 7,
        suit: "cup",
        value: 4,
        valueEnvido: 7,
        img: "./img/7cup.png"
    },
    {
        number: 10,
        suit: "cup",
        value: 5,
        valueEnvido: 0,
        img: "./img/10cup.png"
    },
    {
        number: 11,
        suit: "cup",
        value: 6,
        valueEnvido: 0,
        img: "./img/11cup.png"
    },
    {
        number: 12,
        suit: "cup",
        value: 7,
        valueEnvido: 0,
        img: "./img/12cup.png"
    },
    {
        number: 1,
        suit: "gold",
        value: 8,
        valueEnvido: 1,
        img: "./img/1gold.png"
    },
    {
        number: 2,
        suit: "gold",
        value: 9,
        valueEnvido: 2,
        img: "./img/2gold.png"
    },
    {
        number: 3,
        suit: "gold",
        value: 10,
        valueEnvido: 3,
        img: "./img/3gold.png"
    },
    {
        number: 4,
        suit: "gold",
        value: 1,
        valueEnvido: 4,
        img: "./img/4gold.png"
    },
    {
        number: 5,
        suit: "gold",
        value: 2,
        valueEnvido: 5,
        img: "./img/5gold.png"
    },
    {
        number: 6,
        suit: "gold",
        value: 3,
        valueEnvido: 6,
        img: "./img/6gold.png"
    },
    {
        number: 7,
        suit: "gold",
        value: 11,
        valueEnvido: 7,
        img: "./img/7gold.png"
    },
    {
        number: 10,
        suit: "gold",
        value: 5,
        valueEnvido: 0,
        img: "./img/10gold.png"
    },
    {
        number: 11,
        suit: "gold",
        value: 6,
        valueEnvido: 0,
        img: "./img/11gold.png"
    },
    {
        number: 12,
        suit: "gold",
        value: 7,
        valueEnvido: 0,
        img: "./img/12gold.png"
    },
    {
        number: 1,
        suit: "stick",
        value: 13,
        valueEnvido: 1,
        img: "./img/1stick.png"
    },
    {
        number: 2,
        suit: "stick",
        value: 9,
        valueEnvido: 2,
        img: "./img/2stick.png"
    },
    {
        number: 3,
        suit: "stick",
        value: 10,
        valueEnvido: 3,
        img: "./img/3stick.png"
    },
    {
        number: 4,
        suit: "stick",
        value: 1,
        valueEnvido: 4,
        img: "./img/4stick.png"
    },
    {
        number: 5,
        suit: "stick",
        value: 2,
        valueEnvido: 5,
        img: "./img/5stick.png"
    },
    {
        number: 6,
        suit: "stick",
        value: 3,
        valueEnvido: 6,
        img: "./img/6stick.png"
    },
    {
        number: 7,
        suit: "stick",
        value: 4,
        valueEnvido: 7,
        img: "./img/7stick.png"
    },
    {
        number: 10,
        suit: "stick",
        value: 5,
        valueEnvido: 0,
        img: "./img/10stick.png"
    },
    {
        number: 11,
        suit: "stick",
        value: 6,
        valueEnvido: 0,
        img: "./img/11stick.png"
    },
    {
        number: 12,
        suit: "stick",
        value: 7,
        valueEnvido: 0,
        img: "./img/12stick.png"
    },   
]

const app = Vue.createApp({
    data(){
        return{
            cards: [],
            game: {},
            playerOne: {},
            cardP1: {},
            playerTwo: {},
            cardP2: {},
            deck: {},
            field: [],
            viewOptionP1: false,
            viewOptionP2: false,
            panelTrucoP1: false,
            panelTrucoP2: false,
            panelEnvidoP1: false,
            panelEnvidoP2: false,
            trucoSay: false,
            envidoSay: false,
            botPlayer: {},
            count: 1,
            envidoAccept: "",
            trucoAccept: "",
            menuMovil: false,
            namePlayer: "",
            namePlayerBool: false,
            winEnvido: "",
            showWinEnvido: false,
            envidoFalse: null,
            victory: 0,
            defeat: 0,
        }
    },
    created(){
        this.cards = cardsTruco
        this.deck = {
            deck: cardsTruco,
        }
        this.playerOne = {
            numberP: 1,
            cardHand: [],
            totalEnvido: 0,
            cardEnvido: [],
            truco: false,
            reTruco: false,
            vale4: false,
            envido: false,
        }
        this.playerTwo = {
            numberP: 2,
            cardHand: [],
            totalEnvido: 0,
            cardEnvido: [],
            truco: false,
            reTruco: false,
            vale4: false,
            envido: false,
        }
        this.game = {
            gameStart: false,
            p1Round: 0,
            p2Round: 0,
            p1Points: 0,
            p2Points: 0,
            p1PointsBad: false,
            p2PointsBad: false,
            p1PointsTotal: 0,
            p2PointsTotal: 0,
            p1Buenas: 0,
            p2Buenas: 0,
            cardsTruco: [],
            p1Turn: true,
            p2Turn: true,
            typeTruco: "nada",
            typeEnvido: "",
            statusEnvido: true,
            mano: "",
            checkVictoryField: [],
            winner: "",
            trucoDeny: false
        }
        this.botPlayer = {
            botStart: false,
            decision: 0,
            envidoStatus: true,
            envido: "nada",
            trucoPoints: 0,
            trucoStatus: true,
            play: false,
            envidoWait: false
        }
    },
    mounted(){
        let name = localStorage.getItem('userName');
        if(name !=null ){
            this.namePlayer = JSON.parse(name)
        }
        let defeat = localStorage.getItem('defeat');
        if(defeat !=null ){
            this.defeat = JSON.parse(defeat)
        }
        let victory = localStorage.getItem('victory');
        if(victory !=null ){
            this.victory = JSON.parse(victory)
        }
    },
    methods:{
        playGame(){
            if(this.namePlayer.length == 0){
                return this.namePlayerBool = true;
            }
            localStorage.setItem('userName', JSON.stringify(this.namePlayer));
            window.location.href = "/truco.html";
        },
        showInfo(){
            this.count += 1
            this.menuMovil == true ? this.menuMovil = false : this.menuMovil = true 
        },
        cleanTotal(type){
            this.clean(1)
            this.game.p1Points = 0
            this.game.p2Points = 0
            this.game.p1PointsBad = false,
            this.game.p2PointsBad = false,
            this.game.p1PointsTotal = 0
            this.game.p2PointsTotal = 0
            this.game.p1Buenas = 0
            this.game.p2Buenas = 0
            this.game.winner = ""
            this.count = 1
            if(type == "jugar"){
                setTimeout(() => {
                    this.mixAndShare(this.deck.deck)
                }, 300);
            }else if(type == "menu"){
                window.location.href = "/index.html";
            }
        },
        mix(array){
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            this.deck = {
                deck: array
            }
        },
        share(array){
            for (let i = 1; i < 7; i++) {
                if(i%2 != 0){
                    let card = array.pop();
                    this.playerOne.cardHand.push(card)
                    this.deck.deck.unshift(card)
                }else{
                    let card = array.pop();
                    this.playerTwo.cardHand.push(card)
                    this.deck.deck.unshift(card)
                }
            }
            this.turn()
        },
        mixAndShare(array){
            this.mix(array)
            this.share(array)
            this.game.gameStart = true
            if(this.playerOne.cardHand.length == 3 && this.playerTwo.cardHand.length == 3){
                this.pointsEnvido(this.playerOne)
                this.pointsEnvido(this.playerTwo)
            }
            setTimeout(() => {
                this.botStatus()
            }, 500);
            setTimeout(()=>{
                this.count += 1
            }, 700)
            setTimeout(() =>{
                this.botPlayer.botStart = true
            }, 2000)
        },
        turn(){
            let random = Math.floor(Math.random() * 2) + 1
            if(this.game.mano == "" && this.game.mano == ""){
                if(random == 1){
                    this.game.p1Turn = false
                    this.game.mano = "P1"
                }else{
                    this.game.p2Turn = false
                    this.game.mano = "P2"
                }
            }else if(this.game.mano == "P1"){
                this.game.p2Turn = false
                this.game.mano = "P2"
            }else if(this.game.mano == "P2"){
                this.game.p1Turn = false
                this.game.mano = "P1"
            }
        },
        selectCard(card, player){
            this.field.push([card, player])
            let index = player.cardHand.indexOf(card)
            player.cardHand.splice(index, 1);
            player.cardPlay = card
            this.viewOptionP1 = false
            this.viewOptionP2 = false
            let numberPlayer = player.numberP
            this.botPlayer.play = false
            this.trucoAccept = ""
            if(numberPlayer == 1){
                this.game.p1Turn = true
                this.game.p2Turn = false
            }else{
                this.game.p2Turn = true
                this.game.p1Turn = false
            }
        },
        viewOptions(card, player){
            let playe = player.numberP
            playe == 1 ? this.viewOptionP1 = true : this.viewOptionP2 = true
            playe == 1 ? this.cardP1 = card : this.cardP2 = card
        },
        denyTruco(type, player){
            this.botPlayer.trucoStatus = true
            let playe = player.numberP
            playe == 1? [this.panelTrucoP1 = true, this.panelTrucoP2 = false] : [this.panelTrucoP1 = false, this.panelTrucoP2 = true]
            this.game.trucoDeny = true
            this.count += 1
            if(type == "truco"){
                this.trucoAccept = "trucoDeny"
                if(this.playerOne.truco == true){
                    this.game.p1Points += 1
                }else if(this.playerTwo.truco == true){
                    this.game.p2Points += 1
                }
                if(this.envidoAccept == "rechazado"){
                    this.clean(2000)
                }else if(this.envidoAccept == "aceptado"){
                    if(this.winEnvido == "P1"){
                        this.showWinEnvido = true
                    }else{
                        this.clean(2000)
                    }
                }else{
                    this.clean(2000)
                }
            }else if(type == "reTruco"){
                this.trucoAccept = "reTrucoDeny"
                if(this.playerOne.reTruco == true){
                    this.game.p1Points += 2
                }else if(this.playerTwo.reTruco == true){
                    this.game.p2Points += 2
                }
                if(this.envidoAccept == "rechazado"){
                    this.clean(2000)
                }else if(this.envidoAccept == "aceptado"){
                    if(this.winEnvido == "P1"){
                        this.showWinEnvido = true
                    }else{
                        this.clean(2000)
                    }
                }else{
                    this.clean(2000)
                }
            }else if(type == "vale4"){
                this.trucoAccept = "vale4Deny"
                if(this.playerOne.vale4 == true){
                    this.game.p1Points += 3
                }else if(this.playerTwo.vale4 == true){
                    this.game.p2Points += 3
                }
                if(this.envidoAccept == "rechazado"){
                    this.clean(2000)
                }else if(this.envidoAccept == "aceptado"){
                    if(this.winEnvido == "P1"){
                        this.showWinEnvido = true
                    }else{
                        this.clean(2000)
                    }
                }else{
                    this.clean(2000)
                }
            }
        },
        clean(number){
            setTimeout(() => {
                this.game.p1PointsTotal += this.game.p1Points
                this.game.p2PointsTotal += this.game.p2Points
                if(this.game.p1PointsBad){
                    this.game.p1Buenas += this.game.p1Points
                }
                if(this.game.p2PointsBad){
                    this.game.p2Buenas += this.game.p2Points
                }
            }, 700);
            setTimeout(() => {
                this.field = []
                this.playerOne.cardHand = []
                this.playerTwo.cardHand = []
                this.playerOne.truco = false
                this.playerTwo.truco = false
                this.playerOne.reTruco = false
                this.playerTwo.reTruco = false
                this.playerOne.vale4 = false
                this.playerTwo.vale4 = false
                this.playerOne.totalEnvido = 0
                this.playerTwo.totalEnvido = 0
                this.playerOne.envido = false
                this.playerTwo.envido = false
                this.panelEnvidoP1 = false
                this.panelEnvidoP2 = false
                this.game.p1Round = 0
                this.game.p2Round = 0
                this.game.p1Turn = true
                this.game.p2Turn = true
                this.game.typeTruco = "nada"
                this.game.typeEnvido = ""
                this.panelTrucoP1 = false
                this.panelTrucoP2 = false
                this.game.checkVictoryField = []
                this.game.gameStart = false
                this.game.statusEnvido = true
                this.trucoSay = false
                this.envidoSay = false
                this.game.p1Points = 0
                this.game.p2Points = 0
                this.winEnvido = ""
                this.showWinEnvido = false
                this.game.trucoDeny = false
                this.envidoAccept = ""
                this.trucoAccept = ""
                this.envidoFalse = false
            }, number);
        },
        cantarTruco(player, type){
            let playe = player.numberP
            this.trucoSay = true
            this.count += 1
            playe == 1? [this.panelTrucoP1 = true, this.panelTrucoP2 = false] : [this.panelTrucoP1 = false, this.panelTrucoP2 = true]
            if(type == "truco"){
                playe == 1? this.playerOne.truco = true : this.playerTwo.truco = true
            }else if(type == "reTruco"){
                playe == 1? this.playerOne.reTruco = true : this.playerTwo.reTruco = true
            }else if(type == "vale4"){
                playe == 1? this.playerOne.vale4 = true : this.playerTwo.vale4 = true
            }
        },
        aceptarTruco(type){
            this.botPlayer.trucoStatus = true
            this.count += 1
            this.panelTrucoP1 = false
            this.panelTrucoP2 = false
            if(type == "truco"){
                this.game.typeTruco = "truco";
                this.trucoAccept = "truco"
            }else if(type == "reTruco"){
                this.game.typeTruco = "reTruco";
                this.trucoAccept = "reTruco"
            }else if(type == "vale4"){
                this.game.typeTruco = "vale4";
                this.trucoAccept = "vale4"
            }
        },
        sayEnvido(type, player, value = null){
            this.envidoSay = true
            this.botPlayer.envidoWait = true
            if(value == true){
                this.envidoFalse = true
            }
            if(this.game.typeEnvido == ""){
                if(type == "envido"){
                    this.game.typeEnvido = "envido"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envido" : this.playerTwo.envido = "envido"
                    playe == 1? this.panelEnvidoP2 = true : this.panelEnvidoP1 = true
                }else if(type == "realenvido"){
                    let playe = player.numberP
                    this.game.typeEnvido = "realenvido"
                    playe == 1? this.playerOne.envido = "realenvido" : this.playerTwo.envido = "realenvido"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }else if(type == "faltaenvido"){
                    this.game.typeEnvido = "faltaenvido"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "faltaenvido" : this.playerTwo.envido = "faltaenvido"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }
            }else if(this.game.typeEnvido == "envido"){
                if(type == "envido"){
                    this.game.typeEnvido = "envidoenvido"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envidoenvido" : this.playerTwo.envido = "envidoenvido"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }else if(type == "realenvido"){
                    this.game.typeEnvido = "envidorealenvido"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envidorealenvido" : this.playerTwo.envido = "envidorealenvido"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }else if(type == "faltaenvido"){
                    this.game.typeEnvido = "envidofaltaenvido"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envidofaltaenvido" : this.playerTwo.envido = "envidofaltaenvido"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }
            }else if(this.game.typeEnvido == "realenvido"){
                if(type == "faltaenvido"){
                    this.game.typeEnvido = "realenvidofalta"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "realenvidofalta" : this.playerTwo.envido = "realenvidofalta"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }
            }else if(this.game.typeEnvido == "envidoenvido"){
                if(type == "realenvido"){
                    this.game.typeEnvido = "envidoenvidoreal"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envidoenvidoreal" : this.playerTwo.envido = "envidoenvidoreal"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }
            }else if(this.game.typeEnvido == "envidorealenvido"){
                if(type == "faltaenvido"){
                    this.game.typeEnvido = "envidorealfalta"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envidorealfalta" : this.playerTwo.envido = "envidorealfalta"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }
            }else if(this.game.typeEnvido == "envidoenvidoreal"){
                if(type == "faltaenvido"){
                    this.game.typeEnvido = "envidoenvidorealfalta"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envidoenvidorealfalta" : this.playerTwo.envido = "envidoenvidorealfalta"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }
            }
        },
        acceptEnvido(somePlayer){   
            let type = this.game.typeEnvido
            this.panelEnvidoP1 = false
            this.panelEnvidoP2 = false
            this.botPlayer.envidoStatus = true
            this.envidoAccept = "aceptado"
            this.botPlayer.envidoWait = false
            this.count++
            let pointsFaltaEnvido = this.pointsWinFaltaEnvido(somePlayer)
            if(type == "envido"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.winEnvido = "P1"
                    this.game.p1Points += 2
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.winEnvido = "P2"
                    this.game.p2Points += 2
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.winEnvido = "P1"
                        this.game.p1Points += 2
                    }else if(this.game.mano == "P2"){
                        this.winEnvido = "P2"
                        this.game.p2Points += 2
                    }
                }
            }else if(type == "realenvido"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.winEnvido = "P1"
                    this.game.p1Points += 3
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.winEnvido = "P2"
                    this.game.p2Points += 3
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.winEnvido = "P1"
                        this.game.p1Points += 3
                    }else if(this.game.mano == "P2"){
                        this.winEnvido = "P2"
                        this.game.p2Points += 3
                    }
                }
            }else if(type == "faltaenvido"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.winEnvido = "P1"
                    this.game.p1Points += pointsFaltaEnvido
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.winEnvido = "P2"
                    this.game.p2Points += pointsFaltaEnvido
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.winEnvido = "P1"
                        this.game.p1Points += pointsFaltaEnvido
                    }else if(this.game.mano == "P2"){
                        this.winEnvido = "P2"
                        this.game.p2Points += pointsFaltaEnvido
                    }
                }
            }else if(type == "envidoenvido"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.winEnvido = "P1"
                    this.game.p1Points += 4
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.winEnvido = "P2"
                    this.game.p2Points += 4
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.winEnvido = "P1"
                        this.game.p1Points += 4
                    }else if(this.game.mano == "P2"){
                        this.winEnvido = "P2"
                        this.game.p2Points += 4
                    }
                }
            }else if(type == "envidorealenvido"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.winEnvido = "P1"
                    this.game.p1Points += 5
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.winEnvido = "P2"
                    this.game.p2Points += 5
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.winEnvido = "P1"
                        this.game.p1Points += 5
                    }else if(this.game.mano == "P2"){
                        this.winEnvido = "P2"
                        this.game.p2Points += 5
                    }
                }
            }else if(type == "envidofaltaenvido"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.winEnvido = "P1"
                    this.game.p1Points += pointsFaltaEnvido
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.winEnvido = "P2"
                    this.game.p2Points += pointsFaltaEnvido
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.winEnvido = "P1"
                        this.game.p1Points += pointsFaltaEnvido
                    }else if(this.game.mano == "P2"){
                        this.winEnvido = "P2"
                        this.game.p2Points += pointsFaltaEnvido
                    }
                }
            }else if(type == "realenvidofalta"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.winEnvido = "P1"
                    this.game.p1Points += pointsFaltaEnvido
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.winEnvido = "P2"
                    this.game.p2Points += pointsFaltaEnvido
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.winEnvido = "P1"
                        this.game.p1Points += pointsFaltaEnvido
                    }else if(this.game.mano == "P2"){
                        this.winEnvido = "P2"
                        this.game.p2Points += pointsFaltaEnvido
                    }
                }
            }else if(type == "envidoenvidoreal"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.winEnvido = "P1"
                    this.game.p1Points += 7
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.winEnvido = "P2"
                    this.game.p2Points += 7
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.winEnvido = "P1"
                        this.game.p1Points += 7
                    }else if(this.game.mano == "P2"){
                        this.winEnvido = "P2"
                        this.game.p2Points += 7
                    }
                }
            }else if(type == "envidorealfalta"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.winEnvido = "P1"
                    this.game.p1Points += pointsFaltaEnvido
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.winEnvido = "P2"
                    this.game.p2Points += pointsFaltaEnvido
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.winEnvido = "P1"
                        this.game.p1Points += pointsFaltaEnvido
                    }else if(this.game.mano == "P2"){
                        this.winEnvido = "P2"
                        this.game.p2Points += pointsFaltaEnvido
                    }
                }
            }else if(type == "envidoenvidorealfalta"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.winEnvido = "P1"
                    this.game.p1Points += pointsFaltaEnvido
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.winEnvido = "P2"
                    this.game.p2Points += pointsFaltaEnvido
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.winEnvido = "P1"
                        this.game.p1Points += pointsFaltaEnvido
                    }else if(this.game.mano == "P2"){
                        this.winEnvido = "P2"
                        this.game.p2Points += pointsFaltaEnvido
                    }
                }
            }
        },
        denyEnvido(){
            this.panelEnvidoP1 = false
            this.panelEnvidoP2 = false
            this.botPlayer.envidoStatus = true
            this.game.statusEnvido = false
            this.envidoAccept = "rechazado"
            this.botPlayer.envidoWait = false
            this.count++
            if(this.game.typeEnvido == "envido"){
                if(this.playerOne.envido == "envido"){
                    this.game.p1Points += 1
                }else if(this.playerTwo.envido == "envido"){
                    this.game.p2Points += 1
                }
            }else if(this.game.typeEnvido == "realenvido"){
                if(this.playerOne.envido == "realenvido"){
                    this.game.p1Points += 1
                }else if(this.playerTwo.envido == "realenvido"){
                    this.game.p2Points += 1
                }
            }else if(this.game.typeEnvido == "faltaenvido"){
                if(this.playerOne.envido == "faltaenvido"){
                    this.game.p1Points += 1
                }else if(this.playerTwo.envido == "faltaenvido"){
                    this.game.p2Points += 1
                }
            }else if(this.game.typeEnvido == "envidoenvido"){
                if(this.playerOne.envido == "envidoenvido"){
                    this.game.p1Points += 2
                }else if(this.playerTwo.envido == "envidoenvido"){
                    this.game.p2Points += 2
                }
            }else if(this.game.typeEnvido == "envidorealenvido"){
                if(this.playerOne.envido == "envidorealenvido"){
                    this.game.p1Points += 2
                }else if(this.playerTwo.envido == "envidorealenvido"){
                    this.game.p2Points += 2
                }
            }else if(this.game.typeEnvido == "envidofaltaenvido"){
                if(this.playerOne.envido == "envidofaltaenvido"){
                    this.game.p1Points += 2
                }else if(this.playerTwo.envido == "envidofaltaenvido"){
                    this.game.p2Points += 2
                }
            }else if(this.game.typeEnvido == "realenvidofalta"){
                if(this.playerOne.envido == "realenvidofalta"){
                    this.game.p1Points += 3
                }else if(this.playerTwo.envido == "realenvidofalta"){
                    this.game.p2Points += 3
                }
            }else if(this.game.typeEnvido == "envidoenvidoreal"){
                if(this.playerOne.envido == "envidoenvidoreal"){
                    this.game.p1Points += 4
                }else if(this.playerTwo.envido == "envidoenvidoreal"){
                    this.game.p2Points += 4
                }
            }else if(this.game.typeEnvido == "envidorealfalta"){
                if(this.playerOne.envido == "envidorealfalta"){
                    this.game.p1Points += 5
                }else if(this.playerTwo.envido == "envidorealfalta"){
                    this.game.p2Points += 5
                }
            }else if(this.game.typeEnvido == "envidoenvidorealfalta"){
                if(this.playerOne.envido == "envidoenvidorealfalta"){
                    this.game.p1Points += 7
                }else if(this.playerTwo.envido == "envidoenvidorealfalta"){
                    this.game.p2Points += 7
                }
            }

        },
        pointsEnvido(player){
            let hand = player.cardHand
            let numberPlayer = player.numberP
            let cardsForSuit = {}
            hand.forEach((card) => {
                const palo = card.suit;
                if (!cardsForSuit[palo]) {
                  cardsForSuit[palo] = [];
                }
                cardsForSuit[palo].push(card);
            });
            let envido = null
            for (let suit in cardsForSuit) {
                if(cardsForSuit[suit].length >=2){
                    envido = cardsForSuit[suit]
                }
            }
            if(envido){
                if(envido.length == 2){
                    let envidoPoints = envido.reduce((total, card) => total + card.valueEnvido, 20);
                    if(numberPlayer == 1){
                        this.playerOne.cardEnvido = envido
                        this.playerOne.totalEnvido = envidoPoints
                    }else{
                        this.playerTwo.cardEnvido = envido
                        this.playerTwo.totalEnvido = envidoPoints
                    }
                }else if(envido.length == 3){
                    let arrayOrdenado = envido.slice()
                    arrayOrdenado.sort((a, b) => b.valueEnvido - a.valueEnvido)
                    let highValues = arrayOrdenado.slice(0,2)
                    let envidoPoints = highValues.reduce((total, card) => total + card.valueEnvido, 20)
                    if(numberPlayer == 1){
                        this.playerOne.cardEnvido = highValues
                        this.playerOne.totalEnvido = envidoPoints
                    }else{
                        this.playerTwo.cardEnvido = highValues
                        this.playerTwo.totalEnvido = envidoPoints
                    }
                }
            }else{
                let arrayOrdenado = hand
                arrayOrdenado.sort((a, b) => b.valueEnvido - a.valueEnvido)
                let highValue = arrayOrdenado.slice(0,1)
                let value = highValue[0].valueEnvido
                if(numberPlayer == 1){
                    this.playerOne.cardEnvido = highValue
                    this.playerOne.totalEnvido = value
                }else{
                    this.playerTwo.cardEnvido = highValue
                    this.playerTwo.totalEnvido = value
                }
            }
        },
        botStatus(){
            this.botPlayer.decision = Math.floor(Math.random() * 10) + 1;
            console.log("puntos de decision:" + this.botPlayer.decision);
            if(this.playerOne.totalEnvido >= 32){
                this.botPlayer.envido = "muyaltos"
            }else if(this.playerOne.totalEnvido > 28){
                this.botPlayer.envido = "altos"
            }else if(this.playerOne.totalEnvido > 26){
                this.botPlayer.envido = "medios"
            }else if(this.playerOne.totalEnvido > 23){
                this.botPlayer.envido = "bajos"
            }else this.botPlayer.envido = "no"
            let valueTruco = 0
            this.playerOne.cardHand.forEach((card) =>{
                valueTruco += card.value
            })
            this.botPlayer.trucoPoints = valueTruco
            this.playerOne.cardHand = this.playerOne.cardHand.sort((a,b) => b.value - a.value).reverse()
        },
        botPlayCard(){
        },
        pointsWinFaltaEnvido(player){
            let playe = player.numberP
            if(this.game.p1PointsBad == false && this.game.p2PointsBad == false){
                if(playe == 1){ 
                    return (15 - this.game.p2PointsTotal)
                }else{
                    return (15 - this.game.p1PointsTotal)
                }
            }else if(this.game.p1PointsBad == true && this.game.p2PointsBad == false || this.game.p1PointsBad == false && this.game.p2PointsBad == true){
                let pointsP1 = 15 - this.game.p1PointsTotal
                let pointsP2 = 15 - this.game.p2PointsTotal
                if(pointsP1 < pointsP2){
                    return pointsP1
                }else{
                    return pointsP2
                }
            }else if(this.game.p1PointsBad == true && this.game.p2PointsBad == true){
                let pointsP1 = 15 -this.game.p1PointsTotal
                let pointsP2 = 15 -this.game.p2PointsTotal
                if(pointsP1 < pointsP2){
                    return pointsP1
                }else{
                    return pointsP2
                }
            }
        },
        ifClean(){
            if(this.envidoAccept == "rechazado"){
                this.clean(2000)
            }else if(this.envidoAccept == "aceptado"){
                if(this.winEnvido == "P1"){
                    setTimeout(() => {
                        this.showWinEnvido = true
                    }, 500);
                }else{
                    this.clean(2000)
                }
            }else{
                this.clean(2000)
            }
        },
    },
    computed:{
        fieldCheck(){
            if(this.game.typeTruco == "nada" || this.game.typeTruco == "trucoAccept" || this.game.typeTruco == "reTrucoAccept" || this.game.typeTruco == "vale4Accept"){
                if(this.field.length < 2){
                    ""
                }else{
                    let player = this.field[0][1].numberP
                    let card = this.field[0][0].value
                    let otherPlayer = this.field[1][1].numberP
                    let otherCard = this.field[1][0].value
                    if(card > otherCard){
                        if(player == 1){
                            this.game.p1Round += 1
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                            this.game.checkVictoryField.push("P1")
                        }else{
                            this.game.p2Round += 1
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                            this.game.checkVictoryField.push("P2")
                        }
                    }else if(otherCard > card){
                        if(otherPlayer == 1){
                            this.game.p1Round += 1
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                            this.game.checkVictoryField.push("P1")
                        }else{
                            this.game.p2Round += 1
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                            this.game.checkVictoryField.push("P2")
                        }
                    }else{
                        this.game.checkVictoryField.push("E")
                        if(player == 1){
                            this.game.p1Turn = true
                            this.game.p2Turn = false
                        }else{
                            this.game.p2Turn = true
                            this.game.p1Turn = false
                        }
                    }
                    setTimeout(() => {
                        this.field = []
                    }, 2000);
                }
            }else if(this.game.typeTruco == "truco" && this.field.length == 2){
                let player = this.field[0][1].truco
                let card = this.field[0][0].value
                let numberPlayer = this.field[0][1].numberP
                let otherPlayer = this.field[1][1].truco
                let otherCard = this.field[1][0].value
                let otherNumberPlayer = this.field[1][1].numberP
                setTimeout(() => {
                    this.field = []
                    this.game.typeTruco = "trucoAccept"
                }, 2000);
                if(player == true){
                    if(numberPlayer == 1){
                        if(card > otherCard){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else if(otherCard > card){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p1Turn = true
                            this.game.p2Turn = false
                        }
                    }else if(numberPlayer == 2){
                        if(card > otherCard){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else if(otherCard > card){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p2Turn = true
                            this.game.p1Turn = false
                        }
                    }
                }else if(otherPlayer == true){
                    if(otherNumberPlayer == 1){
                        if(otherCard > card){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else if(otherCard < card){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }
                    }else if(otherNumberPlayer == 2){
                        if(otherCard > card){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else if(otherCard < card){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }  
                    }
                }
            }else if(this.game.typeTruco == "reTruco" && this.field.length == 2){
                    let player = this.field[0][1].reTruco
                    let card = this.field[0][0].value
                    let numberPlayer = this.field[0][1].numberP
                    let otherPlayer = this.field[1][1].reTruco
                    let otherCard = this.field[1][0].value
                    let otherNumberPlayer = this.field[1][1].numberP
                    setTimeout(() => {
                        this.field = []
                        this.game.typeTruco = "reTrucoAccept"
                    }, 2000);
                    if(player == true){
                        if(numberPlayer == 1){
                            if(card > otherCard){
                                this.game.p1Round += 1
                                this.game.checkVictoryField.push("P1")
                                this.game.p1Turn = false
                                this.game.p2Turn = true
                            }else if(otherCard > card){
                                this.game.p2Round += 1
                                this.game.checkVictoryField.push("P2")
                                this.game.p2Turn = false
                                this.game.p1Turn = true
                            }else{
                                this.game.checkVictoryField.push("E")
                                this.game.p1Turn = true
                                this.game.p2Turn = false
                            }
                        }else if(numberPlayer == 2){
                            if(card > otherCard){
                                this.game.p2Round += 1
                                this.game.checkVictoryField.push("P2")
                                this.game.p2Turn = false
                                this.game.p1Turn = true
                            }else if(otherCard > card){
                                this.game.p1Round += 1
                                this.game.checkVictoryField.push("P1")
                                this.game.p1Turn = false
                                this.game.p2Turn = true
                            }else{
                                this.game.checkVictoryField.push("E")
                                this.game.p2Turn = true
                                this.game.p1Turn = false
                            }
                        }
                    }else if(otherPlayer == true){
                        if(otherNumberPlayer == 1){
                            if(otherCard > card){
                                this.game.p1Round += 1
                                this.game.checkVictoryField.push("P1")
                                this.game.p1Turn = false
                                this.game.p2Turn = true
                            }else if(otherCard < card){
                                this.game.p2Round += 1
                                this.game.checkVictoryField.push("P2")
                                this.game.p2Turn = false
                                this.game.p1Turn = true
                            }else{
                                this.game.checkVictoryField.push("E")
                                this.game.p1Turn = false
                                this.game.p2Turn = true
                            }
                        }else if(otherNumberPlayer == 2){
                            if(otherCard > card){
                                this.game.p2Round += 1
                                this.game.checkVictoryField.push("P2")
                                this.game.p2Turn = false
                                this.game.p1Turn = true
                            }else if(otherCard < card){
                                this.game.p1Round += 1
                                this.game.checkVictoryField.push("P1")
                                this.game.p1Turn = false
                                this.game.p2Turn = true
                            }else{
                                this.game.checkVictoryField.push("E")
                                this.game.p2Turn = false
                                this.game.p1Turn = true
                            }  
                        }
                    }
            }else if(this.game.typeTruco == "vale4" && this.field.length == 2){
                let player = this.field[0][1].vale4
                let card = this.field[0][0].value
                let numberPlayer = this.field[0][1].numberP
                let otherPlayer = this.field[1][1].vale4
                let otherCard = this.field[1][0].value
                let otherNumberPlayer = this.field[1][1].numberP
                setTimeout(() => {
                    this.field = []
                    this.game.typeTruco = "vale4Accept"
                }, 2000);
                if(player == true){
                    if(numberPlayer == 1){
                        if(card > otherCard){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else if(card < otherCard){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p1Turn = true
                            this.game.p2Turn = false
                        }
                    }else if(numberPlayer == 2){
                        if(card > otherCard){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else if(card < otherCard){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p2Turn = true
                            this.game.p1Turn = false
                        }
                    }
                }else if(otherPlayer == true){
                    if(otherNumberPlayer == 1){
                        if(otherCard > card){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else if(otherCard < card){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }
                    }else if(otherNumberPlayer == 2){
                        if(otherCard > card){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else if(otherCard < card){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }  
                    }
                }
            }
        },
        gameCheck(){
            if(this.game.checkVictoryField[0] == "E" && this.game.checkVictoryField[1] == "E" && this.game.checkVictoryField[2] == "E"){
                if(this.game.typeTruco == "nada"){
                    this.game.mano == "P1" ? this.game.p1Points += 1 : this.game.p2Points += 1
                    this.ifClean()
                }else if(this.game.typeTruco == "trucoAccept"){
                    this.game.mano == "P1" ? this.game.p1Points += 2 : this.game.p2Points += 2
                    this.ifClean()
                }else if(this.game.typeTruco == "reTrucoAccept"){
                    this.game.mano == "P1" ? this.game.p1Points += 3 : this.game.p2Points += 3
                    this.ifClean()
                }else if(this.game.typeTruco == "vale4Accept"){
                    this.game.mano == "P1" ? this.game.p1Points += 4 : this.game.p2Points += 4
                    this.ifClean()
                }
            }else if(this.game.checkVictoryField[0] == "E"){
                if(this.game.p1Round == 1 || this.game.p2Round == 1){
                    if(this.game.typeTruco == "nada"){
                        this.game.p1Round == 1 ? this.game.p1Points += 1 : this.game.p2Points += 1
                        this.ifClean()
                    }else if(this.game.typeTruco == "trucoAccept"){
                        this.game.p1Round == 1 ? this.game.p1Points += 2 : this.game.p2Points += 2
                        this.ifClean()
                    }else if(this.game.typeTruco == "reTrucoAccept"){
                        this.game.p1Round == 1 ? this.game.p1Points += 3 : this.game.p2Points += 3
                        this.ifClean()
                    }else if(this.game.typeTruco == "vale4Accept"){
                        this.game.p1Round == 1 ? this.game.p1Points += 4 : this.game.p2Points += 4
                        this.ifClean()
                    }
                }
            }else if(this.game.checkVictoryField[2] == "E" || this.game.checkVictoryField[1] == "E"){
                if(this.game.typeTruco == "nada"){
                    this.game.checkVictoryField[0] == "P1" ? this.game.p1Points += 1 : this.game.p2Points += 1
                    this.ifClean()
                }else if(this.game.typeTruco == "trucoAccept"){
                    this.game.checkVictoryField[0] == "P1" ? this.game.p1Points += 2 : this.game.p2Points += 2
                    this.ifClean()
                }else if(this.game.typeTruco == "reTrucoAccept"){
                    this.game.checkVictoryField[0] == "P1" ? this.game.p1Points += 3 : this.game.p2Points += 3
                    this.ifClean()
                }else if(this.game.typeTruco == "vale4Accept"){
                    this.game.checkVictoryField[0] == "P1" ? this.game.p1Points += 4 : this.game.p2Points += 4
                    this.ifClean()
                }
            }else if(this.game.p1Round == 2 || this.game.p2Round == 2){
                if(this.game.typeTruco == "nada"){
                    this.game.p1Round == 2 ? this.game.p1Points += 1 : this.game.p2Points += 1
                    this.ifClean()
                }else if(this.game.typeTruco == "trucoAccept"){
                    this.game.p1Round == 2 ? this.game.p1Points += 2 : this.game.p2Points += 2
                    this.ifClean()
                }else if(this.game.typeTruco == "reTrucoAccept"){
                    this.game.p1Round == 2 ? this.game.p1Points += 3 : this.game.p2Points += 3
                    this.ifClean()
                }else if(this.game.typeTruco == "vale4Accept"){
                    this.game.p1Round == 2 ? this.game.p1Points += 4 : this.game.p2Points += 4
                    this.ifClean()
                }
            }
        },
        checkPointsPlayer(){
            if(!this.game.p1PointsBad){
                if(this.game.p1PointsTotal >= 15){
                    this.game.p1Buenas = this.game.p1PointsTotal - 15
                    this.game.p1PointsBad = true
                    this.game.p1PointsTotal = 0
                }
            }
            if(!this.game.p2PointsBad){
                if(this.game.p2PointsTotal >= 15){
                    this.game.p2Buenas = this.game.p2PointsTotal - 15
                    this.game.p2PointsBad = true
                    this.game.p2PointsTotal = 0
                }
            }
            if(this.game.p1PointsBad){
                if(this.game.p1Buenas >= 15){
                    this.game.winner = "Perdiste, ganó tostador"
                    let defeat = this.defeat += 1
                    localStorage.setItem('defeat', JSON.stringify(defeat));
                }
            }
            if(this.game.p2PointsBad){
                if(this.game.p2Buenas >= 15){
                    this.game.winner = `Felicitaciones ${this.namePlayer}, ganaste!!`
                    let victory = this.victory += 1
                    localStorage.setItem('victory', JSON.stringify(victory));
                }
            }
        },
        botProgram(){
            console.log(this.count);
            if(this.playerOne.cardHand.length >= 1 && this.field.length <= 1 && this.botPlayer.botStart == true && !this.game.p1Turn && this.botPlayer.envidoStatus == true && this.botPlayer.trucoStatus == true && this.showWinEnvido == false && this.botPlayer.envidoWait == false){
                setTimeout(() => {
                    this.botPlayer.play = true
                }, 2000);
                if(this.playerOne.cardHand.length == 3 && this.botPlayer.play){
                    if(this.botPlayer.decision <=5 && this.game.mano == "P1"){
                        this.selectCard(this.playerOne.cardHand[0], this.playerOne)
                    }else if(this.botPlayer.decision >=5 && this.game.mano == "P1"){
                        this.selectCard(this.playerOne.cardHand[2], this.playerOne)
                    }else{
                        let card = this.playerOne.cardHand.filter((card) => card.value > this.field[0][0].value)
                        if(card.length > 0){
                            this.selectCard(card[0], this.playerOne)
                        }else{
                            this.selectCard(this.playerOne.cardHand[0], this.playerOne)
                        }
                    }
                }else if(this.playerOne.cardHand.length == 2 && this.botPlayer.play){
                    if(this.game.checkVictoryField[0] == "P2" || this.game.checkVictoryField[0] == "E"){
                        this.selectCard(this.playerOne.cardHand[1], this.playerOne)
                    }else if(this.game.checkVictoryField[0] == "P1"){
                        if(this.botPlayer.decision <=5){
                            this.selectCard(this.playerOne.cardHand[0], this.playerOne)
                        }else if(this.botPlayer.decision >=5){
                            this.selectCard(this.playerOne.cardHand[1], this.playerOne)
                        }
                    }else{
                        let card = this.playerOne.cardHand.filter((card) => card.value > this.field[0][0].value)
                        if(card.length > 0){
                            this.selectCard(card[0], this.playerOne)
                        }else{
                            this.selectCard(this.playerOne.cardHand[0], this.playerOne)
                        }
                    }
                }else if(this.playerOne.cardHand.length == 1 && this.botPlayer.play){
                    this.selectCard(this.playerOne.cardHand[0], this.playerOne)
                }
            }
        },
        botEnvidoBotTurn(){
            if(this.game.gameStart == true){
                if(!this.game.p1Turn && this.envidoSay == false && this.trucoSay == false){
                    if(this.botPlayer.envido == "no"){
                        if(this.botPlayer.decision == 1 && this.game.typeEnvido == ""){
                            this.sayEnvido("envido", this.playerOne)
                            this.botPlayer.envidoStatus = false
                        }else if(this.botPlayer.decision == 10 && this.game.typeEnvido == ""){
                            this.sayEnvido("realenvido", this.playerOne)
                            this.botPlayer.envidoStatus = false
                        }
                    }else if(this.botPlayer.envido == "bajos"){
                        this.sayEnvido("envido", this.playerOne)
                        this.botPlayer.envidoStatus = false
                    }else if(this.botPlayer.envido == "medios"){
                        if(this.botPlayer.decision <= 8 && this.game.typeEnvido == ""){
                            this.sayEnvido("envido", this.playerOne)
                            this.botPlayer.envidoStatus = false
                        }else if(this.botPlayer.decision >= 9 && this.game.typeEnvido == ""){
                            this.sayEnvido("realenvido", this.playerOne)
                            this.botPlayer.envidoStatus = false
                        }
                    }else if(this.botPlayer.envido == "altos"){
                        if(this.botPlayer.decision <=8 && this.game.typeEnvido == ""){
                            this.sayEnvido("envido", this.playerOne)
                            this.botPlayer.envidoStatus = false
                        }else if(this.botPlayer.decision >= 9 && this.game.typeEnvido == ""){
                            this.sayEnvido("realenvido", this.playerOne)
                            this.botPlayer.envidoStatus = false
                        }
                    }else if(this.botPlayer.envido == "muyaltos"){
                        this.sayEnvido("envido", this.playerOne)
                    }
                }
            }
        },
        botEnvidoResponses(){
            if(this.panelEnvidoP1 == true){
                if(this.envidoFalse == true){
                    this.acceptEnvido(this.playerOne)
                }else if (this.botPlayer.envido == "no") {
                    if(this.game.typeEnvido == "envido" && this.botPlayer.decision == 10){
                        this.sayEnvido("envido", this.playerOne)
                    }else this.denyEnvido()
                }else if (this.botPlayer.envido == "bajos") {
                    if(this.game.typeEnvido == "envido"){
                        if(this.botPlayer.decision == 9 || this.botPlayer.decision == 2){
                            this.sayEnvido("envido", this.playerOne)
                        }else if(this.botPlayer.decision == 3){
                            this.acceptEnvido(this.playerOne)
                        }else this.denyEnvido()
                    }else if(this.game.typeEnvido == "envido" && this.botPlayer.decision == 6 ||  this.game.typeEnvido == "envido" && this.botPlayer.decision == 1){
                        this.sayEnvido("realenvido", this.playerOne)
                    }else this.denyEnvido()
                }else if (this.botPlayer.envido == "medios") {
                    if(this.game.typeEnvido == "envido"){
                        if(this.botPlayer.decision <= 3){
                            this.sayEnvido("envido", this.playerOne)
                        }else if(this.botPlayer.decision <= 6){
                            this.acceptEnvido(this.playerOne)
                        }
                    }else if(this.game.typeEnvido == "envido"){
                        if(this.botPlayer.decision <= 8){
                            this.sayEnvido("realenvido", this.playerOne)
                        }else if(this.botPlayer.decision >= 9){
                            this.acceptEnvido(this.playerOne)
                        }
                    }else if(this.game.typeEnvido == "realenvido" || this.game.typeEnvido == "faltaenvido"){
                        if(this.botPlayer.decision < 8){
                            this.acceptEnvido(this.playerOne)
                        }else this.denyEnvido()
                    }else if(this.game.typeEnvido == "envidoenvido"){
                        if(this.botPlayer.decision < 5){
                            this.acceptEnvido(this.playerOne)
                        }else this.denyEnvido()
                    }else if(this.game.typeEnvido == "envidorealenvido"){
                        if(this.botPlayer.decision < 3 || this.botPlayer.decision  > 8){
                            this.acceptEnvido(this.playerOne)
                        }else this.denyEnvido()
                    }else if(this.game.typeEnvido == "envidofaltaenvido" || this.game.typeEnvido == "envidorealfalta"){
                        if(this.botPlayer.decision > 6){
                            this.acceptEnvido(this.playerOne)
                        }else this.denyEnvido()
                    }else if(this.game.typeEnvido == "envidoenvidoreal" && this.botPlayer.decision < 5){
                        this.acceptEnvido(this.playerOne)
                    }else this.denyEnvido()
                }else if (this.botPlayer.envido == "altos") {
                    if(this.game.typeEnvido == "envido"){
                        this.sayEnvido("envido",this.playerOne)
                    }else if(this.game.typeEnvido == "realenvido" || this.game.typeEnvido == "faltaenvido"){
                        this.acceptEnvido(this.playerOne)
                    }else if(this.game.typeEnvido == "envidoenvido"){
                        this.sayEnvido("realenvido", this.playerOne)
                    }else this.acceptEnvido(this.playerOne)
                }else if (this.botPlayer.envido == "muyaltos") {
                    if(this.game.typeEnvido == "envido"){
                        this.sayEnvido("envido",this.playerOne)
                    }else if(this.game.typeEnvido == "envidoenvido"){
                        this.sayEnvido("realenvido", this.playerOne)
                    }else if(this.game.typeEnvido == "realenvido"){
                        this.sayEnvido("faltaenvido", this.playerOne)
                    }else this.acceptEnvido(this.playerOne)
                }
            }
        },
        botTrucoTurn(){
                if(this.playerOne.cardHand.length >= 1 && this.showWinEnvido == false && this.game.trucoDeny == false && this.botPlayer.envidoWait == false){
                    if(!this.game.p1Turn && this.trucoSay == false && this.botPlayer.envidoStatus == true && this.playerOne.truco == false){
                        if(this.botPlayer.trucoPoints >= 20){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "truco")
                        }else if(this.botPlayer.trucoPoints >= 15 && this.botPlayer.decision <= 7 && this.botPlayer.trucoPoints < 20){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "truco")
                        }else if(this.botPlayer.trucoPoints >= 9 && this.botPlayer.decision >= 9 && this.botPlayer.trucoPoints < 15){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "truco")
                        }else if(this.botPlayer.trucoPoints >= 3 && this.botPlayer.decision == 4 && this.botPlayer.trucoPoints < 19){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "truco")
                        }else if(this.game.checkVictoryField[0] == "P1"){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "truco")
                        }
                    }else if(!this.game.p1Turn && this.game.typeTruco == "trucoAccept" && this.playerTwo.truco == true && this.playerOne.reTruco == false){
                        if(this.game.checkVictoryField[0] == "P1"){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "reTruco")
                        }else if(this.game.checkVictoryField[0] == "E" && this.playerOne.cardHand[1].value >= 10){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "reTruco")
                        }else if(this.game.checkVictoryField[1] == "P1"){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "reTruco")
                        }else if(this.game.checkVictoryField[1] == "E" && this.playerOne.cardHand[1].value >= 10){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "reTruco")
                        }
                    }else if(!this.game.p1Turn && this.game.typeTruco == "reTrucoAccept" && this.playerTwo.reTruco == true && this.playerOne.vale4 == false){
                        if(this.game.checkVictoryField[0] == "P1"){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "vale4")
                        }else if(this.game.checkVictoryField[0] == "E" && this.playerOne.cardHand[1].value >= 10){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "vale4")
                        }else if(this.game.checkVictoryField[1] == "P1" && this.playerOne.cardHand[0].value >= 10){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "vale4")
                        }else if(this.game.checkVictoryField[1] == "E" && this.playerOne.cardHand[0].value >= 10){
                            this.botPlayer.trucoStatus = false
                            this.cantarTruco(this.playerOne, "vale4")
                        }
                    }
                }
                if(this.panelTrucoP2 && this.game.trucoDeny == false){
                    if(!this.envidoSay && this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                        this.sayEnvido("envido", this.playerOne, true)
                    }else if(this.botPlayer.envidoWait == false){
                        if(this.game.checkVictoryField.length == 0){
                            if(this.playerTwo.truco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 24){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "reTruco")
                                }else if(this.botPlayer.trucoPoints >= 20){
                                    if(this.botPlayer.decision <=5){
                                        this.botPlayer.trucoStatus = false
                                        this.cantarTruco(this.playerOne, "reTruco")
                                    }else if(this.botPlayer.decision >=6){
                                        this.botPlayer.trucoStatus = false
                                        this.aceptarTruco("truco")
                                    }
                                }else if(this.botPlayer.trucoPoints >=18){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("truco")
                                }else if(this.botPlayer.trucoPoints >= 10 && this.botPlayer.trucoPoints < 18){
                                    if(this.botPlayer.decision <= 5){
                                        this.botPlayer.trucoStatus = false
                                        this.cantarTruco(this.playerOne, "reTruco")
                                    }else if(this.botPlayer.decision > 8){
                                        this.botPlayer.trucoStatus = false
                                        this.aceptarTruco("truco")
                                    }else this.denyTruco("truco", this.playerOne)
                                }else if(this.botPlayer.trucoPoints >= 3 && this.botPlayer.trucoPoints < 10){
                                    if(this.botPlayer.decision >= 8){
                                        this.botPlayer.trucoStatus = false
                                        this.cantarTruco(this.playerOne, "reTruco")
                                    }this.denyTruco("truco", this.playerOne)
                                }else this.denyTruco("truco", this.playerOne)
                            }else if(this.playerTwo.reTruco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 24){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("reTruco")
                                }else if(this.botPlayer.trucoPoints >= 20){
                                    if(this.botPlayer.decision <= 5){
                                        this.botPlayer.trucoStatus = false
                                        this.aceptarTruco("reTruco")
                                    }else{
                                        this.botPlayer.trucoStatus = false
                                        this.cantarTruco(this.playerOne, "vale4")
                                    }
                                }else if(this.botPlayer.trucoPoints >= 15 && this.botPlayer.trucoPoints < 20){
                                    if(this.botPlayer.decision > 8){
                                        this.botPlayer.trucoStatus = false
                                        this.aceptarTruco("reTruco")
                                    }else if(this.botPlayer.decision < 4){
                                        this.botPlayer.trucoStatus = false
                                        this.cantarTruco(this.playerOne, "vale4")
                                    }else this.denyTruco("reTruco", this.playerOne)
                                }else if(this.botPlayer.trucoPoints >= 3 && this.botPlayer.trucoPoints < 15){
                                    if(this.botPlayer.decision == 6 || this.botPlayer.decision == 3){
                                        this.botPlayer.trucoStatus = false
                                        this.cantarTruco(this.playerOne, "vale4")
                                    }else this.denyTruco("reTruco", this.playerOne)
                                }else this.denyTruco("reTruco", this.playerOne)
                            }else if(this.playerTwo.vale4 == true){
                                if(this.botPlayer.trucoPoints >= 28){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("vale4")
                                }else if(this.botPlayer.trucoPoints >= 26){
                                    if(this.botPlayer.decision <= 6){
                                        this.botPlayer.trucoStatus = false
                                        this.aceptarTruco("vale4")
                                    }else this.denyTruco("vale4", this.playerOne)
                                }else if(this.botPlayer.trucoPoints >= 24){
                                    if(this.botPlayer.decision <= 4){
                                        this.botPlayer.trucoStatus = false
                                        this.aceptarTruco("vale4")
                                    }else this.denyTruco("vale4", this.playerOne)
                                }else this.denyTruco("vale4", this.playerOne)
                            }
                        }else if(this.game.checkVictoryField.length == 1) {
                            if(this.game.checkVictoryField[0] == "P1" && this.playerTwo.truco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 24){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "reTruco")
                                }else if(this.botPlayer.trucoPoints >= 18){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("truco")
                                }else this.denyTruco("truco", this.playerOne)
                            }else if(this.game.checkVictoryField[0] == "E" && this.playerTwo.truco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 26){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "reTruco")
                                }else if(this.botPlayer.trucoPoints >= 20){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("truco")
                                }else this.denyTruco("truco", this.playerOne)
                            }else if(this.game.checkVictoryField[0] == "P2" && this.playerTwo.truco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 27){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "reTruco")
                                }else if(this.botPlayer.trucoPoints >= 22){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("truco")
                                }else this.denyTruco("truco", this.playerOne)
                            }else if(this.game.checkVictoryField[0] == "P1" && this.playerTwo.reTruco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 26){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "vale4")
                                }else if(this.botPlayer.trucoPoints >= 19){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("reTruco")
                                }else this.denyTruco("reTruco", this.playerOne)
                            }else if(this.game.checkVictoryField[0] == "E" && this.playerTwo.reTruco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 28){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "vale4")
                                }else if(this.botPlayer.trucoPoints >= 21){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("reTruco")
                                }else this.denyTruco("reTruco", this.playerOne)
                            }else if(this.game.checkVictoryField[0] == "P2" && this.playerTwo.reTruco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 30){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "vale4")
                                }else if(this.botPlayer.trucoPoints >= 22){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("reTruco")
                                }else this.denyTruco("reTruco", this.playerOne)
                            }else if(this.game.checkVictoryField[0] == "P1" && this.playerTwo.vale4 == true){
                                if(this.botPlayer.trucoPoints >= 22){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("vale4")
                                }else this.denyTruco("vale4", this.playerOne)
                            }else if(this.game.checkVictoryField[0] == "E" && this.playerTwo.vale4 == true){
                                if(this.botPlayer.trucoPoints >= 24){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("vale4")
                                }else this.denyTruco("vale4", this.playerOne)
                            }else if(this.game.checkVictoryField[0] == "P2" && this.playerTwo.vale4 == true){
                                if(this.botPlayer.trucoPoints >= 26){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("vale4")
                                }else this.denyTruco("vale4", this.playerOne)
                            }
                        }else if(this.game.checkVictoryField.length == 2) {
                            if(this.game.checkVictoryField[1] == "P1" && this.playerTwo.truco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 24){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "reTruco")
                                }else if(this.botPlayer.trucoPoints >= 18){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("truco")
                                }else this.denyTruco("truco", this.playerOne)
                            }else if(this.game.checkVictoryField[1] == "E" && this.playerTwo.truco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 26){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "reTruco")
                                }else if(this.botPlayer.trucoPoints >= 20){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("truco")
                                }else this.denyTruco("truco", this.playerOne)
                            }else if(this.game.checkVictoryField[1] == "P2" && this.playerTwo.truco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 27){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "reTruco")
                                }else if(this.botPlayer.trucoPoints >= 22){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("truco")
                                }else this.denyTruco("truco", this.playerOne)
                            }else if(this.game.checkVictoryField[1] == "P1" && this.playerTwo.reTruco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 26){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "vale4")
                                }else if(this.botPlayer.trucoPoints >= 19){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("reTruco")
                                }else this.denyTruco("reTruco", this.playerOne)
                            }else if(this.game.checkVictoryField[1] == "E" && this.playerTwo.reTruco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 28){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "vale4")
                                }else if(this.botPlayer.trucoPoints >= 21){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("reTruco")
                                }else this.denyTruco("reTruco", this.playerOne)
                            }else if(this.game.checkVictoryField[1] == "P2" && this.playerTwo.reTruco == true && this.playerTwo.vale4 == false){
                                if(this.botPlayer.trucoPoints >= 30){
                                    this.botPlayer.trucoStatus = false
                                    this.cantarTruco(this.playerOne, "vale4")
                                }else if(this.botPlayer.trucoPoints >= 22){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("reTruco")
                                }else this.denyTruco("reTruco", this.playerOne)
                            }else if(this.game.checkVictoryField[1] == "P1" && this.playerTwo.vale4 == true){
                                if(this.botPlayer.trucoPoints >= 22){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("vale4")
                                }else this.denyTruco("vale4", this.playerOne)
                            }else if(this.game.checkVictoryField[1] == "E" && this.playerTwo.vale4 == true){
                                if(this.botPlayer.trucoPoints >= 24){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("vale4")
                                }else this.denyTruco("vale4", this.playerOne)
                            }else if(this.game.checkVictoryField[1] == "P2" && this.playerTwo.vale4 == true){
                                if(this.botPlayer.trucoPoints >= 26){
                                    this.botPlayer.trucoStatus = false
                                    this.aceptarTruco("vale4")
                                }else this.denyTruco("vale4", this.playerOne)
                            }
                        }
                    }
                }
        }
    }
})
app.mount("#app")