import * as yup from "yup";

const useSchema = () => {

	const schema = yup.object().shape({

		purpose: yup
			.number()
			.required("Required!"),
		term: yup
			.number()
			.integer("Must be an integer")
			.required("Required!")
			.positive("Must be a positive no.")
			.typeError('Required!')
			.min(3, "Minimum of 3 mos.")
			.max(120, "Must not exceed 120 mos."),
		amount: yup
			.number()
			.transform((o, v) => parseFloat(v.replace(/,/g, '')))
			.positive("Must be a positive no.")
			.required("Specify amount!")
			.typeError('Required!')
			.min(3000, "Minimum amount is PHP 3,000 mos.")
			.max(10000000, "Must not exceed PHP 10,000,000 mos."),
	});

	return { schema }
}

export default useSchema;