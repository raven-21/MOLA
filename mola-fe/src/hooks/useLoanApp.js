import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import * as yup from "yup";

const useLoanApp = (watchProduct) => {

	const { data: loanProducts } = useFetch('http://localhost:5000/loanApps/loan_products');
	const { data: loanPurposes } = useFetch('http://localhost:5000/loanApps/loan_purposes');
	const { data: interestTypes } = useFetch('http://localhost:5000/loanApps/interest_types');

	const schema2 = yup.object().shape({
		product: yup
			.string()
			.required("Required!"),
		purpose: yup
			.string()
			.required("Required!"),
		term: yup
			.string()
			.required("Required!"),
		amount: yup
			.number()
			.transform((o, v) => parseFloat(v.replace(/,/g, '')))
			.positive("Amount must be a positive number")
			.required("Specify amount!")
			.typeError('Required!')
			.min(3000, "Minimum amount is 3,000")
			.when(
				'product', {
				is: 'LT',
				then: yup
					.number()
					.transform((o, v) => parseFloat(v.replace(/,/g, '')))
					.positive("Amount must be a positive number")
					.required("Specify amount!")
					.typeError('Required!')
					.min(3000, "Minimum amount is 3,000")
					.max(5000000, "Loan amount must not exceed 5,000,000")
			})
			.when(
				'product', {
				is: 'ST',
				then: yup
					.number()
					.transform((o, v) => parseFloat(v.replace(/,/g, '')))
					.positive("Amount must be a positive number")
					.required("Specify amount!")
					.typeError('Required!')
					.min(3000, "Minimum amount is 3,000")
					.max(500000, "Loan amount must not exceed 500,000")
			})
			.when(
				'product', {
				is: 'SL',
				then: yup
					.number()
					.transform((o, v) => parseFloat(v.replace(/,/g, '')))
					.positive("Amount must be a positive number")
					.required("Specify amount!")
					.typeError('Required!')
					.min(3000, "Minimum amount is 3,000")
					.max(500000, "Loan amount must not exceed 500,000")
			})
	});

	const schema = yup.object().shape({
		product: yup
			.string()
			.required("Required!")
			.nullable(),
		purpose: yup
			.string()
			.required("Required!")
			.nullable(),
		interestType: yup
			.string()
			.required("Required!")
			.nullable(),
		amount: yup
			.number()
			.positive()
			.integer()
			.required()
			.typeError('Amount must be a number')
			.when(
				'product', {
				is: 'LT',
				then: yup.number()
					.positive()
					.integer()
					.min(3000, "Minimum amount is 3,000")
					.max(5000000, "Loan amount must not exceed 5,000,000")
					.required("Required!")
					.typeError('Amount must be a number')
			})
			.when(
				'product', {
				is: 'ST',
				then: yup.number()
					.positive()
					.integer()
					.min(3000, "Minimum amount is 3,000")
					.max(500000, "Loan amount must not exceed 500,000")
					.required("Required!")
					.typeError('Amount must be a number')
			})
			.when(
				'product', {
				is: 'SL',
				then: yup.number()
					.positive()
					.integer()
					.min(3000, "Minimum amount is 3,000")
					.max(500000, "Loan amount must not exceed 500,000")
					.required("Required!")
					.typeError('Amount must be a number')
			}),
	}).required();

	return { loanProducts, loanPurposes, interestTypes, schema2 };
}

export default useLoanApp;