import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useLoanApp = (watchProduct) => {

	const { data: loanProducts } = useFetch('http://localhost:5000/loanApps/loan_products');
	const { data: loanPurposes } = useFetch('http://localhost:5000/loanApps/loan_purposes');
	const { data: interestTypes } = useFetch('http://localhost:5000/loanApps/interest_types');

	const [amountEnable, setAmountEnable] = useState(false);
	const [maxAmount, setMaxAmount] = useState('');

	useEffect(() => {
		if (watchProduct) {
			setAmountEnable(true);
			if (watchProduct === 'LT') setMaxAmount('5,000,000')
			if (watchProduct === 'ST') setMaxAmount('500,000')
			if (watchProduct === 'SL') setMaxAmount('500,000')
		} else {
			setAmountEnable(false);
		}
	}, [watchProduct])

	return { loanProducts, loanPurposes, interestTypes, amountEnable, maxAmount };
}

export default useLoanApp;