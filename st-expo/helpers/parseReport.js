import getSnackGroup from './snackGroup';

function getTrait(reportData,theTrait) {
    return (reportData.find(e=>e.trait===theTrait) || {}).score
}

export default function(report) {
    // milk/peanuts are 4 when allergy risk is higher
    let milkScore = getTrait(report,'milk-allergy')
    let peanutScore = getTrait(report,'peanuts-allergy')
    let mayHaveMilkAllergy = Boolean(milkScore >= 4)
    let mayHavePeanutAllergy = Boolean(peanutScore >= 4)
    let carbohydrateIntake = getTrait(report,'carbohydrate-intake')
    let proteinIntake = getTrait(report,'protein-intake')
    //let snackGroup = getSnackGroup(carbohydrateIntake,proteinIntake)
    let snackGroup = "b"
    let parsedReport = {mayHaveMilkAllergy,mayHavePeanutAllergy,carbohydrateIntake,
                        proteinIntake,snackGroup,milkScore,peanutScore}
    return parsedReport;
}