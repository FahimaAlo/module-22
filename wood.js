function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood   = bedQuantity * perBedWood;

    const toTalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return toTalWood;
}

const wood = woodQuantity(0,0,1);
console.log('wood needed:', wood);