import getSnackGroup from './snackGroup';

function getTrait(reportData,theTrait) {
    return (reportData.find(e=>e.trait===theTrait) || {}).score
}

export default function(report) {
    // milk/peanuts are 4 when allergy risk is higher
    let hasMilkAllergy = Boolean(getTrait(report,'milk-allergy') === 4)
    let hasPeanutAllergy = Boolean(getTrait(report,'peanuts-allergy') === 4)
    let carbohydrateIntake = getTrait(report,'carbohydrate-intake')
    let proteinIntake = getTrait(report,'protein-intake')
    let snackGroup = getSnackGroup(carbohydrateIntake,proteinIntake)
    let parsedReport = {hasMilkAllergy,hasPeanutAllergy,carbohydrateIntake,
                        proteinIntake,snackGroup}
    return parsedReport;
}