export default function calculateCost(quantity: number, rooms: number) {
    let price;
    
    switch (true) {
        case quantity <= 30:
            price = 290;
            break;
        case quantity <= 60:
            price = 250;
            break;
        case quantity <= 150:
            price = 220;
            break;
        default:
            price = 200;
            break;
    }
    
    let roomCoefficient;
    switch (rooms) {
        case 1:
            roomCoefficient = 1;
            break;
        case 2:
            roomCoefficient = 1.2;
            break;
        case 3:
            roomCoefficient = 1.4;
            break;
        case 4:
            roomCoefficient = 1.6;
            break;
        case 5:
            roomCoefficient = 1.8;
            break;
        case 6:
            roomCoefficient = 2;
            break;
        case 7:
            roomCoefficient = 2.2;
            break;
        case 8:
            roomCoefficient = 2.3;
            break;
        case 9:
            roomCoefficient = 2.5;
            break;
        default:
            roomCoefficient = 1;
            break;
    }
    
    return quantity * price * roomCoefficient;
}