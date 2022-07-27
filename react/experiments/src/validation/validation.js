function experimentValidation (item) {
    let div = document.querySelector('.alert');

    if (div) {
        div.className = '';
        div.innerText = '';
    }

    let countPercentage = 0,
        experimentForm = document.getElementById('create_experiment'),
        experimentName = experimentForm.children[1].children[1].value,
        experimentUid = experimentForm.children[2].children[1].value,
        error = false;

    if (experimentName.length === 0) {
        error = true;

        experimentForm.children[1].children[1].setAttribute(
            'style', 'box-shadow: inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9'
        );

        experimentForm.children[1].children[2].setAttribute(
            'style', 'display:block'
        );
    }

    if (experimentUid.length === 0) {
        error = true;

        experimentForm.children[2].children[1].setAttribute(
            'style', 'box-shadow: inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9'
        );

        experimentForm.children[2].children[2].setAttribute(
            'style', 'display:block'
        )
    }

    let allBranchName = [];

    for (let i = 0; i < item.length - 2; i++) {
        let branchName = item[i].children[0].children[1].value,
            branchUid = item[i].children[0].children[1].value,
            percent = item[i].children[2].children[0].children[1].children[1].children[0].value;

        if(branchName.length !== 0) {
            allBranchName.push(branchName);
        }

        countPercentage += Number(percent);

        if (branchName.length === 0) {
            window.mode !== 'feature-toggle' ? error = true : error = false;

            item[i].children[0].children[1].setAttribute(
                'style', 'box-shadow: inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9'
            );
            item[i].children[0].children[2].setAttribute('style', 'display:block');
        }

        if (branchUid.length === 0) {
            window.mode !== 'feature-toggle' ? error = true : error = false;

            item[i].children[1].children[1].setAttribute(
                'style', 'box-shadow: inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9'
            );
            item[i].children[1].children[2].setAttribute('style', 'display:block');
        }

        if (branchName.length === 0 && countPercentage === 100) {
            experimentForm
                .children[0]
                .className = 'alert';

            experimentForm
                .children[0]
                .innerHTML += '<p>Please, delete the empty branches to make sure everything filled correctly.</p>';
        }
    }

    for (let i = 0; i < allBranchName.length; i++) {
        let n = 0;

        allBranchName.find(item => {
            if (item === allBranchName[i]) {
                n++;
            }
        })

        if (experimentForm
            .children[0]
            .innerHTML === '<p>The branch name must be unique.</p>'
        ) {
            break;
        }

        if (n > 1) {
            error = true;

            experimentForm
                .children[0]
                .className = 'alert';

            experimentForm
                .children[0]
                .innerHTML += '<p>The branch name must be unique.</p>';
        }
    }
    if (window.mode === 'feature-toggle') {
        countPercentage = 100;
    }

    if (countPercentage !== 99 && countPercentage !== 100) {
        error = true;

        experimentForm
            .children[0]
            .className = 'alert';

        experimentForm
            .children[0]
            .innerHTML += '<p>The sum of the branch percentages must be 100 or 99.</p>';
    }

    if (error) {
        throw new Error('Data validation error. Check the correctness of the entered data');
    }
}

export default experimentValidation;