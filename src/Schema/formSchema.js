import * as yup from 'yup'
// import { boolean } from 'yup/lib/locale'

export default yup.object().shape({
    nickname: yup
        .string()
        .required("Plant name is required")
        .min(2, "name must be at least 2 characters"),
        species: yup
        .string()
        .required("Species is required")
        .min(2, "name must be at least 2 characters"),
        h2ofrequency: yup
        .string()
        .required("Water Frequency is required")
        .min(2, "name must be at least 2 characters"),
        image: yup.boolean(),

    })