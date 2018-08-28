export default function(snackGroup) {
    switch(snackGroup) {
        case 'a': 
            return [
                'Low Carb & Low Protein',
                'Foods that contain less than ~20% protein and less than ~20% carbs by weight.',
                'Your DNA suggests you are likely to enjoy snacks with low carbs & low protein.'
            ]   
        case 'b': 
            return [
                'High Carb & Low Protein',
                'Foods that contain less than ~15% protein and more than ~25% carbs by weight.',
                'Your DNA suggests you are likely to enjoy snacks with high carbs & low protein.'
            ]  
        case 'c': 
            return [
                'Regular Carb & Regular Protein',
                'Foods that contain protein and carbs both between ~15% and ~30% carbs by weight.',
                'Your DNA suggests you are likely to enjoy snacks with an average amount of carbs & protein.'
            ]  
        case 'd': 
            return [
                'Low Carb & High Protein',
                'Foods that contain more than ~25% protein and less than ~15% carbs by weight.',
                'Your DNA suggests you are likely to enjoy snacks with low carbs & high protein.'
            ]                                              
        default: 
            return [
                'High Carb & High Protein',
                'Foods that contain more than ~25% protein and more than ~25% carbs by weight.',
                'Your DNA suggests you are likely to enjoy snacks with high carbs & high protein.'
            ]
                              
    }
}