function radio() {
    let selectedValue = '';
    const choices = document.getElementsByName('scaling');
    for (const choice of choices) {
        if (choice.checked) {
            selectedValue = choice.value;
            break;
        }
    }
    return selectedValue
}

function sendResult(Result) {
    resultText = document.getElementById('varia')
    window.alert(Result)
    resultText.innerHTML = "The service we reccomend is " +Result
}
 
function Submit() {
    bsize = document.getElementById('bsize').value 
    budget = document.getElementById('budget').value
    security = document.getElementById('securityImport').value
    scaling = radio()
    
    // Weights for the reccomendation below, remember compare[paas, saas, iaas, premises]
    compare=[100,100,100,100]
    
    // Point calculation for reccomendation below
    // Business size

    if (bsize=="smallOrMedium"){
        compare[0]=compare[0]+35; compare[1]=compare[1]+15; compare[2]=compare[2]-85; compare[3]=compare[3]-500
    } else if (bsize=="Large"){
        compare[0]=compare[0]+5; compare[1]=compare[1]+35; compare[2]=compare[2]-35; compare[3]=compare[3]-100
    } else if (bsize=="National"){
        compare[0]=compare[0]-40; compare[1]=compare[1]+15; compare[2]=compare[2]+45; compare[3]=compare[3]+5
    } else{
        compare[0]=compare[0]-500; compare[1]=compare[1]-150; compare[2]=compare[2]+45; compare[3]=compare[3]+20
    }

    // Budget

    if (budget=="small"){
        compare[0]=compare[0]+35; compare[1]=compare[1]+15; compare[2]=compare[2]-45; compare[3]=compare[3]-100
    } else if (budget=="medium"){
        compare[0]=compare[0]+10; compare[1]=compare[1]+40; compare[2]=compare[2]-30; compare[3]=compare[3]-100
    } else if (budget=="high"){
        compare[0]=compare[0]-60; compare[1]=compare[1]-20; compare[2]=compare[2]+65; compare[3]=compare[3]+15
    } else{
        compare[0]=compare[0]-100; compare[1]=compare[1]-50; compare[2]=compare[2]+15; compare[3]=compare[3]+40
    }

    // Security

    if (security=="low"){
        compare[0]=compare[0]+35; compare[1]=compare[1]+15; compare[2]=compare[2]-45; compare[3]=compare[3]-100
    } else if (security=="medium"){
        compare[0]=compare[0]-35; compare[1]=compare[1]-15; compare[2]=compare[2]+15; compare[3]=compare[3]+15
    }else{
        compare[0]=compare[0]-80; compare[1]=compare[1]-40; compare[2]=compare[2]+30; compare[3]=compare[3]+40
    }

    // Comparison below

    if (compare[0]>compare[1] && compare[0]>compare[2] && compare[0]>compare[3]){
        console.log(compare)
        sendResult('paas')
    } else if (compare[1]>compare[0] && compare[1]>compare[2] && compare[1]>compare[3]){
        console.log(compare)
        sendResult('saas')
    } else if (compare[2]>compare[0] && compare[2]>compare[1] && compare[2]>compare[3]){
        console.log(compare)
        sendResult('iaas')
    } else if (compare[3]>compare[0] && compare[3]>compare[1] && compare[3]>compare[2]){
        console.log(compare)
        sendResult('premises')
    } else if (compare[3]>compare[0] && compare[3]>compare[1] && compare[3]==compare[2]){
        console.log(compare)
        sendResult('premises or iass')
    } else {
        console.log('An unexpected tie has occured, please put this result into Casenotes.txt')
        console.log(compare)
    }
}