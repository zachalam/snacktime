export default function(c,p) {
    // c = carb intake (0-4)
    // p = protein intake (0-4)
    // clasified food intake into 1 of 5 categories
    switch(c) {
        case 0:
        switch(p) {
            case 0: return 'a'
            case 1: return 'a'
            case 2: return 'c'
            case 3: return 'd'
            default: return 'd'  // case '4' is default
        }
        case 1:
        switch(p) {
            case 0: return 'a'
            case 1: return 'a'
            case 2: return 'c'
            case 3: return 'd'
            default: return 'd'
        }
        case 2:
        switch(p) {
            case 0: return 'c'
            case 1: return 'c'
            case 2: return 'c'
            case 3: return 'c'
            default: return 'd'
        }
        case 3:
        switch(p) {
            case 0: return 'b'
            case 1: return 'b'
            case 2: return 'c'
            case 3: return 'e'
            default: return 'e'
        }
        default:    // case 4
        switch(p) {
            case 0: return 'b'
            case 1: return 'b'
            case 2: return 'b'
            case 3: return 'e'
            default: return 'e'
        }                                
    }
}