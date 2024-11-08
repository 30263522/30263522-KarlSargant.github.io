//Noughts and Crosses (Didn't have enough time to complete)
function XandO() {
    TL = 4
    TM = 3
    TR = 8
    ML = 9
    MM = 5
    MR = 1
    BL = 2
    BM = 7
    BR = 6
    AIT = 1
    RecentO= ''
    RecentX = ''
    AInought = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    AIcross = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    board[TL, TM, TR,
         ML, MM, MR,
         BL, BM, BR]

    // 4,3,8
    // 9,5,1
    // 2,7,6
    //Players
    while (AIT < 3) {
        if (AIT == 1) {
            //AI1
            //:3 Set turn to 2 every move
            if (MM == 5 && TL == 4 && TR == 8 && BL == 2 && BR == 6) {
                if(Math.floor(Math.random()*5 +1)==1){
                    AInought[5]==MM;
                    MM==0
                    RecentO=AInought[5]
                } else if(Math.floor(Math.random()*5 +1)==2){
                    AInought[1]==TL;
                    TL==0
                    RecentO=AInought[1]
                }else if(Math.floor(Math.random()*5 +1)==3){
                    AInought[3]==TR;
                    TR==0
                    RecentO=AInought[3]
                }else if(Math.floor(Math.random()*5 +1)==4){
                    AInought[7]==BL;
                    BL==0
                    RecentO=AInought[7]
                }else if(Math.floor(Math.random()*5 +1)==5){
                    AInought[9]==BR;
                    BR==0
                    RecentO=AInought[9]
                }else{AIT==3;}
            } else if(TR!=0(AInought[1]!=0 && AInought[2] !=0 ||AInought[5]!=0 &&AInought[7]!=0||AInought[6]!=0 &&AInought[9]!=0)){
                AInought[3]=TR
                TR=0
            } else if(TM!=0){
                AInought[2]=TR
                TR=0
            } else if(TL!=0){
                AInought[1]=TR
                TR=0
            } else if(ML!=0){
                AInought[4]=TR
                TR=0
            } else if(MM!=0){
                AInought[5]=TR
                TR=0
            } else if(MR!=0){
                AInought[6]=TR
                TR=0
            } else if(BL!=0){
                AInought[7]=TR
                TR=0
            } else if(BM!=0){
                AInought[8]=TR
                TR=0
            } else if(BR!=0){
                AInought[9]=TR
                TR=0
            }


        } else {
            //AI2
            //:3

        }
    }






    //Logic

    //
}

function AIO(AIT) {

}

function AIX(AIT) { }