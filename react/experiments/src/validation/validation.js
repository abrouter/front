function experimentValidation (item) {
    let countPercentage = 0,
        experimentForm = document.getElementById('create_experiment'),
        experimentName = experimentForm.children[0].children[1].value,
        exprimentUid = experimentForm.children[1].children[1].value;

    if (experimentName.length === 0) {
        experimentForm.children[0].children[1].setAttribute(
            'style', 'box-shadow: inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9'
        );

        experimentForm.children[0].children[2].setAttribute(
            'style', 'display:block'
        );
    }

    if (exprimentUid.length === 0) {
        experimentForm.children[1].children[1].setAttribute(
            'style', 'box-shadow: inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9'
        );

        experimentForm.children[1].children[2].setAttribute(
            'style', 'display:block'
        )
    }


    for (let i = 0; i < item.length - 2; i++) {
        let branchName = item[i].children[0].children[1].value,
            percent = item[i].children[1].children[0].children[1].children[1].children[0].value;

        countPercentage += Number(percent);

        if (branchName.length === 0) {
            item[i].children[0].children[1].setAttribute(
                'style', 'box-shadow: inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9'
            );
            item[i].children[0].children[2].setAttribute('style', 'display:block');
        }

        if (branchName.length === 0 && countPercentage === 100) {
            console.log('Please, delete the empty branches to make sure everything filled correctly')
        }
    }

    if (countPercentage !== 100 || countPercentage !== 99) {
        console.log('The sum of the branch percentages must be 100 or 99')
    }
}

export default experimentValidation;