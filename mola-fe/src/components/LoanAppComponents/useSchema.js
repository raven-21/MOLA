import * as yup from "yup";
import { useState, useEffect } from "react";

const useSchema = (userLP, selectProduct) => {

	const [chosenProduct, setChosenProduct] = useState(null);

	useEffect(() => {
		if (userLP)
			setChosenProduct(userLP.find(item => item.loanprod_id === +selectProduct))
	}, [userLP, selectProduct])

	const schema = yup.object().shape({
		product: yup
			.number()
			.required("Required!"),
		purpose: yup
			.number()
			.required("Required!"),
		term: yup
			.number()
			.integer("Must be an integer")
			.required("Required!")
			.positive("Must be a positive no.")
			.typeError('Required!')
			.min(chosenProduct ? chosenProduct.min_term : 3, "Minimum of 3 mos.")
			.max(chosenProduct ? chosenProduct.max_term : 36, chosenProduct ? "Must not exceed " + chosenProduct.max_term + " mos." : "Must not exceed 36 mos."),
		amount: yup
			.number()
			.transform((o, v) => parseFloat(v.replace(/,/g, '')))
			.positive("Must be a positive no.")
			.required("Specify amount!")
			.typeError('Required!')
			.min(chosenProduct ? chosenProduct.min_amount : 3000, "Minimum amount is PHP 3,000 mos.")
			.max(chosenProduct ? chosenProduct.max_amount : 5000000, chosenProduct ? "Must not exceed PHP " + chosenProduct.max_amount.toLocaleString(undefined, { minimumFractionDigits: 2 }) : "Must not exceed PHP 5,000,000 mos."),

	});
	return { schema }
}

export default useSchema;